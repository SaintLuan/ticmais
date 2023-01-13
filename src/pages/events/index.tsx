import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { AppLayout } from "@/layouts/AppLayout";
import { EventContainer } from "@/styles/eventsStyles";

// Data
import { events } from "@/@data/events";
import { useEffect, useState } from "react";
import { FilterTags } from "@/components/partials/home/FilterTags";
import { EventsProps } from "@/@types/events";
import { GridEvents } from "@/components/shared/GridEvents";

const EventsPage = () =>{

    // Events data ajusts
    const [categorys, setCategorys] = useState<string[]>([]);

    useEffect(() => {
        var arrCategorys = new Array<string>();
        setCategorys([]);
        events.forEach((event, index) =>{
            if(arrCategorys.length === 0){
                arrCategorys.push(event.cattegory);
            }
            else{
                if(arrCategorys.find(category => category !== event.cattegory)){
                    arrCategorys.push(event.cattegory);
                }
            }
        });
        setCategorys(arrCategorys);
    }, []);

    return(
        <AppLayout title="Eventos">
            <Header />

            <EventContainer>                
                <GridEvents events={events} />
            </EventContainer>

            <Footer />
        </AppLayout>
    );
}

export default EventsPage;