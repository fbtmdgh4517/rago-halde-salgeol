import React from 'react';
import styled from 'styled-components';
// import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import CommentInput from '../comments/CommentInput';
import Button from '../../components/common/Button';
import CommentsList from '../comments/CommentsList';

const CommentsViewerBlock = styled(Responsive)`
    margin-top: 4rem;
`;

const CommentButtonBlock = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: flex-end;
`;

const CommentsViewer = ({ loading, user, body, onChangeCommentInput, onWriteComment, comments, onToggleAskRemove }) => {
    return (
        <CommentsViewerBlock>
            <CommentInput onChangeCommentInput={onChangeCommentInput} body={body} />
            <CommentButtonBlock>
                <Button onClick={onWriteComment}>댓글 작성</Button>
            </CommentButtonBlock>
            <CommentsList user={user} comments={comments} loading={loading} onToggleAskRemove={onToggleAskRemove} />
        </CommentsViewerBlock>
    );
};

export default CommentsViewer;
