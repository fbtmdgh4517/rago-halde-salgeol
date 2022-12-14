import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentsViewer from '../../components/comments/CommentsViewer';
import { changeInput, writeComment, toggleAskRemove } from '../../modules/comments';
import { listComments, removeComment, cancelRemoveComment } from '../../modules/comments';
import AskModal from '../../components/common/AskModal';

const CommentsViewerContainer = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const { user, body, comments, commentId, askRemove, loading } = useSelector(({ user, comments, loading }) => ({
        body: comments.body,
        comments: comments.comments,
        commentId: comments.removeComment.commentId,
        askRemove: comments.askRemove,
        loading: loading['comments/LIST_COMMENTS'],
        user: user.user,
    }));

    useEffect(() => {
        dispatch(listComments(postId));
    }, [dispatch, postId]);

    const onChangeCommentInput = useCallback((body) => dispatch(changeInput(body)), [dispatch]);

    const onWriteComment = useCallback(() => {
        dispatch(writeComment(postId, body));
    }, [dispatch, postId, body]);

    const onToggleAskRemove = useCallback(
        (commentId) => {
            dispatch(toggleAskRemove(commentId));
        },
        [dispatch]
    );

    const onCancelRemoveComment = () => {
        dispatch(cancelRemoveComment());
    };

    const onConfirmRemove = useCallback(() => {
        dispatch(removeComment(postId, commentId));
    }, [dispatch, postId, commentId]);

    return (
        <>
            {comments && (
                <CommentsViewer
                    loading={loading}
                    user={user}
                    body={body}
                    onChangeCommentInput={onChangeCommentInput}
                    onWriteComment={onWriteComment}
                    comments={comments}
                    onToggleAskRemove={onToggleAskRemove}
                    postId={postId}
                />
            )}
            <AskModal
                title="?????? ??????"
                description="??? ????????? ????????? ?????????????????????????"
                confirmText="????????????"
                cancelText="??????"
                onConfirm={onConfirmRemove}
                onCancel={onCancelRemoveComment}
                visible={askRemove}
            />
        </>
    );
};

export default CommentsViewerContainer;
