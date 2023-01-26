import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    select, input, textarea, button, fieldset{
        border: none;
        padding: 0;
        margin: 0;
        background: transparent;
    }

    figure{
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        line-height: 0;
    }

    ul, li, dt{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    html{
        font-family: 'Urbanist', sans-serif;
        scroll-behavior: smooth;
    }

    :focus{
        outline: 0;
    }

    body{
        background: ${(props) => props.theme['white']};
        color: ${(props) => props.theme['gray-800']};
        
    }

    body, input, textarea, button{
        font-family: 'Urbanist', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    fieldset{
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
        padding-block-end: 0;
    }

    /* Custom ScrollBar */

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme['white']};
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme['primary-400']};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${(props) => props.theme['primary-300']};
    }

    /* Classes Globais */
    .container{
        width: 85%;
        margin: 0 auto;
        padding: 1rem 0;

        @media screen and (min-width: 1440px){
            width: 75%;
        }
    }

    .layoutContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .ajustLoad{
        width: 75px;
        margin: 1rem 0;
    }
`;