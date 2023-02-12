import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 1rem 2.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const MenuContainer = styled.nav`

`;

export const HeaderLogo = styled.figure`

`;

export const HeaderProfiler = styled.aside`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 480px){
        a{
            display: none;
        }
    }
`;

// Sidebar Profile
export const SidebarProfile = styled.section`
    width: 100%;
    height: 100vh;
    background: #00000085;

    opacity: 0;
    visibility: hidden;

    position: fixed;
    top: 0;
    z-index: 99;
    margin-left: -100%;

    transition: ease-in-out .5s;

    &.active{
        opacity: 1;
        visibility: visible;
        margin-left: 0;
    }
`;

export const SidebarContainer = styled.nav`
    width: 30%;
    height: 100%;
    padding: 1rem;
    background: ${props => props.theme['white']};

    position: relative;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 480px){
        width: 85%;
    }   
`;

// Close Sidebar Button
export const CloseSidebarButton = styled.button`
    position: absolute;
    right: 24px;
    top: 8px;
`;

export const ContainerAvatar = styled.header`
    width: 35%;
    padding: 1rem 0;

    display: flex;
    flex-direction: column;
    gap: .5rem;

    img{
        width: 100%;
        height: 75px;
    }

    h2{
        width: 100%;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.4;
        color: ${props => props.theme['gray-900']};
        text-align: center;
    }

    @media screen and (max-width: 480px){
        h2{
            font-size: 1.2rem;
        }
    }
`;

export const ContainerInfos = styled.article`
    width: 90%;
    padding: 1rem 0;
    position: relative;

    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid ${props => props.theme['gray-400']};
    border-top: 1px solid ${props => props.theme['gray-400']};

    &::after{
        width: 1px;
        height: 85%;
        content: '';
        background: ${props => props.theme['gray-400']};

        position: absolute;
        top: 7.5%;
    }
`;

export const ContainerInfo = styled.aside`
    width: 35%;

    h3{
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.4;
        color: ${props => props.theme['gray-900']};
        text-align: center;

        span{
            display: block;
            font-size: .75rem;
            font-weight: 500;
            color: ${props => props.theme['gray-700']};;
        }
    }
`;

export const ContainerMenu = styled.ul`
    width: 90%;
    margin: 1rem 0;
    
    display: flex;
    flex-direction: column;
    row-gap: 1.125rem;
`;

export const ContainerMenuItem = styled.li`

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    a, button{
        width: 85%;
        display: flex;
        gap: 1.125rem;
        align-items: center;

        cursor: pointer;

        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme['gray-900']};

        &.logout{
            color: ${props => props.theme['error']}
        }

    }

    &:has(ul){
        &:hover{
            svg{
                transform: rotate(90deg);
            }
        }
    }

    &:hover{
        ul{
            display: flex;
        }
    }
`;

export const ContainerSubMenu = styled.ul`
    width: 100%;

    margin: .75rem 0;
    padding-left: calc(100%/3 - 20%);

    display: none;
    flex-direction: column;
    gap: .5rem;

    li{
        justify-content: flex-start;
        gap: .25rem;
    }
`;