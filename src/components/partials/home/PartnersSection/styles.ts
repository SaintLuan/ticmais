import styled from "styled-components";

export const PartnersContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;  

export const PartnersHeader = styled.header`
    width: 100%;
    margin: 1rem auto;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2{
        font-size: 1.75rem;
        font-weight: 700;
        line-height: 2.25;
        margin-bottom: .5rem;
    }

    p{
        width: 75%;
        font: 400 1rem/1.25 'DM Sans', sans-serif;
    }

    @media screen and (max-width: 480px){
        h2{
            font-size: 1.5rem;
            line-height: 2;
            margin-bottom: .25rem;
        }
        p{
            width: 90%;
            font: 400 .865rem/1.2 'DM Sans', sans-serif;
        }
    }
`;

export const PartnersLogos = styled.article`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
`;

export const PartnerLogo = styled.figure`
    width: 8.5rem;

    img{
        width: 100%;

        filter: brightness(.5);
        filter: opacity(.75);
    }

    &:hover{
        img{
            filter: brightness(1);
            filter: opacity(1);
        }
    }

    @media screen and (max-width: 480px){
        width: 7.5rem;
    }
`;