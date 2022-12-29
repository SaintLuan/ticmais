import styled from "styled-components";

interface InputProps {
    width: number;
}

export const InputStyled = styled.fieldset<InputProps>`
    width: ${props => props.width}%;
    border-radius: 6px;
    margin: .75rem 0;
    padding: 1rem 1.25rem;
    background: ${(props) => props.theme['gray-50']};

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
`;