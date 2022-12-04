import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import CommentInput from '../comments/CommentInput';
import CommentsList from '../comments/CommentsList';

const CommentsViewerBlock = styled(Responsive)`
    margin-top: 4rem;
    max-width: 64rem;
`;

const CommentsViewer = ({
    loading,
    user,
    body,
    onChangeCommentInput,
    onWriteComment,
    comments,
    onToggleAskRemove,
    postId,
}) => {
    // console.log(postId);
    // if (comments) {
    //     console.log(commentId);
    // }
    return (
        <CommentsViewerBlock>
            <CommentInput onChangeCommentInput={onChangeCommentInput} body={body} />
            <button
                className="h-9 items-center space-x-1 rounded-md bg-blue-500 py-2 px-3 text-white shadow-md hover:bg-blue-400 mt-4 flex"
                onClick={onWriteComment}
            >
                댓글 작성
            </button>
            {comments && (
                <CommentsList
                    user={user}
                    comments={comments}
                    loading={loading}
                    onToggleAskRemove={onToggleAskRemove}
                    postId={postId}
                    body={body}
                    onChangeCommentInput={onChangeCommentInput}
                />
            )}
        </CommentsViewerBlock>
    );
};

export default CommentsViewer;
