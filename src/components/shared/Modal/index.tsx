import Image from "next/image";
import React from "react";
import { CloseSquare } from "react-iconly";
import { Button } from "../Button";
import { ModalContainer, ModalWrapper } from "./styles";

interface ModalProps {
    title: string;
    subtitle: string;
    confirmText: string;
    primaryColor: string;
    textColor: string;
    imageModal?: React.ReactNode;
    isActive: boolean;
    actionModal: ()=>void;
    handleModal: ()=>void;
}

export const Modal = ({...props}: ModalProps) => {

    return(
        <ModalWrapper className={props.isActive ? 'active' : ''}>
            <ModalContainer>
                { props.imageModal && props.imageModal }

                <h3>{props.title}</h3>
                <p>{props.subtitle}</p>

                <footer>
                    <button onClick={props.actionModal}>{props.confirmText}</button>

                    <button className="cancel" onClick={props.handleModal}>
                        <CloseSquare set="bold" />
                        Cancelar
                    </button>
                </footer>
            </ModalContainer>
        </ModalWrapper>
    );
}