import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/posts';
import { useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button';

const WritePostButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const PostListContainer = () => {
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

    return <PostList loading={loading} error={error} posts={posts} showWriteButton={user} />;
    // return (
    //     <div>
    //         {/* <WritePostButtonWrapper> */}
    //         {user && (
    //             <Link
    //                 className="h-[35px] items-center justify-center rounded-3xl bg-blue-500 px-2 py-0.5 text-base font-medium text-white hover:bg-blue-700 sm:flex w-32 mx-auto"
    //                 to="/write"
    //             >
    //                 새 글 작성하기
    //             </Link>
    //         )}
    //         {/* </WritePostButtonWrapper> */}
    //         <PostList loading={loading} error={error} posts={posts} showWriteButton={user} />
    //     </div>
    // );
};

export default PostListContainer;
