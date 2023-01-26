import styled from "styled-components";

export const MenuContainer = styled.nav`
    width: 100%;
    padding: 1rem 0;

    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;

    background-color: ${props => props.theme['white']};
    border-radius: 24px 24px 0px 0px;

    @media screen and (max-width: 480px){
        display: block;
    }
`;

export const MenuWrapper = styled.ul`
    width: 100%;

    display: flex;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
`;

export const MenuItem = styled.li`
    a{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        font-weight: 500;
        font-size: .75rem;
        line-height: 1.2;

        letter-spacing: 0.2px;

        color: #9E9E9E;
        
        &.active{
            color: ${props => props.theme['primary-500']};;
        }
    }
`;