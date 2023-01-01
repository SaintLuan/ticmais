import styled from "styled-components";

export const LoginContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &.activeForm{
        width: 100%;
        height: 100vh;

        flex-direction: column;

        visibility: hidden;
        position: fixed;
        top: -200;
        margin-top: -100%;
        z-index: 99;

        background: ${props => props.theme['white']};

        transition: all linear .825s;
    }

    &.active{
        visibility: visible;
        top: 0;
        margin-top: 0;
    }

    .otherMetod{
        text-decoration: underline;
        color: ${(props) => props.theme['primary-400']};
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        flex-direction: column;   
    }
`;

export const LoginFigure = styled.figure`
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100%;
    }

    h2{
        margin-top: 2.5rem;
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const LoginOptions = styled.aside`
    width: 35%;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 480px){
        margin-top: 2rem;
        width: 100%;
    }
`;

export const LoginDivider = styled.div`
    width: 100%;
    margin: 1.5rem 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    hr{
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme['gray-700']};
        border: none;
    }

`;

export const LoginCta = styled.h3`
    width: 100%;
    margin-top: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    font-size: .925rem;
    font-weight: 400;
    color: ${props => props.theme['gray-500']};

    a{
        color: ${props => props.theme['primary-500']};
        font-weight: 700;
    }
`;

export const LoginForm = styled.form`
    width: 35%;
    margin-top: 2.5rem;

    @media screen and (max-width: 480px){
        margin-top: 1.25rem;
        width: 75%;
    }
`;
