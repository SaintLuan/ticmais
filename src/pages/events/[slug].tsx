import { events } from "@/@data/events";
import { EventProps } from "@/@types/events";
import { CalendarGradient, LocalGradient, WalletGradient } from "@/assets/icons";
import { Avatar } from "@/components/shared/Avatar";
import { Button } from "@/components/shared/Button";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Tag } from "@/components/shared/Tag";
import { AppLayout } from "@/layouts/AppLayout";
import { CatSlider, EventBanner, EventCardBanner, EventContainer, EventInfos, InfosAvatars, InfosBody, InfosDescMobile, InfosFooter, InfosHeader, InfosLocalDate, InfosTickets, LocalMap, Map, TicketContainer } from "@/styles/eventDetailsStyles";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { InfoCircle } from "react-iconly";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import mapaImage from '@/assets/img/pages/events/mapa.png';

type Props = {
  event: EventProps;
};

const EventDetail: React.FunctionComponent<Props> = ({ event }) => {

    const sliderBreakpoints = {
      320: {
          slidesPerView: 4.5,
          spaceBetween: 10,
      },
      1024: {
          slidesPerView: 4.5,
          spaceBetween: 10,
      }
    };

    return(
        <AppLayout 
          title={event.title}
          description={event.subtitle}
        >

          <Header />

          <EventContainer>

            <EventBanner bgImage={event.thumbnail} > 
              <EventCardBanner>
                <Image src={event.thumbnail} width={500} height={500}  alt={event.title} />
              </EventCardBanner>
            </EventBanner>

            <EventInfos className="container">
              <InfosHeader>
                <h1>{event.title}</h1>

                <aside>
                  <Tag 
                    className="outline"
                    bgColor="primary-500"
                    textColor="primary-500"
                  >
                    {event.cattegory}
                  </Tag>

                  <InfosAvatars>
                    <Avatar srcImage="https://img.freepik.com/fotos-gratis/homem-cacheado-com-sorriso-largo-mostra-dentes-perfeitos-se-diverte-com-uma-conversa-interessante-tem-cabelos-escuros-e-crespos-e-crespos-contra-uma-parede-branca_273609-17092.jpg?w=740&t=st=1672840690~exp=1672841290~hmac=a937820dd319708a80cab88dc39054f16ac571e04da970a8fa5222202b899d24" userName="Luan Santos"  />
                    <Avatar srcImage="https://img.freepik.com/fotos-gratis/foto-isolada-de-uma-jovem-alegre-e-satisfeita-com-uma-aparencia-agradavel-sorriso-largo-e-encantador-braco-tatuado-vestida-com-uma-camiseta-branca-casual-poses-em-estudio-feliz-por-alcancar-o-sucesso-no-trabalho-e-na-vida_273609-3577.jpg?w=740&t=st=1672860651~exp=1672861251~hmac=e85216e86b695bf5dc54622a2a74c940f1cc710531ef8b63bb1c72b0a5eceb6e" userName="Luan Santos"  />
                    <Avatar srcImage="https://img.freepik.com/fotos-gratis/cintura-para-cima-retrato-de-bonito-homem-serio-com-barba-por-fazer-mantem-as-maos-juntas-vestido-com-camisa-azul-escura-tem-conversa-com-o-interlocutor-fica-contra-a-parede-branca-freelancer-homem-autoconfiante_273609-16320.jpg?w=740&t=st=1672860660~exp=1672861260~hmac=7a85fec4d804b4ed02447ededcc49505f952714963874e69d2c4faf286e32fad" userName="Luan Santos"  />
                    <Avatar srcImage="https://img.freepik.com/fotos-gratis/homem-cacheado-com-sorriso-largo-mostra-dentes-perfeitos-se-diverte-com-uma-conversa-interessante-tem-cabelos-escuros-e-crespos-e-crespos-contra-uma-parede-branca_273609-17092.jpg?w=740&t=st=1672840690~exp=1672841290~hmac=a937820dd319708a80cab88dc39054f16ac571e04da970a8fa5222202b899d24" userName="Luan Santos"  />
                  </InfosAvatars>

                  <span className="likesCount"> 200+ curtiram</span>
                </aside>
              </InfosHeader>

              <InfosBody>

                <InfosLocalDate>
                  <section>

                    <div>
                      <LocalGradient />
                      <h3>
                        {event.local}
                        <span>Rua Baraão de Melgaço — 78005-300</span>
                      </h3>
                    </div>

                    <div>
                      <CalendarGradient />
                      <h3>
                        {event.startDate}
                        <span>{event.startDate}</span>
                      </h3>
                    </div> 

                  </section>

                  <footer>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto, quae aspernatur mollitia voluptatem sequi ex 
                      at praesentium nihil maiores placeat quibusdam facere cupiditate reprehenderit veritatis officiis 
                      odit vel. Iste!
                    </p>

                    <span>Ler mais...</span>
                  </footer>
                  
                </InfosLocalDate>

                <InfosTickets>
                  <CatSlider>
                    <Swiper
                      slidesPerView={4.5}
                      breakpoints={sliderBreakpoints}
                    >
                      <SwiperSlide>
                        <Tag
                          bgColor="primary-500"
                          className="filled"
                          textColor="white"
                        >
                          Camarote
                        </Tag>
                      </SwiperSlide>

                      <SwiperSlide>
                        <Tag
                          bgColor="primary-500"
                          className="outline"
                          textColor="primary-500"
                        >
                          Camarote
                        </Tag>
                      </SwiperSlide>

                      <SwiperSlide>
                        <Tag
                          bgColor="primary-500"
                          className="outline"
                          textColor="primary-500"
                        >
                          Camarote
                        </Tag>
                      </SwiperSlide>

                      <SwiperSlide>
                        <Tag
                          bgColor="primary-500"
                          className="outline"
                          textColor="primary-500"
                        >
                          Camarote
                        </Tag>
                      </SwiperSlide>

                      <SwiperSlide>
                        <Tag
                          bgColor="primary-500"
                          className="outline"
                          textColor="primary-500"
                        >
                          Camarote
                        </Tag>
                      </SwiperSlide>
                    </Swiper>
                  </CatSlider>
                  <TicketContainer>
                    <h4 className="ticketTitle">
                      Inteira + Alimento
                      <InfoCircle set="bulk" primaryColor="#9E9E9E" />
                    </h4>
                    <p className="ticketLote">Lote 4</p>

                    <aside className="ticketDescription">
                      <p>
                        <WalletGradient />
                        R$ 70,00 + R$ 14,00 de taxa
                      </p>
                      <span>Inteira</span>
                    </aside>

                    <footer className="ticketFooter">
                      <Button
                        className="outline"
                        color="primary-500"
                        textColor="primary-500"
                        width={48}
                      >
                        Remover
                      </Button>

                      <Button
                        className="filled"
                        color="secondary-500"
                        textColor="white"
                        width={48}
                      >
                        Adicionar
                      </Button>
                    </footer>
                  </TicketContainer>

                  <TicketContainer>
                    <h4 className="ticketTitle">
                      Inteira + Alimento
                      <InfoCircle set="bulk" primaryColor="#9E9E9E" />
                    </h4>
                    <p className="ticketLote">Lote 4</p>

                    <aside className="ticketDescription">
                      <p>
                        <WalletGradient />
                        R$ 70,00 + R$ 14,00 de taxa
                      </p>
                      <span>Inteira</span>
                    </aside>

                    <footer className="ticketFooter">
                      <Button
                        className="outline"
                        color="primary-500"
                        textColor="primary-500"
                        width={48}
                      >
                        Remover
                      </Button>

                      <Button
                        className="filled"
                        color="secondary-500"
                        textColor="white"
                        width={48}
                      >
                        Adicionar
                      </Button>
                    </footer>
                  </TicketContainer>

                  <TicketContainer>
                    <h4 className="ticketTitle">
                      Inteira + Alimento
                      <InfoCircle set="bulk" primaryColor="#9E9E9E" />
                    </h4>
                    <p className="ticketLote">Lote 4</p>

                    <aside className="ticketDescription">
                      <p>
                        <WalletGradient />
                        R$ 70,00 + R$ 14,00 de taxa
                      </p>
                      <span>Inteira</span>
                    </aside>

                    <footer className="ticketFooter">
                      <Button
                        className="outline"
                        color="primary-500"
                        textColor="primary-500"
                        width={48}
                      >
                        Remover
                      </Button>

                      <Button
                        className="filled"
                        color="secondary-500"
                        textColor="white"
                        width={48}
                      >
                        Adicionar
                      </Button>
                    </footer>
                  </TicketContainer>
                </InfosTickets>

              </InfosBody>

              <InfosDescMobile>
                <h2>Descrição</h2>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque architecto, quae aspernatur mollitia voluptatem sequi ex 
                  at praesentium nihil maiores placeat quibusdam facere cupiditate reprehenderit veritatis officiis 
                  odit vel. Iste!
                </p>

                <span>Ler mais...</span>
              </InfosDescMobile>


              <InfosFooter>
                <LocalMap>
                  <h2>Localidade</h2>

                  <p>
                    <LocalGradient />
                    Rua Barão de Melgaço, Cuiabá - Matogrosso
                  </p>

                  <Map>
                    <Image src={mapaImage} width={800} height={800} alt="Mapa do evento" />
                  </Map>
                </LocalMap>
              </InfosFooter>

            </EventInfos>

          </EventContainer>

          <Footer />
        </AppLayout>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const slug = context.params?.slug as string;
    const event = events.find((event) => event.slug === slug);

    console.log(slug)
    if (event) {
        console.log(event)
      return {
        props: {
          event,
        },
      };
    }
    else{
        console.log("Nada")
    }
  
    return {
      notFound: true,
    };
};	

export default EventDetail;