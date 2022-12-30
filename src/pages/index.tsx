import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/styles/themes/default';
import { GlobalStyle } from '@/styles/global';
import { AppLayout } from '@/layouts/AppLayout';

// Data Imports
import {events} from '@/@data/events';
import {blog} from '@/@data/blog';
import {partners} from '@/@data/partners';

// Types Imports
import { EventProps } from '@/@types/events';

// Components Import
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { BannerEvents } from '@/components/partials/home/BannerEvents';
import { FilterInput } from '@/components/partials/home/FilterInput';
import { TrendEvents } from '@/components/partials/home/TrendEvents';
import { CreateEvent } from '@/components/partials/home/CreateEvent';
import { PartnersSection } from '@/components/partials/home/PartnersSection';
import { BlogSection } from '@/components/shared/BlogSection';

export default function Home() {

  // Uses React Hooks for state and http requests
  // const [events, setEvents] = useState([]);
  const [trendingEvents, setTrendingEvents] = useState<EventProps[]>([]);
  const [highEvents, setHighEvents] = useState<EventProps[]>([]);
  // const [posts, setPosts] = useState([]);
  // const [partners, setPartners] = useState([]);

  // Get Data for Home page (Using requests)
  useEffect(() => {

    // Get Events Data
    // axios.get();

    // Reset States
    setHighEvents([]);
    setTrendingEvents([]);

    events.forEach((event) => {
      if(event.tag == 'Destaque'){
        setHighEvents(prevHighEvents=> [
          ...prevHighEvents,
          event
        ]);

      }
      else{
        setTrendingEvents(prevTrendingEvents=> [
          ...prevTrendingEvents,
          event
        ]);
      }
    })
    

  },[]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <AppLayout title='Home'>
        <>
          <Header />

          <FilterInput />
          <BannerEvents events={highEvents} />

          <TrendEvents events={trendingEvents} />

          <CreateEvent />
          <PartnersSection partners={partners} />
          <BlogSection artigos={blog} />

          <Footer />
        </>
      </AppLayout>
    </ThemeProvider>
      
  )
}
