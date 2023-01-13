import styled from "styled-components";

interface BannerProps {
    bgImage: string;
}

export const EventContainer= styled.section`
    width: 100%;
`;

export const EventBanner = styled.figure<BannerProps>`
    width: 100%;
    height: 400px;

    position: relative;     

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${props => props.bgImage});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 480px){
        height: 350px;
    }

    
`;

export const EventCardBanner = styled.figure`
    width: 50%;
    height: 450px;
    position: absolute;
    top: 15%;
    left: 0;
    right: 0;
    margin: 0 auto;
    /* margin-top: 2.5%; */
    z-index: 99;

    img{
        width: 100% !important;
        height: 100% !important;
        object-fit: cover !important;
        border-radius: 24px;
        aspect-ratio: 1 / 1;
    }

    @media screen and (max-width: 480px){
        width: 85%;
        height: 350px;
    }
`;

export const EventInfos = styled.section`
    width: 100%;
    
    &.container{
        margin-top: 10rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;   
    
    @media screen and (max-width: 480px){
        &.container{
            margin-top: 5rem;
        }
    }
`;

export const InfosHeader = styled.header`
    width: 100%;
    

    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme['gray-300']};

    h1{
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;

        color: ${props => props.theme['gray-900']};
    }

    aside{
        width: 100%;
        margin-top: 1.5rem;

        display: flex;
        gap: .5rem;
        align-items: center;

        .likesCount{
            font-size: 1rem;
            font-weight: 600;
            letter-spacing: 0.2px;
            color: ${props => props.theme['gray-800']};
        }
    }
`;

export const InfosAvatars = styled.section`
    display: flex;
    align-items: center;
    
    figure{
        &:not(:first-child){
            margin-left: -.5rem;
        }
    }
`;

export const InfosBody =styled.section`
    width: 100%;
    margin-top: 2rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const InfosLocalDate = styled.aside`
    width: 55%;

    section{
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1.5rem;

        div{
            display: flex;
            align-items: center;
            gap: .865rem;

            svg{
                width: 2.5rem;
                height: 2.5rem;
                padding: .5rem;

                background: rgba(36, 107, 253, 0.08);
                border-radius: 100px;
            }


            h3{
                font-size: 1rem;
                font-weight: 700;
                line-height: 1.4;
                letter-spacing: .2px;
                color: ${props => props.theme['gray-900']};


                span{
                    display: block;
                    margin-top: .25rem;

                    font-size: .75rem;
                    font-weight: 500;
                    line-height: 1;
                }
            }
        }
    }

    footer{
        width: 100%;
        margin: 1rem 0;
        padding: 0 .25rem;

        p{
            width: 95%;
            line-height: 1.5;
        }

        span{
            display: block;
            margin: 1rem 0;
            font-size: 1rem;
            font-weight: 600;
            padding-right: .75rem;

            color: ${props => props.theme['primary-500']};
        }
    }

    @media screen and (max-width: 480px){
        width: 100%;
        margin-bottom: 1rem;

        section{
            flex-direction: column;
        }

        footer{
            display: none;
        }
    }

`;

export const InfosTickets = styled.aside`
    width: 40%;

    @media screen and (max-width: 480px){
        width: 100%;
        margin-top: 1.5rem;
    }
`;

export const CatSlider = styled.div`
    width: 100%;
`;

export const TicketContainer = styled.div`
    width: 100%;
    padding: 1rem 0;
    margin-top: .5rem;

    .ticketTitle{
        width: 100%;
        font-size: 1.75rem;
        line-height: 1.26;
        font-weight: 700;

        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .ticketLote{
        width: 100%;
        font-size: .865rem;
        font-weight: 600;
        line-height: 1.2;
        text-transform: uppercase;

        color: ${props => props.theme['primary-500']}
    }

    .ticketDescription{
        width: 100%;
        margin-top: .75rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            display: flex;
            align-items: center;
            gap: .5rem;
        }

        span{
            width: 25%;
            font-size: .675rem;
            font-weight: 600;
            text-transform: uppercase;
            text-align: right;
            padding-right: .75rem;

            color: ${props => props.theme['primary-500']};
        }
    }

    .ticketFooter{
        width: 100%;
        margin-top: .75rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        button{
            padding: .5rem 0;
        }

    }

    @media screen and (max-width: 480px){
        .ticketTitle{
           font-size: 1.25rem;
        }

        .ticketLote{
            font-size: .75rem;
        }
 
    }

`;

export const InfosDescMobile = styled.div`
    display: none;

    width: 100%;
    margin-top: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${props => props.theme['gray-500']};

    h2{
        width: 100%;
        font-size: 1.25rem;
        line-height: 1.26;
        font-weight: 700;
    }

    p{
        width: 100%;
        margin-top: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical; 
    }

    span{
        display: block;
        margin: 1rem 0;
        font-size: 1rem;
        font-weight: 600;
        padding-right: .75rem;

        color: ${props => props.theme['primary-500']};
    }

    @media screen and (max-width: 480px){
        display: block;
    }
`;

export const InfosFooter = styled.footer`
    width: 100%;
    margin-top: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid ${props => props.theme['gray-500']};
`;

export const LocalMap = styled.aside`
    h2{
        width: 100%;
        font-size: 1.25rem;
        line-height: 1.26;
        font-weight: 700;
    }

    p{
        margin: 1rem 0;

        display: flex;
        gap: 1rem;
        align-items: center;
    }
`;

export const Map = styled.figure`
    width: 65%;
    height: 300px;

    img{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: 250px;
    }
`;