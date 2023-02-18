import { EventProps } from "@/@types/events";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Location } from "react-iconly";
import { CardContainer, CardImage, CardInfos } from "./styles";

import imageDefault from '@/assets/img/card-default.png';

interface CardProps {
    event: EventProps;
}

export const EventCard = ({ event }: CardProps) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () =>{setLiked(!liked)};
    
    return(
        <CardContainer>
            <Link href={'/events/' + event.meta.slug}>
                <CardImage>
                    {
                        event.thumbnails['16x9'].src ?
                            <Image width={400} height={250}  src={'https://api.ticmais.ticpass.com.br' + event.thumbnails['16x9'].src} alt={event.label} />
                        :
                        <Image width={400} height={250}  src={imageDefault} alt={event.label} />   
                    }
                </CardImage>
            </Link>
            

            <CardInfos>
                <h2 className="title">{event.label}</h2>

                <span className="date">{event.schedule.start}</span>

                <span className="local">
                    <Location />
                    <span>{event.location.name}</span>
                    {
                        liked ? 
                            <button onClick={handleLike}><Heart set="bold" primaryColor="#FBA94C"/></button>
                        :   
                            <button onClick={handleLike}><Heart /></button>
                    }
                </span>
            </CardInfos>
            
        </CardContainer>
    );  
}