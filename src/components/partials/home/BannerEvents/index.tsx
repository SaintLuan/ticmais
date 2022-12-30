import { EventProps, EventsProps } from "@/@types/events";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BannerContainer, BannerItem, BannerItemImage, BannerItemInfos } from "./styles";
import { TitleSection } from "@/components/shared/TitleSection";

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
            <Swiper
                slidesPerView={1}
                breakpoints={sliderBreakpoints}
            >
                {
                    events.map((event: EventProps) => (
                        <SwiperSlide key={event.title}>
                            <BannerItem>
                                <BannerItemImage>
                                    <img src={event.thumbnail} alt={event.title} />
                                </BannerItemImage>
                                
                                <BannerItemInfos>
                                    <span className="eventDate">{event.startDate}</span>
                                    <h2 className="eventTitle">{event.title}</h2>
                                    <span className="eventLocal">{event.local}</span>
                                </BannerItemInfos>
                            </BannerItem>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            
        </BannerContainer>
    );
}