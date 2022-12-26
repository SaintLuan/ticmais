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

    ul, li, dt{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    html{
        font-family: 'Urbanist', sans-serif;
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
`
