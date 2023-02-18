import { TitleSection } from "@/components/shared/TitleSection";
import { TrendContainerGrid, TrendingContainer } from "./styles";

import { CategorieProps, CategoriesProps, EventProps } from "@/@types/events";
import Link from "next/link";
import { FilterTags } from "../../partials/home/FilterTags";
import { Button } from "../Button";
import { EventCard } from "../EventCard";

interface GridEventsProps {
    events: EventProps[];
    categories: CategorieProps[];
    hasFilter: boolean;
    hasTitle: boolean;
    hasMore: boolean;
}

export const GridEvents = ({ events, hasFilter, hasTitle, hasMore, categories }: GridEventsProps) => {

    return(
        <TrendingContainer className="container">
            

            {hasFilter && <FilterTags categories={categories} />}

            {hasTitle && <TitleSection title="Em Alta" seeAllText="Ver Todos" seeALlLink="/events" /> }
            

            <TrendContainerGrid>
                {
                    events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))
                }
                {
                    hasMore &&
                        <Button
                            width={25}
                            className="outline"
                            color="primary-500"
                            textColor="primary-500"
                        >
                            Mais Eventos
                        </Button>
                }
            </TrendContainerGrid>
        </TrendingContainer>
    );
}