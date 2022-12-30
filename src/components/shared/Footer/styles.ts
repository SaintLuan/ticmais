import styled from "styled-components";
import wave from '@/assets/img/wave-footer.svg';

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 1.5rem 5rem;
    margin-top: 5rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    position: relative;

    /* Wave top */
    &::before{
        content: '';
        display: block;
        position: absolute;
        top: -49px;
        left: 0;
        width: 100%;
        height: 50px;
        background: no-repeat 100%/100% url(${wave?.src});
    }

    background: ${(props) => props.theme['primary-500']};

    @media screen and (max-width: 480px){
        padding: 1.5rem 2rem;
        margin-top: 3rem;
        
        /* Wave top */
        &::before{
            height: 80px;
            background: no-repeat 50%/150% url(${wave?.src});
        }
    }
`;

export const FooterTop = styled.canvas`
    position: absolute;
    left: 0%;
    right: 0%;
    top: -9.24%;
    bottom: 100%;

    /* secondary/500 */

    background: #023E5E;
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

export const ButtonNews = styled.fieldset `
    background: ${(props) => props.theme['white']};
    border: 2px solid ${(props) => props.theme['bg-blue']};
    border-radius: 100px;

    width: 75%;
    padding: .25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;

    

    input{
        padding: .25rem .75rem;
        font-size: .75rem;
    }

    button{
        font-size: .865rem;
        font-weight: 600;
        color: ${(props) => props.theme['white']};


        padding: .865rem 1.75rem;
        background: ${(props) => props.theme['secondary-500']};
        box-shadow: 0px 10px 50px rgba(250, 204, 21, 0.1);
        border-radius: 100px;
    }

    @media screen and (max-width: 480px){
        width: 95%;
        input{
            width: 60%;
            padding: .25rem .5rem;
        }

        button{
            width: 40%;
            padding: .65rem 1rem;
        }
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