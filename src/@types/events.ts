export type EventProps ={ 
    meta: {
        facebook: {
            pixel: string
        },
        google: {
            "ua": string
        },
        categories: [string],
        isOnline: boolean,
        status: string,
        visibility: string,
        absorbFee: true,
        slug: string
    },
    location: {
        country: string,
        name: string,
        street: string,
        number: string,
        city: string,
        state: string,
        zip: number
    },
    thumbnails: {
        "16x9": {
            size: number,
            src: string,
            mimetype: string
        }
    },
    boxes:[string]
    description: string,
    label: string,
    schedule: {
        end: string,
        start: string
    },
    producer: {
        id: string,
        name: string,
        meta: {
            phone: number,
            nationalId: string,
            phones: [
                number,
                number,
                number
            ]
        }
    },
    id: string
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

export type CategorieProps = {
    categorie: string;
}

export type CategoriesProps = {
    categories: CategorieProps[];
}