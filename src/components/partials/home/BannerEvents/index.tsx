import { EventProps, EventsProps } from "@/@types/events";

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { BannerContainer, BannerItem, BannerItemImage, BannerItemInfos, SwiperContainer } from "./styles";
import { TitleSection } from "@/components/shared/TitleSection";
import bannerDefault from '@/assets/img/banner-default.jpg';
import Image from "next/image";
import { FilterInput } from "../FilterInput";
import { Heart, Location } from "react-iconly";
import { Button } from "@/components/shared/Button";
import Link from "next/link";

interface BannerProps {
    events: EventProps[];
    onHandleSearch: (query: string) => void;
}

export const BannerEvents = ({ events, onHandleSearch }: BannerProps) =>{

    const sliderBreakpoints = {
        320: {
            slidesPerView: 1.25,
            spaceBetween: 10,
            centeredSlides: false,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: true
        }
    };
    return(
        <BannerContainer className="container" >
            <TitleSection title="Destaques" seeAllText="Ver Todos" seeALlLink="/events"/>

            <SwiperContainer>
                <Swiper
                    slidesPerView={1}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    breakpoints={sliderBreakpoints}
                >
                    {
                        events.map((event: EventProps) => (
                            <SwiperSlide key={event.id}>
                                <BannerItem>
                                    <BannerItemImage>
                                        {
                                            event.thumbnails['16x9'].src ?
                                                <Image width={100} height={0} layout="responsive" src={'https://api.ticmais.ticpass.com.br' + event.thumbnails['16x9'].src} alt={event.label} />
                                            :
                                                <Image width={100} height={0} layout="responsive" src={bannerDefault} alt={event.label} />
                                        }
                                    </BannerItemImage>
                                    
                                    <BannerItemInfos>
                                        <div>
                                            <span className="eventDate">{event.schedule.start}</span>
                                            <h2 className="eventTitle">{event.label}</h2>
                                            <span className="eventLocal">
                                                <Location set="bold" primaryColor="#023E5E"/>
                                                <span>{event.location.name}</span>
                                                <Heart set="light" primaryColor="#023E5E" />
                                            </span>
                                        </div>
                                        

                                        <footer>
                                            <Button
                                                className="filled"
                                                width={35}
                                                textColor="white"
                                                color="primary-500"
                                            >
                                                <Link href={'/events/' + event.meta.slug} >Ver detalhes</Link>
                                            </Button>
                                        </footer>

                                        

                                    </BannerItemInfos>
                                </BannerItem>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </SwiperContainer>

            <FilterInput onHandleSearch={onHandleSearch} />
            
        </BannerContainer>
    );
}