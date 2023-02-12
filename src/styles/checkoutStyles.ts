import styled from "styled-components";

export const CheckoutContainer = styled.section`
   
`;

export const CheckoutContainerFooter = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    
`;

export const CheckoutTitle = styled.h2`
    width: 100%;
    font-size: 1.75rem;
    padding-bottom: .875rem;
    border-bottom: 1px solid ${props => props.theme['gray-300']};
`;

export const CheckoutDesc = styled.section`
    width: 100%;
    height: auto;
    margin: 1rem 0;

    display: flex;
    gap: 3rem;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 480px){
        flex-direction: column;
    }
`;

export const CheckoutDescInfos = styled.aside`
    width: 50%;

    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media screen and (max-width: 480px){
        width: 100%
    }
`;

export const CheckoutTickets = styled.article`
    display: flex;
    gap: 1rem;
    flex-direction: column;
`;

export const CheckoutTicket = styled.aside`
    width: 100%;
    padding: 1rem 1.25rem;

    background: ${props => props.theme['white']};
    box-shadow: 0px 4px 60px rgba(4, 6, 15, 0.05);
    border-radius: 28px;

    display: flex;
    gap: 1.25rem;

    figure{
        img{
            border-radius: 18px;
        }
    }

    aside{
        width: 100%;
        display: flex;
        gap: .75rem;
        flex-direction: column;

        h2{
            font-size: 1.25rem;
            font-weight: 700;
            color: ${props => props.theme['gray-900']};
        }

        h3{
            font-size: .875rem;
            font-weight: 600;
            color: ${props => props.theme['primary-500']};
        }

        footer{
            width: 90%;
            h4{
                display: flex;
                gap: .5rem;
                align-items: center;

                font-size: .75rem;
                font-weight: 400;
                color: ${props => props.theme['gray-700']};
            }
            
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export const CheckoutBuyer = styled.article`
    width: 100%;

    form{
        width: 100%;

        fieldset{
            margin: 1rem 0;
        }

        aside{
            display: flex;
            gap: 1rem;
        }
    }
`;

export const CheckoutDescPayment = styled.aside`
    width: 50%;

    h3{
        font-size: 1rem;
        font-weight: 500;
        color: ${props => props.theme['gray-900']};
    }

    form{
        dt,dl, label{
            display: flex;
        }

        dl{
            width: 100%;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;

            dt{
                width: 100%;
                align-items: center;
                justify-content: space-between;

                padding: 1rem .75rem;
                background: ${props => props.theme['white']};
                box-shadow: 0px 4px 60px rgba(4, 6, 15, 0.05);
                border-radius: 20px;

                label{
                    width: 85%;
                    align-items: center;
                    gap: .5rem;

                    font-size: 1.125rem;
                    color: ${props => props.theme['gray-900']};
                }
            }
        }
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const CheckoutBuyerResume = styled.aside`
    width: 100%;
    padding: 1rem 1.5rem;

    background: #FFFFFF;
    box-shadow: 0px 4px 60px rgba(4, 6, 15, 0.05);
    border-radius: 20px;
    
    article{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

export const CreditCardResmume = styled.aside`
    width: 100%;
    padding: 1rem 1.5rem;

    display: flex;
    gap: 1rem;
    align-items: center;

    background: #FFFFFF;
    box-shadow: 0px 4px 60px rgba(4, 6, 15, 0.05);
    border-radius: 20px;

    img{
        width: 10%;
        height: auto;
    }
`;
export const CheckoutInfosResume = styled.aside`
    width: 50%;
    height: 350px;
    padding: 1rem 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #FFFFFF;
    box-shadow: 0px 4px 60px rgba(4, 6, 15, 0.05);
    border-radius: 20px;

    h4{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        height: auto;

        footer{
            margin-top: 5rem;
        }
    }
`;

export const CreditContainer = styled.section`
    width: 100%;

    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;

    form{
        width: 50%;

        footer{
            display: flex;
            gap: 2rem;
            align-items: center;

            aside{
                width: 50%;
                fieldset{
                    margin: 0;
                }
            }
        }
    }

    @media screen and (max-width: 480px){
        flex-direction: column;

        form{
            width: 100%;
        }
    }
`;

interface CardProps {
    bgImage: string;
}
export const CreditCard = styled.aside<CardProps>`
    width: 45%;
    padding: 2rem 2.5rem;

    display: flex;
    gap: 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    background: ${props => props.theme['secondary-400']} url(${props => props.bgImage}) no-repeat center;
    background-size:  100% 100%;
    box-shadow: 4px 8px 24px rgba(36, 107, 253, 0.08);
    border-radius: 44px;

    header{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{
            width: 3.5rem;
            height: auto;
        }
    }

    .cardNumber{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1rem;

        span{
            &.active{
                font-size: 2.5rem;
                line-height: 6rem;
            }
            font-size:5rem;
        }
    }

    footer{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        h4{
            display: flex;
            align-items: center;
        }

        .logoCard{
            width: 3.5rem;
            height: auto;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;