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
    display: flex;
    align-items: center;

    padding-bottom: .5rem;
    border-bottom: 1px solid ${props => props.theme['gray-300']};
    
`;

export const InfosHeader = styled.header`
    width: 100%;
    margin-top: 15%;

    h1{
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1.2;

        color: ${props => props.theme['gray-900']};
    }

    aside{
        width: 100%;
        margin-top: 1rem;

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