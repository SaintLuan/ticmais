import { TitleSection } from "@/components/shared/TitleSection";
import { TrendContainerGrid, TrendEvent, TrendEventImage, TrendEventInfos, TrendingContainer } from "./styles";

import { EventsProps } from "@/@types/events";
import { Heart, Location } from "react-iconly";
import Link from "next/link";
import Image from "next/image";
import { FilterTags } from "../../partials/home/FilterTags";

export const GridEvents = ({ events }: EventsProps) => {
    return(
        <TrendingContainer className="container">
            <FilterTags />
            <TitleSection title="Em Alta" seeAllText="Ver Todos" seeALlLink="/events" />

            <TrendContainerGrid>
                {
                    events.map((event) => (
                        <Link key={event.title} href={'/events/' + event.slug}>
                            <TrendEvent>
                                <TrendEventImage>
                                    <Image width={400} height={250}  src={event.thumbnail} alt={event.title} />
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
                        </Link>
                    ))
                }
            </TrendContainerGrid>
        </TrendingContainer>
    );
}