import styled from "styled-components";

interface InputProps {
    width: number;
    widthMobile?: number;
}

export const InputStyled = styled.fieldset<InputProps>`
    width: ${props => props.width}%;
    border-radius: 6px;
    margin: .75rem auto;
    padding: 1rem 1.25rem;
    background: ${(props) => props.theme['gray-100']};

    font-size: .865rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-800']};

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    
    input{
        width: calc(100% - 5rem);        
    }

    &:has(input:focus){
        border: 1px solid ${(props) => props.theme['secondary-500']};

        input{
            color: ${(props) => props.theme['secondary-500']};

            &::placeholder{
                color: ${(props) => props.theme['secondary-500']};
            }
        }
    }

    @media screen and (max-width: 480px){
        width: ${props => props.widthMobile}%;
    }
`;