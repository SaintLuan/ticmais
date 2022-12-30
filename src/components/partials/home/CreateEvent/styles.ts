import styled from "styled-components";

export const CreateContainer = styled.section`
    width: 100%;
    margin: 1.5rem 0;
    background: ${props => props.theme['secondary-500']};
    
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

export const CreateFigure = styled.figure`
    width: 35%;

    img{
        width: 100%;
    }

    @media screen and (max-width: 480px){
        width: calc(50% - 2rem);
    }
`;

export const CreateText = styled.article`
    width: 35%;
    h2{
        font: 700 1.75rem/2 'DM Sans', sans-serif;
    }
    p{
        width: 65%;
        font: 400 1rem/1 'DM Sans', sans-serif;
    }

    @media screen and (max-width: 480px){
        width: calc(50% - 2rem);
        h2{
            font: 700 1.25rem/1.5 'DM Sans', sans-serif;
        }
        p{
            width: 100%;
            font: 400 .865rem/1.2 'DM Sans', sans-serif;
        }
    }
`;