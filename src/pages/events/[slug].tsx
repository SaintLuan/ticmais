import { EventProps } from "@/@types/events";
import { AppLayout } from "@/layouts/AppLayout";

const EventDetail = ({ event }: EventProps) =>{
    return(
        <AppLayout title="Eventos">
            <h2>Eventos</h2>
        </AppLayout>
    );
}

export default EventDetail;