import { CreateContainer, CreateFigure, CreateText } from "./styles";

import imageCreate from '@/assets/img/pages/home/create-event.svg';
import Image from "next/image";

export const CreateEvent = () =>{
    return(
        <CreateContainer>
            <CreateFigure>
                <Image src={imageCreate} alt="Crie seu evento na Ticmais!" />
            </CreateFigure>

            <CreateText>
                <h2>Crie seu evento!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </CreateText>
        </CreateContainer>
    );
}