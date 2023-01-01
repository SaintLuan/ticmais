import { events } from "@/@data/events";
import { EventProps } from "@/@types/events";
import { AppLayout } from "@/layouts/AppLayout";
import { GetServerSideProps } from "next";

type Props = {
    event: EventProps;
};

const EventDetail: React.FunctionComponent<Props> = ({ event }) => {
    return(
        <AppLayout title={event.title}>
            <h1>{event.title}</h1>
            
        </AppLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug as string;
    const event = events.find((event) => event.slug === slug);

    console.log(slug)
    if (event) {
        console.log(event)
      return {
        props: {
          event,
        },
      };
    }
    else{
        console.log("Nada")
    }
  
    return {
      notFound: true,
    };
};	

export default EventDetail;