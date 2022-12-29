import Link from "next/link";
import Image from "next/image";

import { FooterContainer, FooterInst, FooterLogo, FooterNav, NavNewsletter, SocialLinks } from "./styles";

import logoFooter from '@/assets/img/logo_white.svg';
import instaIcon from '@/assets/img/instagram.svg';
import faceIcon from '@/assets/img/facebook.svg';
import tiktokIcon from '@/assets/img/tiktok.svg';

export const Footer = () =>{
    return(
        <FooterContainer>
            <FooterNav>
                <ul>
                    <h2>Mapa do site</h2>

                    <li>
                        <Link href='/'>Sobre nós</Link>
                    </li>

                    <li>
                        <Link href='/'>Imprensa</Link>
                    </li>

                    <li>
                        <Link href='/'>Fale conosco</Link>
                    </li>

                    <li>
                        <Link href='/'>Centro de Ajuda</Link>
                    </li>

                    <li>
                        <Link href='/'>Como Funciona</Link>
                    </li>

                    <li>
                        <Link href='/'>Privacidade</Link>
                    </li>

                    <li>
                        <Link href='/'>Termos de Uso</Link>
                    </li>
                </ul>

                <ul>
                    <h2>Para produtores</h2>

                    <li>
                        <Link href='/'>Cadastro</Link>
                    </li>

                    <li>
                        <Link href='/'>Criar Evento</Link>
                    </li>

                    <li>
                        <Link href='/'>Relatórios</Link>
                    </li>

                    <li>
                        <Link href='/'>Afiliados</Link>
                    </li>
                </ul>

                <NavNewsletter>
                    <h2>Fique por dentro</h2>

                    <p>
                        Junte-se a nossa newsletter para não perder nenhum detalhe dos eventos!
                    </p>

                    <button>Inscreva-se</button>
                </NavNewsletter>
            </FooterNav>

            <FooterInst>
                <FooterLogo>
                    <Image src={logoFooter} alt="TicMais"/>
                </FooterLogo>

                <p>
                    Oferecemos um serviço de venda de ingressos online para 
                    qualquer tipo de evento. Através da nossa plataforma, 
                    você terá diversas vantagens para gerenciar eventos pela 
                    web.
                </p>

                <SocialLinks>
                    <Link href='/'>
                        <Image src={faceIcon} alt="Facebook TicMais"/>
                    </Link>

                    <Link href='/'>
                        <Image src={instaIcon} alt="Instagram TicMais"/>
                    </Link>

                    <Link href='/'>
                        <Image src={tiktokIcon} alt="TikTok TicMais"/>
                    </Link>
                </SocialLinks>
            </FooterInst>
        </FooterContainer>
    );
}