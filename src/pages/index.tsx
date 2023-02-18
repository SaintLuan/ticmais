import {  useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/styles/themes/default';
import { GlobalStyle } from '@/styles/global';
import { AppLayout } from '@/layouts/AppLayout';

// Data Imports
// import {events} from '@/@data/events';
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
import axios from 'axios';

export default function Home() {

  // Loading Adjusts
  const [isLoading, setIsLoading] = useState(true);

  // Uses React Hooks for state and http requests
  const [events, setEvents] = useState<EventProps[]>([]);
  const [trendingEvents, setTrendingEvents] = useState<EventProps[]>([]);
  const [highEvents, setHighEvents] = useState<EventProps[]>([]);
  // const [posts, setPosts] = useState([]);
  // const [partners, setPartners] = useState([]);

  const [categories, setCategories] = useState([]);

  // Handle Search Form
  const [foundEvents, setFoundEvents] = useState<EventProps[]>([]);
  const onHandleSearch = (query: string) =>{
    setIsLoading(true);
    setFoundEvents([]);

    query = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    var eventsFounded = events.filter(event => event.label.includes(query));
    
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

    axios.all([
      axios.get(`${process.env.API_BASE}/event/list/all`), 
      axios.get(`${process.env.API_BASE}/category/list`)
    ])
    .then(axios.spread((evRes, catRes) => {
      setEvents(evRes.data.data);
      setCategories(catRes.data);

      if(evRes.data.data.length > 0){
        // Reset States
        setHighEvents([]);
        setTrendingEvents([]);

        evRes.data.data.forEach((event:EventProps, index:number) => {
          if(index > 0 && index <= 2){
            setHighEvents(prevHighEvents=> [
              ...prevHighEvents,
              event
            ]);
          }
          setTrendingEvents(evRes.data.data);
        });
      }
    }))
    .catch((error) => {
      console.log(error);
    })
    .finally(()=>{
      setIsLoading(false);
    });   
     
  },[]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />

      <AppLayout title='Home'>
        <>

          {
            isLoading ?
              <LoadingIcon style='ajustLoad' />
            :
            events.length <= 0 ?
              <LoadingIcon style='ajustLoad' />
            :
            foundEvents.length > 0 ?
              <>
                <BannerEvents onHandleSearch={onHandleSearch} events={highEvents} />
                <GridEvents events={foundEvents} categories={categories} hasFilter={false} hasTitle={false} hasMore={false} />
              </>
            :
            <>
              <BannerEvents onHandleSearch={onHandleSearch} events={highEvents} />
              <GridEvents events={trendingEvents} categories={categories} hasFilter={true} hasTitle={true} hasMore={false} />
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
