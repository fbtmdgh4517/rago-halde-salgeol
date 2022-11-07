import CommentsViewerContainer from '../containers/comments/CommentsViewerContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostViewerContainer from '../containers/post/PostViewerContainer';

const PostPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostViewerContainer />
            <CommentsViewerContainer />
        </>
    );
};

export default PostPage;
