import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useSearchParams } from '../../node_modules/react-router-dom/dist/index';
import { listPosts } from '../modules/posts';
import PostItemPreview from './posts/PostItemPreview';
import PostList from './posts/PostList';

const PostListPreview = () => {
    const [slicedPost, setSlicedPost] = useState([]);
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
        if (posts) {
            // console.log(posts[0]);
            const postsSlice = posts.slice(0, 6);
            setSlicedPost(postsSlice);
        }
    }, [dispatch, searchParams, username]);

    return (
        <div className="bg-white border border-blue-200 w-full mx-auto shadow-md p-4 mb-9 rounded-xl">
            <div className="grid grid-cols-4 pb-4">
                <h4 className="max-w-5xl rounded-xl text-xl font-semibold col-span-3">게시판</h4>
                <Link to="/postList" className="text-base text-gray-700 text-right col-span-1">
                    더보기
                </Link>
            </div>
            {!loading && posts && (
                <table className="table-auto w-full">
                    <tbody className="">
                        {slicedPost.map((post) => (
                            <tr className="hover:bg-blue-100/60">
                                <PostItemPreview post={post} key={post._id} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PostListPreview;
