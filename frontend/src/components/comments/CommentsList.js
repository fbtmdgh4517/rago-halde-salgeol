import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';

const CommentsListBlock = styled(Responsive)`
    margin-top: 3rem;
    max-width: 64rem;
`;
const CommentItemBlock = styled.div`
    padding-top: 1rem;
    padding-bottom: 1rem;
    &:first-child {
        padding-top: 0;
    }
    & + & {
        border-top: 1px solid ${palette.gray[2]};
    }
    p {
        margin-top: 1rem;
    }
`;
const CommentActionButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-top: -1.5rem;
`;

const ActionButton = styled.span`
    color: ${palette.gray[6]};
    border: none;
    outline: none;
    font-size: 0.875rem;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
        background: ${palette.gray[1]};
        color: ${palette.cyan[7]};
    }
    & + & {
        margin-left: 0.25rem;
    }
`;

const CommentItem = ({ user, comment, onToggleAskRemove }) => {
    return (
        <CommentItemBlock>
            <SubInfo username={comment.authorId.username} publishedDate={comment.createdAt} />
            {user && user._id === comment.authorId._id && (
                <CommentActionButtonsBlock>
                    <ActionButton>수정</ActionButton>
                    <ActionButton onClick={() => onToggleAskRemove(comment._id)}>삭제</ActionButton>
                </CommentActionButtonsBlock>
            )}
            <p>{comment.body}</p>
        </CommentItemBlock>
    );
};

const CommentsList = ({ loading, user, comments, onToggleAskRemove }) => {
    return (
        <div className="mt-12 max-w-5xl">
            <div className="">
                {!loading && comments && (
                    <>
                        {comments.map((comment) => (
                            <CommentItem
                                user={user}
                                comment={comment}
                                onToggleAskRemove={onToggleAskRemove}
                                key={comment._id}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default CommentsList;
