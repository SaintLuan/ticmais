import styled from "styled-components";

export const BannerContainer = styled.section`
    width: 100%;

    @media screen and (max-width: 480px){
        &.container{
            width: 100%;

            header{
                width: 85%;
                margin: 0 auto;
            }
        }
    }
`;

export const BannerItem = styled.aside`
    width: 100%;
    margin: 2rem auto;
    padding: 0 .75rem;

    display: flex;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;

    box-shadow: 0px 4px 60px rgba(4, 6, 15, 0.05);
    border-radius: 40px;

    @media screen and (max-width: 480px){
        flex-direction: column;         
    }
`;

export const BannerItemImage = styled.figure`
    width: 60%;
    height: 350px;
    /* background: ${(props) => props.theme['bg-blue']}; */

    img{
        width: 100%;
        height: 100% !important;
        border-radius: 0 0 20px 20px;
        object-fit: cover;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: 250px;

        

        img{
            border-radius: 20px 20px 20px 20px;
        }
    }
`;

export const BannerItemInfos = styled.article`
    width: 40%;
    padding: 1rem 0;

    .eventDate{
        font-size: .95rem;
        font-weight: 800;
        color: ${ props => props.theme['primary-400'] };
        text-transform: uppercase;
    }

    .eventTitle{
        width: 75%;
        margin: .75rem 0;
        
        font-size: 2rem;
        font-weight: 800;
        line-height: 2rem;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        padding: 1.25rem;
        .eventTitle{
            width: 100%;
            height: 2fr;
            font-size: 1.865rem;
        }
    }
`;
