import styled from "styled-components";

export const CardContainer = styled.aside`
    width: 100%;
    padding: .5rem;
    margin: .75rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;

    background: ${props => props.theme['white']};
    box-shadow: 0px 2.25px 33.75px rgba(4, 6, 15, 0.05);
    border-radius: 22.5px;

    a{
        width: 100%;
        height: 250px;
    }

    @media screen and (max-width: 480px){
        gap: .25rem;

        a{
            height: 135px;
        }
    }
`;

export const CardImage = styled.figure`
    width: 100%;
    height: 100%;

    img{
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 22.5px;
    }
`;


export const CardInfos = styled.article`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: .5rem;

    padding: .5rem 0;

    .title{
        font-size: 1.15rem;
        font-weight: 700;

        max-width: 90%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .date{
        font-size: .965rem;
        font-weight: 600;

        color: ${props => props.theme['primary-500']};
    }

    .local{
        width: 95%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg{
            width: 22px;
        }

        span{
            max-width: calc(100% - (22px*2));
            
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }

    @media screen and (max-width: 480px){
        .title{
            font-size: 1rem;
        }

        .date{
            font-size: .75rem;
        }

        .local{
            svg{
                width: 18px;
            }

            span{
                max-width: calc(100% - (18px*2));
            }
        }
    }
`;