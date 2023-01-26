import {  useEffect, useState } from 'react';
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
import { GridEvents } from '@/components/shared/GridEvents';
import { CreateEvent } from '@/components/partials/home/CreateEvent';
import { PartnersSection } from '@/components/partials/home/PartnersSection';
import { BlogSection } from '@/components/shared/BlogSection';
import { FilterTags } from '@/components/partials/home/FilterTags';
import { LoadingIcon } from '@/components/shared/LoadingIcon';
import { BottomMenu } from '@/components/shared/BottomMenu';

export default function Home() {

  // Loading Adjusts
  const [isLoading, setIsLoading] = useState(true);

  // Uses React Hooks for state and http requests
  // const [events, setEvents] = useState([]);
  const [trendingEvents, setTrendingEvents] = useState<EventProps[]>([]);
  const [highEvents, setHighEvents] = useState<EventProps[]>([]);
  // const [posts, setPosts] = useState([]);
  // const [partners, setPartners] = useState([]);

  // Handle Search Form
  const [foundEvents, setFoundEvents] = useState<EventProps[]>([]);
  const onHandleSearch = (query: string) =>{
    setIsLoading(true);
    setFoundEvents([]);

    query = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    var eventsFounded = events.filter(event => event.title.includes(query));
    
    if(query === '' || query.length === 0){
      setIsLoading(false);
    }
    else{
      if(eventsFounded.length > 0){
        setFoundEvents(eventsFounded);
        setIsLoading(false);
      }
    }
  }

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
      setIsLoading(false);
    })
    

  },[]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <AppLayout title='Home'>

        <BannerEvents onHandleSearch={onHandleSearch} events={highEvents} />
        <>

          {
            isLoading ?
              <LoadingIcon style='ajustLoad' />
            :
            foundEvents.length > 0 ?
              <>
                <GridEvents events={foundEvents} hasFilter={false} hasTitle={false} hasMore={false} />
              </>
            :
            <>
              <GridEvents events={trendingEvents} hasFilter={true} hasTitle={true} hasMore={true} />
            </>
          }
          

          <CreateEvent />
          <PartnersSection partners={partners} />
          <BlogSection artigos={blog} />
        </>
      </AppLayout>
      <Footer />
      <BottomMenu />
    </ThemeProvider>
      
  )
}
