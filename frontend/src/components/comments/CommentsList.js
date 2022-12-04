import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import axios from '../../../node_modules/axios/index';

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

const CommentItem = ({ user, comment, onToggleAskRemove, postId }) => {
    const [selectedUpdateComment, setSelectedUpdateComment] = useState(false);
    const [updateComment, setUpdateComment] = useState(comment.body);

    const updateClickHandler = () => {
        setSelectedUpdateComment(!selectedUpdateComment);
    };

    const onUpdateComment = async () => {
        try {
            const response = await axios.put(`/api/posts/${postId}/comments/${comment._id}`, {
                body: `${updateComment}`,
            });
            console.log(response);
            console.log(updateComment);
            setSelectedUpdateComment(!selectedUpdateComment);
        } catch (e) {
            console.log(e);
        }
    };

    const onChange = (e) => {
        console.log(e.target.value);
        setUpdateComment(e.target.value);
    };

    return (
        <CommentItemBlock>
            <SubInfo username={comment.authorId.username} publishedDate={comment.createdAt} />
            {user && user._id === comment.authorId._id && (
                <CommentActionButtonsBlock>
                    <button
                        className="px-2 py-1 rounded text-gray-400 font-semibold border-none outline-none text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                        onClick={updateClickHandler}
                    >
                        수정
                    </button>
                    <button
                        className="px-2 py-1 rounded text-gray-400 font-semibold border-none outline-none text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                        onClick={() => onToggleAskRemove(comment._id)}
                    >
                        삭제
                    </button>
                </CommentActionButtonsBlock>
            )}
            {selectedUpdateComment ? (
                <div>
                    <input
                        className="h-12 w-full border border-gray-400 shadow-md rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        onChange={onChange}
                        placeholder="댓글을 입력하세요"
                        rows={2}
                        maxRows={20}
                    />
                    <button
                        onClick={onUpdateComment}
                        className="h-9 items-center space-x-1 rounded-md bg-blue-500 py-2 px-3 text-white shadow-md hover:bg-blue-400 mt-4 flex"
                    >
                        수정
                    </button>
                </div>
            ) : (
                <p>{updateComment}</p>
            )}
        </CommentItemBlock>
    );
};

const CommentsList = ({ loading, user, comments, onToggleAskRemove, postId, body, onChangeCommentInput }) => {
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
                                postId={postId}
                                body={body}
                                onChangeCommentInput={onChangeCommentInput}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default CommentsList;
