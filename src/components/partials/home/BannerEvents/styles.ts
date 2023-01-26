import styled from "styled-components";

export const BannerContainer = styled.section`
    width: 100%;

    @media screen and (max-width: 480px){
        &.container{
            width: 90%;

            header{
                width: 85%;
                margin: 0 auto;
            }
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        fieldset{
            order: 0;
        }

        header{
            order: 1;
        }
        &>div{
            order: 2;
        }
    }
`;

export const SwiperContainer = styled.div`
    width: 100%;

    padding-top: .365rem;
    border-top: 1px solid ${props => props.theme['gray-400']};
    border-radius: 25px;

    .swiper-pagination{
        bottom: 5px;
        &-bullet{
            background: ${props => props.theme['primary-500']};
        }
    }

    @media screen and (max-width: 480px){
        /* .swiper-slide{
            width: 85% !important;
        } */
        .swiper-pagination{
            display: none;
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
        margin: 1rem 0;        
    }
`;

export const BannerItemImage = styled.figure`
    width: 85%;
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
        height: 200px;

        img{
            border-radius: 20px 20px 20px 20px;
        }
    }
`;

export const BannerItemInfos = styled.article`
    width: 40%;
    height: 350px;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &>div{
        display: flex;
        flex-direction: column;
        gap: .65rem;
    }

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

    .eventLocal{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 12px;

        span{
            span{
                max-width: calc(100% - (22px*2));
                
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }

    button{
        margin: 0;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;
        padding: 1rem .5rem;

        &>div{
            gap: .25rem;
        }

        .eventTitle{
            width: 100%;
            height: 54px;
            font-size: 1.25rem;
            line-height: 1.2;
            order: 0;
            margin: 0;
        }

        .eventDate{
            order: 1;
        }

        .eventLocal{
            height: 35px;
            order: 2;

            span{
                font-size: .865rem;
            }
        }

        button{
            width: 75%;
            margin-top: 2rem;
        }
    }
`;
