import React from 'react';

const CommentInput = ({ onChangeCommentInput, body }) => {
    const onChange = (e) => onChangeCommentInput(e.target.value);
    return (
        <>
            <input
                className="h-12 w-full border border-gray-400 shadow-md rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={body}
                onChange={onChange}
                placeholder="댓글을 입력하세요"
                rows={2}
                maxRows={20}
            />
        </>
    );
};

export default CommentInput;
