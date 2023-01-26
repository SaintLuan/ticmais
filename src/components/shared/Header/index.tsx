import { CloseSidebarButton, ContainerAvatar, ContainerInfo, ContainerInfos, ContainerMenu, ContainerMenuItem, HeaderContainer, HeaderLogo, HeaderProfiler, MenuContainer, SidebarContainer, SidebarProfile } from "./styles"
import Image from "next/image";

import logoHeader from '@/assets/img/logo_color.svg';
import menuIcon from '@/assets/img/menu.svg';
import avatar from '@/assets/img/avatar.svg';
import Link from "next/link";
import { AddUser, ArrowRight, ChevronRight, CloseSquare, Logout, MoreCircle, ShieldDone, Star, Ticket, TwoUsers } from "react-iconly";
import { useState } from "react";

export const Header = () => {

    const [isOptionsOpen, setIsOptionOpen] = useState(false);
    const handleOptions = () => {
        setIsOptionOpen(!isOptionsOpen);
    }

    return(
        <>
            <HeaderContainer>
                <MenuContainer>
                    <Image src={menuIcon} width={25} alt="Tic Mais" />
                </MenuContainer>

                <HeaderLogo>
                    <Link href='/'>
                        <Image src={logoHeader} width={100} alt="Tic Mais" />
                    </Link>
                </HeaderLogo>

                <HeaderProfiler>

                    <Link href="/producer">
                        Área do Produtor
                    </Link>

                    <Image onClick={handleOptions} src={avatar} width={35} alt="Tic Mais" />

                </HeaderProfiler>

            </HeaderContainer>

            <SidebarProfile className={isOptionsOpen ? 'active' : ''}>
                
                <SidebarContainer>
                    <CloseSidebarButton onClick={handleOptions}>
                        <CloseSquare />
                    </CloseSidebarButton>

                    <ContainerAvatar>
                        <Link href='/signin'>
                            <Image src={avatar} alt="Usuário"  />
                            <h2>Fazer Login</h2>
                        </Link>
                        
                    </ContainerAvatar>

                    <ContainerInfos>
                        <ContainerInfo>
                 
                        </ContainerInfo>

                        <ContainerInfo>

                        </ContainerInfo>
                    </ContainerInfos>

                    <ContainerMenu>
                        <ContainerMenuItem>
                            <Link href='/my-tickets'>
                                <Ticket />
                                Meus Ingressos
                            </Link>

                            <ChevronRight />
                        </ContainerMenuItem>
                        
                        <ContainerMenuItem>
                            <Link href='/my-events'>
                                <Star />
                                Meus Eventos
                            </Link>

                            <ChevronRight />
                        </ContainerMenuItem>

                        <ContainerMenuItem>
                            <Link href='/profile'>
                                <AddUser />
                                Minha Conta
                            </Link>

                            <ChevronRight />
                        </ContainerMenuItem>

                        <ContainerMenuItem>
                            <Link href='/my-tickets'>
                                <TwoUsers />
                                Afiliados
                            </Link>

                            <ChevronRight />
                        </ContainerMenuItem>

                        <ContainerMenuItem>
                            <button>
                                <ShieldDone />
                                Segurança
                            </button>

                            <ChevronRight />
                        </ContainerMenuItem>

                        <ContainerMenuItem>
                            <button className="language">
                                <MoreCircle />
                                Idioma
                            </button>

                            <ChevronRight />
                        </ContainerMenuItem>

                        <ContainerMenuItem>
                            <button className="logout">
                                <Logout primaryColor="#DA100B" />
                                Sair
                            </button>
                        </ContainerMenuItem>
                    </ContainerMenu>
                </SidebarContainer>
            </SidebarProfile>

        </>
    );
}