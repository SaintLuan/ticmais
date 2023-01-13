export type EventProps ={ 
    title: string;
    subtitle: string;
    slug: string;
    local: string;
    startDate: string;
    endDate: string;
    organizer: string; 
    cattegory: string;
    tag: string;
    thumbnail: string;
    tickets: TicketProps[];
}

export type EventsProps = {
    events: EventProps[];
}

export type TicketProps = {
    cattegory: string;
    type: string;
    price: number;
    tax: number;
}