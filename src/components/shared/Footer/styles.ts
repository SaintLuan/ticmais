import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 1.5rem 5rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    background: ${(props) => props.theme['primary-500']};

    @media screen and (max-width: 480px){
        padding: 1.5rem 2.5rem;
    }
`;

export const FooterNav = styled.nav`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    align-items: flex-start;
    justify-content: space-between;

    ul{
        h2{
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 1.5rem;
            color: ${(props) => props.theme['white']};
            margin-bottom: 1.5rem;
            
        }

        li{
            font-size: .865rem;
            line-height: 1.5rem;
            font-weight: 400;
            color: ${(props) => props.theme['white']};

            :not(:first-of-type){
                line-height: 1.5rem;
            }
        }
    }

    @media screen and (max-width: 480px){
        ul{
            width: 45%;
            order: 2;
        }
    }
`;

export const NavNewsletter = styled.section`

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h2{
        font-size: 1.2rem;
        font-weight: 700;
        color: ${(props) => props.theme['white']};
    }

    p{
        width: 65%;
        font-size: .865rem;
        line-height: 1rem;
        font-weight: 400;
        color: ${(props) => props.theme['white']};
    }

    @media screen and (max-width: 480px){
        width: 100%;
        order: 1;
    }
`;

export const FooterInst = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    margin-top: 1.25rem;

    p{
        width: 55%;
        font-size: .865rem;
        line-height: 1.5rem;
        font-weight: 400;
        color: ${(props) => props.theme['white']};
    }

    @media screen and (max-width: 480px){
        p{
            width: 100%;
        }
    }
`;

export const FooterLogo = styled.figure`
    width: 100%;
`;

export const SocialLinks = styled.article`
    width: 35%;

    display: flex;
    align-items: center ;
    gap: 1rem;
`;