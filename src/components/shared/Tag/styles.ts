import styled from "styled-components";

interface TagProps {
    bgColor: string;
    textColor: string;
}


export const TagContainer = styled.span<TagProps>`
    padding: .5rem 1rem;
    border-radius: 15px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: .75rem;
    font-weight: 600;
    color: ${props => props.theme[props.textColor]};
    text-align: center;

    &.filled{
        background: ${props => props.theme[props.bgColor]};
    }

    &.outline{
        border: 1px solid ${props => props.theme[props.bgColor]};

        &:hover{
            background: ${props => props.theme[props.bgColor]};
            color: ${props => props.theme['white']};
        }
    }
`;