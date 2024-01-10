import React from 'react';
import { ModalBackgroundStyled, ModalStyled } from "./Styles";
import CharacterCard from './CharacterCard';

interface IModalProps {
    isOpen: boolean;
    data: any;
    onCloseRequest(data: object): void;
}

const Modal: React.FC<IModalProps> = ({ isOpen = false, data, onCloseRequest }: IModalProps) => {

    // if isOpen is false, dont render anything
    if (!isOpen) {
        return null;
    }

    // if isOpen is true, render the modal
    return (
        <>
            <ModalBackgroundStyled />
            <ModalStyled>
                <button className="close-btn" type="button" onClick={onCloseRequest}>Close</button>
                <CharacterCard details={data} />
            </ModalStyled>
        </>
    )
};

export default Modal;