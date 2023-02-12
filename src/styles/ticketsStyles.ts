import styled from "styled-components"

// Found Events 
export const TicketsContainer = styled.section`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: space-between;
`;

export const FoundTicketCard = styled.aside`
    width: calc(100%/2 - 1rem);
    padding: 1rem 1rem .75rem 1rem;

    background: ${props => props.theme['white']};
    box-shadow: 0px 3px 45px rgba(4, 6, 15, 0.05);
    border-radius: 24px;

    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: flex-start;
    justify-content: flex-start;

    h2{
        font-size: 1.25rem;
    }

    aside{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            display: flex;
            align-items: center;
            gap: .5rem;
        }
    }

    footer{
        width: 100%;
        margin: 1rem 0;
        padding-top: .5rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &::before{
            width: 90%;
            height: 1.5px;
            background: ${props => props.theme['gray-100']};
            content: '';
            display: block;
        }

        button{
            width: 75%;
            margin-top: 1rem;
            padding: .5rem 1rem;
            background: linear-gradient(286.17deg, #F0C75E 0%, #F5D993 100%);
            border-radius: 75px;

            color: ${props => props.theme['white']};
            cursor: pointer;
        }

    }

    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

// Empty Tickets Container
export const EmptyContainer = styled.aside`
    width: 100%;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    h2{
        font-weight: 700;
        font-size: 1.125rem;
        line-height: 120%;
        color: ${props => props.theme['gray-900']};
    }

    p{
        font-weight: 400;
        font-size: .75rem;
        line-height: 140%;
        letter-spacing: 0.15px;
        color: ${props => props.theme['gray-900']};
    }

    a{
        font-weight: 700;
        font-size: 1rem;
        line-height: 120%;
        color: ${props => props.theme['primary-500']};
    }
`;