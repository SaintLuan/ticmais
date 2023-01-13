import styled from "styled-components";

interface ButtonProps {
    width: number;
    color: 'primary-500' | 'primary-100' | 'gray-200' | 'secondary-500';
    textColor: 'white' | 'gray-900' | 'primary-500' | 'secondary-500';
}

export const ButtonStyled = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .75rem;

    width: ${props => props.width}%;
    padding: 1rem 0;
    margin: .75rem auto;
    border-radius: 100px;

    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme[props.textColor]};
    cursor: pointer;

    &.filled{
        background: ${props => props.theme[props.color]};
    }

    &.outline{
        border: 1px solid ${props => props.theme[props.color]};
    }
`;