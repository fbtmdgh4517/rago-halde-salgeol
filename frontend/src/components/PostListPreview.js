import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useSearchParams } from '../../node_modules/react-router-dom/dist/index';
import { listPosts } from '../modules/posts';
import PostItem from './posts/PostItem';
import PostList from './posts/PostList';

const PostListPreview = () => {
    const { username } = useParams();
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const { posts, error, loading, user } = useSelector(({ posts, loading, user }) => ({
        posts: posts.posts,
        error: posts.error,
        loading: loading['posts/LIST_POSTS'],
        user: user.user,
    }));

    useEffect(() => {
        const tag = searchParams.get('tag');
        const page = parseInt(searchParams.get('page'), 10) || 1;
        dispatch(listPosts({ tag, username, page }));
    }, [dispatch, searchParams, username]);
    return (
        <div className="border border-blue-600 max-w-5xl container mx-auto rounded-xl shadow-md p-4 m-4">
            <h4 className="pb-4 text-xl font-semibold">게시판</h4>
            <PostList loading={loading} error={error} posts={posts} showWriteButton={user} />
        </div>
    );
};

export default PostListPreview;
