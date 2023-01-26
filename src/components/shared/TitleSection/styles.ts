import styled from "styled-components";

export const TileContainer = styled.header`
    width: 100%;
    padding: 1rem 0;
    margin: 1rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .title{
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.5rem;
    }

    .seeAll{
        font-size: 1rem;
        font-weight: 700;
        line-height: 1.5rem;
        color: ${props => props.theme['primary-500']};
    }

    @media screen and (max-width: 480px){
        .title{
            font-size: 1.25rem;
        }

        .seeAll{
            font-size: .865rem;
        }
    }
`;