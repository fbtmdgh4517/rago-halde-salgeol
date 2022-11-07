import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now,
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const Post = mongoose.model('Post', PostSchema);
export default Post;
