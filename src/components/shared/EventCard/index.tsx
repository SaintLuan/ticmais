import { EventProps } from "@/@types/events";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Heart, Location } from "react-iconly";
import { CardContainer, CardImage, CardInfos } from "./styles";

interface CardProps {
    event: EventProps;
}

export const EventCard = ({ event }: CardProps) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () =>{setLiked(!liked)};
    
    return(
        <CardContainer>
            <Link href={'/events/' + event.slug}>
                <CardImage>
                    <Image width={400} height={250}  src={event.thumbnail} alt={event.title} />
                </CardImage>
            </Link>
            

            <CardInfos>
                <h2 className="title">{event.title}</h2>

                <span className="date">{event.startDate}</span>

                <span className="local">
                    <Location />
                    <span>{event.local}</span>
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