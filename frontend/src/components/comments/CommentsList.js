import React from 'react';
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
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(`/api/posts/${postId}/comments/${commentId}`);
    //             console.log(response);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     }
    //     fetchData();
    // }, [])

    // const updateClickHandler = async () => {
    //     console.log(postId);
    //     console.log(commentId);
    //     try {
    //         const response = await axios.put(`/api/posts/${postId}/comments/${commentId}`);
    //         console.log(response);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // };

    return (
        <CommentItemBlock>
            <SubInfo username={comment.authorId.username} publishedDate={comment.createdAt} />
            {user && user._id === comment.authorId._id && (
                <CommentActionButtonsBlock>
                    {/* <ActionButton onClick={updateClickHandler}>수정</ActionButton> */}
                    <button
                        className="px-2 py-1 rounded text-gray-400 font-semibold border-none outline-none text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                        onClick={() => onToggleAskRemove(comment._id)}
                    >
                        삭제
                    </button>
                </CommentActionButtonsBlock>
            )}
            <p>{comment.body}</p>
        </CommentItemBlock>
    );
};

const CommentsList = ({ loading, user, comments, onToggleAskRemove, postId }) => {
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
                                // commentId={commentId}
                            />
                        ))}
                    </>
                )}
            </div>
        </div>
    );
};

export default CommentsList;
