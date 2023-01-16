import { TitleSection } from "@/components/shared/TitleSection";
import { TrendContainerGrid, TrendingContainer } from "./styles";

import { EventsProps } from "@/@types/events";
import Link from "next/link";
import { FilterTags } from "../../partials/home/FilterTags";
import { Button } from "../Button";
import { EventCard } from "../EventCard";

export const GridEvents = ({ events }: EventsProps) => {

    return(
        <TrendingContainer className="container">
            <FilterTags />
            <TitleSection title="Em Alta" seeAllText="Ver Todos" seeALlLink="/events" />

            <TrendContainerGrid>
                {
                    events.map((event) => (
                        <EventCard key={event.title} event={event} />
                    ))
                }
                <Button
                    width={25}
                    className="outline"
                    color="primary-500"
                    textColor="primary-500"
                >
                    Mais Eventos
                </Button>
            </TrendContainerGrid>
        </TrendingContainer>
    );
}