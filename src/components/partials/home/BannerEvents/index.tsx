import { EventProps, EventsProps } from "@/@types/events";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BannerContainer, BannerItem, BannerItemImage, BannerItemInfos, SwiperContainer } from "./styles";
import { TitleSection } from "@/components/shared/TitleSection";
import Image from "next/image";
import { FilterInput } from "../FilterInput";
import { Heart, Location } from "react-iconly";

export const BannerEvents = ({ events }: EventsProps) =>{

    const sliderBreakpoints = {
        320: {
            slidesPerView: 1.25,
            spaceBetween: 20,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 0.,
            centeredSlides: true
        }
    };
    return(
        <BannerContainer className="container">
            <TitleSection title="Destaques" seeAllText="Ver Todos" seeALlLink="/events"/>

            <SwiperContainer>
                <Swiper
                    slidesPerView={1}
                    breakpoints={sliderBreakpoints}
                >
                    {
                        events.map((event: EventProps) => (
                            <SwiperSlide key={event.title}>
                                <BannerItem>
                                    <BannerItemImage>
                                        <Image width={100} height={0} layout="responsive" src={event.thumbnail} alt={event.title} />
                                    </BannerItemImage>
                                    
                                    <BannerItemInfos>
                                        <span className="eventDate">{event.startDate}</span>
                                        <h2 className="eventTitle">{event.title}</h2>
                                        <span className="eventLocal">
                                            <Location set="bold" primaryColor="#023E5E"/>
                                            <span>{event.local}</span>
                                            <Heart set="light" primaryColor="#023E5E" />
                                        </span>
                                    </BannerItemInfos>
                                </BannerItem>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </SwiperContainer>

            <FilterInput />
            
        </BannerContainer>
    );
}