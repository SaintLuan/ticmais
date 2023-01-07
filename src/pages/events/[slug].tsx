import { events } from "@/@data/events";
import { EventProps } from "@/@types/events";
import { Avatar } from "@/components/shared/Avatar";
import { Footer } from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";
import { Tag } from "@/components/shared/Tag";
import { AppLayout } from "@/layouts/AppLayout";
import { EventBanner, EventCardBanner, EventContainer, EventInfos, InfosAvatars, InfosHeader } from "@/styles/eventDetailsStyles";
import { GetServerSideProps } from "next";
import Image from "next/image";

type Props = {
    event: EventProps;
};

const EventDetail: React.FunctionComponent<Props> = ({ event }) => {
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