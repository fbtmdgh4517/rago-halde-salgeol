import React from 'react';
import styled from 'styled-components';

const StyledCommentInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 1rem;
    border: 1px solid gray;
    border-radius: 4px;
    color: gray;
    display: block;
    line-height: 1.5;
`;
const CommentInput = ({ onChangeCommentInput, body }) => {
    const onChange = (e) => onChangeCommentInput(e.target.value);
    return (
        <>
            <hr />
            <StyledCommentInput
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
