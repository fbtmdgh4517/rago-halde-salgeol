import { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

const PostActionButtonsBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    margin-top: -1.5rem;
`;

const PostActionButtons = ({ onEdit, onRemove }) => {
    const [modal, setModal] = useState(false);
    const onRemoveClick = () => {
        setModal(true);
    };
    const onCancel = () => {
        setModal(false);
    };
    const onConfirm = () => {
        setModal(false);
        onRemove();
    };

    return (
        <>
            <PostActionButtonsBlock>
                <button
                    className="px-2 py-1 rounded text-gray-400 font-semibold border-none outline-none text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                    onClick={onEdit}
                >
                    수정
                </button>
                <button
                    className="px-2 py-1 rounded text-gray-400 font-semibold border-none outline-none text-sm cursor-pointer hover:bg-blue-100 hover:text-blue-500"
                    onClick={onRemoveClick}
                >
                    삭제
                </button>
            </PostActionButtonsBlock>
            <AskRemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
        </>
    );
};

export default PostActionButtons;
