import styled from "styled-components";

export const SplashContainer = styled.section`
    width: 100%;
    height: 100vh;

    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    background: #023E5E;

    svg{
        width: 75px;
        padding: .5rem;

        position: absolute;
        bottom: 5%;
    }
`;

export const SplashLogo = styled.figure`
    width: 25%;

    img{
        width: 100%;
        height: auto;
    }
`;