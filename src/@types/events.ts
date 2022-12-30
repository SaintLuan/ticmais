export type EventProps ={ 
    title: string;
    subtitle: string;
    local: string;
    startDate: string;
    endDate: string;
    organizer: string; 
    cattegory: string;
    tag: string;
    thumbnail: string;
}

export type EventsProps = {
    events: EventProps[];
}