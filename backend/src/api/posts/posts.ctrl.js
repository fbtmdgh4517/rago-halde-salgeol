import Post from '../../models/post.js';
import mongoose from 'mongoose';
import Joi from 'joi';
import sanitizeHtml from 'sanitize-html';
import Comment from '../../models/comment.js';

const { ObjectId } = mongoose.Types;

const sanitizeOption = {
    allowedTags: ['h1', 'h2', 'b', 'i', 'u', 's', 'p', 'ul', 'ol', 'li', 'blockquote', 'a', 'img'],
    allowedAttributes: {
        a: ['href', 'name', 'target'],
        img: ['src'],
        li: ['class'],
    },
    allowedSchemes: ['data', 'http'],
};

export const getPostById = async (ctx, next) => {
    const { postId } = ctx.params;
    if (!ObjectId.isValid(postId)) {
        ctx.status = 400;
        return;
    }
    try {
        const post = await Post.findById(postId).populate('author', 'username');
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.state.post = post;
        return next();
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const checkOwnPost = (ctx, next) => {
    const { user, post } = ctx.state;
    if (post.author._id.toString() !== user._id) {
        ctx.status = 403;
        return;
    }
    return next();
};

export const write = async (ctx) => {
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()).required(),
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { title, body, tags } = ctx.request.body;
    const post = new Post({
        title,
        body: sanitizeHtml(body, sanitizeOption),
        tags,
        user: ctx.state.user,
        author: ctx.state.user._id,
    });
    try {
        await post.save();
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};

const removeHtmlAndShorten = (body) => {
    const filtered = sanitizeHtml(body, {
        allowedTags: [],
    });
    return filtered.length < 200 ? filtered : `${filtered.slice(0, 200)}...`;
};

export const list = async (ctx) => {
    const page = parseInt(ctx.query.page || '1', 10);

    if (page < 1) {
        ctx.status = 400;
        return;
    }

    const { tag, username } = ctx.query;
    const query = {
        ...(username ? { 'user.username': username } : {}),
        ...(tag ? { tags: tag } : {}),
    };

    try {
        const posts = await Post.find(query)
            .populate('author', 'username')
            .sort({ _id: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .lean()
            .exec();
        const postCount = await Post.countDocuments(query).exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10));
        ctx.body = posts.map((post) => ({
            ...post,
            body: removeHtmlAndShorten(post.body),
        }));
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const read = async (ctx) => {
    ctx.body = ctx.state.post;
};

export const remove = async (ctx) => {
    const { postId } = ctx.params;
    try {
        await Post.findByIdAndRemove(postId).exec();
        await Comment.find({ post: postId }).remove().exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const update = async (ctx) => {
    const { postId } = ctx.params;
    const schema = Joi.object().keys({
        title: Joi.string().required(),
        body: Joi.string().required(),
        tags: Joi.array().items(Joi.string()),
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const nextData = { ...ctx.request.body };
    if (nextData.body) {
        nextData.body = sanitizeHtml(nextData.body);
    }
    try {
        const post = await Post.findByIdAndUpdate(postId, nextData, {
            new: true,
        }).exec();
        if (!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
