import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { AppLayout } from "@/layouts/AppLayout";
import { EventCategory, EventContainer } from "@/styles/eventsStyles";

// Data
import { events } from "@/@data/events";
import { useEffect, useState } from "react";
import { FilterTags } from "@/components/partials/home/FilterTags";
import { EventProps } from "@/@types/events";
import { GridEvents } from "@/components/shared/GridEvents";
import { TitleSection } from "@/components/shared/TitleSection";

interface CategoryEventsProps {
    category: string;
    events: EventProps[];
}

const EventsPage = () =>{

    // Events data ajusts
    const [categorys, setCategorys] = useState<CategoryEventsProps[]>([]);

    useEffect(() => {
        let arrCategorys = new Array<CategoryEventsProps>();
        setCategorys([]);
        events.forEach((event, index) =>{
            if(arrCategorys.length === 0){
                let objArr = {
                    category: event.cattegory,
                    events: [event],
                }
                arrCategorys.push(objArr);
            }
            else{
                if(arrCategorys.find(item => item.category === event.cattegory)){
                    let catIndex = arrCategorys.findIndex((cat, i) => cat.category === event.cattegory);
                    arrCategorys[catIndex].events.push(event);
                }
                else{
                    let objArr = {
                        category: event.cattegory,
                        events: [event],
                    }
                    arrCategorys.push(objArr);
                }
            }
        });
        setCategorys(arrCategorys);
    }, []);

    return(
        <AppLayout title="Eventos">
            <Header />

            <EventContainer>  
                <FilterTags />
                {categorys.map(( category ) => (
                    <EventCategory key={category.category}>
                        <TitleSection 
                            title={category.category}
                            seeALlLink=''
                        />

                        <GridEvents events={category.events} hasFilter={false} hasTitle={false} hasMore={false} />
                    </EventCategory>
                ))}              
            </EventContainer>

            <Footer />
        </AppLayout>
    );
}

export default EventsPage;