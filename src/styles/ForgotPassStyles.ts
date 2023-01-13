import styled from "styled-components";

export const ForgotPassContainer = styled.section`
    width: 100%;
    display: flex;
    gap: 2.75rem;
    align-items: center;
    justify-content: center;

    padding: 2rem 0;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const ForgotPassLeft = styled.aside`
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;

    h2{
        width: 60%;
        text-align: center;
        font-size: 1.175rem;
        font-weight: 500;
        line-height: 1.4;
    }

    @media screen and (max-width: 480px){
        width: 85%;

        h2{
            width: 90%;
            font-size: 1rem;
        }
    }
`;

export const ForgotPassImage = styled.figure`
    width: 100%;

    img{
        width: 100%;
    }
`;

export const ForgotPassRight = styled.aside`
    width: 25%;

    @media screen and (max-width: 480px){
        width: 85%;
    }
`;

export const ForgotPassFormSelect = styled.article`
    form{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        fieldset{
            padding: 1.5rem 1.25rem;
            background: ${props => props.theme['white']};
            border: 1px solid ${props => props.theme['gray-200']};
            border-radius: 40px;
            cursor: pointer;

            display: flex;
            align-items: center;
            gap: .75rem;

            svg{
                width: 3.75rem;
                height: 3.75rem;
                padding: .865rem;
                background: #FAFAFA;
                border-radius: 100px;
            }

            label{
                width: 85%;
                cursor: pointer;

                width: 85%;
                display: flex;
                flex-direction: column;
                gap: .25rem;
                cursor: pointer;

                span{
                    width: 85%;
                    cursor: pointer;
                }
            }

            input{
                display: none;
            }

            &:has(input:checked),
            &:has(input:focus){
                border: 1px solid ${props => props.theme['secondary-500']};
                svg{
                    background: rgba(250, 204, 21, 0.08);;
                }
            }
        }
    }
`;