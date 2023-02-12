import styled from "styled-components";

export const ModalWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background: #00000085;

    position: fixed;
    top: 0;
    z-index: 105;
    opacity: 0;
    visibility: hidden;
    margin-top: -100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    transition: all linear .75s;

    &.active{
        opacity: 1;
        visibility: visible;
        margin-top: 0;
    }

`;

export const ModalContainer = styled.main`
    width: 30%;
    /* height: 45%; */
    padding: 2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    background: ${props => props.theme['white']};
    border-radius: 38px;

    h3{
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 120%;
    }

    p{
        font-weight: 400;
        font-size: .865rem;
        line-height: 140%;
    }

    footer{
        width: 100%;

        display: flex;
        gap: .5rem;
        align-items: center;
        justify-content: center;

        button{
            cursor: pointer;
            display: flex;
            gap: .25rem;
            align-items: center;

            &.cancel{
                padding: .75rem 1.125rem;
                border-radius: 14px;
                background: ${props => props.theme['error']};
                color: ${props => props.theme['white']};
            }
        }
    }

    @media screen and (max-width: 480px){
        width: 85%;
    }
`;