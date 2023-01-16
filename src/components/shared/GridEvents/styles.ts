import styled from "styled-components";

export const TrendingContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header{
            order: 0;
        }

        section{
            &:first-child{
                order: 1;
            }
            &:last-child{
                order: 2;
                margin-top: 1rem;
            }
        }
`;

export const TrendContainerGrid = styled.section`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;

    aside{
        width: calc((100%/4) - 1rem);
    }

    @media screen and (max-width: 480px){

        aside{
            width: calc((100%/2) - .5rem);
        }

        button{
            width: 65%;
        }
        
    }

`;

