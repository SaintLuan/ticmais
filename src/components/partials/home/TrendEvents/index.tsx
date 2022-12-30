import { TitleSection } from "@/components/shared/TitleSection";
import { TrendContainerGrid, TrendEvent, TrendEventImage, TrendEventInfos, TrendingContainer } from "./styles";

import { EventsProps } from "@/@types/events";
import { Heart, Location } from "react-iconly";

export const TrendEvents = ({ events }: EventsProps) => {
    return(
        <TrendingContainer className="container">
            <TitleSection title="Em Alta" seeAllText="Ver Todos" seeALlLink="/events" />

            <TrendContainerGrid>
                {
                    events.map((event) => (
                        <TrendEvent key={event.title}>
                            <TrendEventImage>
                                <img src={event.thumbnail} alt={event.title} />
                            </TrendEventImage>

                            <TrendEventInfos>
                                <h2 className="title">{event.title}</h2>

                                <span className="date">{event.startDate}</span>

                                <span className="local">
                                    <Location />
                                    <span>{event.local}</span>
                                    <Heart />
                                </span>
                            </TrendEventInfos>
                            
                        </TrendEvent>
                    ))
                }
            </TrendContainerGrid>
        </TrendingContainer>
    );
}