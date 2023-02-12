import { EventProps, EventsProps } from "@/@types/events";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Tabs } from "@/components/shared/Tabs";
import { AppLayout } from "@/layouts/AppLayout";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import { EmptyContainer, FoundTicketCard, TicketsContainer } from "@/styles/ticketsStyles";
import { ThemeProvider } from "styled-components";

import { useEffect, useState } from "react";
import Image from "next/image";

import emptyImage from '@/assets/img/pages/tickets/empty_tickets.svg';
import { events } from "@/@data/events";
import Link from "next/link";
import { LocalGradient } from "@/assets/icons";

const TicketsCards = ({events}: EventsProps) => {  
    return(
        <>
            {
                events.length > 0 ?
                    <TicketsContainer>
                        {
                            events.map((event) => (
                                <FoundTicketCard key={event.title}>
                                    <h2>{event.title}</h2>
                                    <h3>{event.startDate}</h3>
                                    <aside>
                                        <p>
                                            <LocalGradient />
                                            {event.local}
                                        </p>

                                        <span>1/3</span>
                                    </aside>

                                    <footer>
                                        <button>Voucher</button>
                                    </footer>
                                </FoundTicketCard>
                            ))
                        }
                    </TicketsContainer>
                :
                <EmptyContainer>
                    <Image src={emptyImage} alt="Não encontramos nenhum ingresso" />

                    <h2>Nenhum Ingresso</h2>

                    <p>Parece que você ainda não comprou ingressos. Busque por eventos e se divirta!</p>

                    <Link href='/events'>Procurar Eventos</Link>
                </EmptyContainer>
            }
        </>
    )
}

export const TicketsPage = () => {

    // Events Controls with profile
    const [avaliableTickets, setAvaliableTickets] = useState<EventProps[]>([]);
    const [usedTickets, setUsedTickets] = useState<EventProps[]>([]);
    const [canceledTickets, setCanceledTickets] = useState<EventProps[]>([]);

    useEffect(() => {
        setUsedTickets(events);
    },[])

    const tabs = ['Disponíveis', 'Usados', 'Cancelados'];
    const tabsContent = [
        {
            id: 0,
            component: <TicketsCards events={avaliableTickets} />
        },
        {
            id: 1,
            component: <TicketsCards events={usedTickets} />
        },
        {
            id: 2,
            component: <TicketsCards events={canceledTickets} />
        },
    ];
    return(
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Header />
                <AppLayout>
                    <TicketsContainer className="container">
                        <Tabs 
                            titles={tabs}
                            content={tabsContent}
                        />
                    </TicketsContainer>
                </AppLayout>
            <Footer />
        </ThemeProvider>
    );
}

export default TicketsPage;