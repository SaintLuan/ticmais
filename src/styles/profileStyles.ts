import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;

    display: flex;
    gap: 2.75rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 480px){
        flex-direction: column;
        gap: .5rem;
    }

`;

export const ProfileImage = styled.figure`
    width: 15%;
    position: relative;

    img{
        width: 100%;
    }

    button{
        width: 3rem;
        height: 3rem;
        position: absolute;
        bottom: 52px;
        right: 0;

        svg{
            width: 100%;
            height: 100%;
        }
    }

    @media screen and (max-width: 480px){
        width: 50%;
    }

`;

export const ProfileForm = styled.aside`
    width: 40%;

    .phoneNasc{
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .phone{
        width: 50%;
        padding-left: .5rem;

        display: flex;
        align-items: center;
        gap: .75rem;

        background: ${(props) => props.theme['gray-100']};
        border-radius: 6px;

        dl{
            width: 58px;

            dt{
                width: 100%;
                height: 100%;
                
                display: flex;
                gap: 5px;
                align-items: center;

                img{
                    width: calc(100% - 18px);
                    height: 85%;
                }

            }
        }

        fieldset{
            margin: 0;
            input{
                width: 100%;
            }
        }
    }

    @media screen and (max-width: 480px){
        width: 85%;

        .phoneNasc{
            flex-direction: column;
        }

        .phone{
            width: 100%;
        }
    }
`;