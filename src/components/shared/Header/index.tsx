import { CloseSidebarButton, ContainerAvatar, ContainerInfo, ContainerInfos, ContainerMenu, ContainerMenuItem, ContainerSubMenu, HeaderContainer, HeaderLogo, HeaderProfiler, MenuContainer, SidebarContainer, SidebarProfile } from "./styles"
import Image from "next/image";

import logoHeader from '@/assets/img/logo_color.svg';
import menuIcon from '@/assets/img/menu.svg';
import avatar from '@/assets/img/avatar.svg';
import logoutImage from '@/assets/img/logout_image.svg';

import Link from "next/link";
import { AddUser, ArrowRight, ChevronRight, CloseSquare, Logout, MoreCircle, ShieldDone, Star, Ticket, TwoUsers } from "react-iconly";
import { useState } from "react";
import { Modal } from "@/components/shared/Modal";

export const Header = () => {

    const [isOptionsOpen, setIsOptionOpen] = useState(false);
    const handleOptions = () => {
        setIsOptionOpen(!isOptionsOpen);
    }

    const [isModalActive, setIsModalActive] = useState(false);
    const handleModal = () => {
        setIsModalActive(!isModalActive);
        console.log(isModalActive);
    }
    const actionLogout = () => {
        console.log("Logout efetuado!");
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
                            <h3>
                                0
                                <span>Eventos</span>
                            </h3>
                        </ContainerInfo>

                        <ContainerInfo>
                            <h3>
                                0
                                <span>Seguidores</span>
                            </h3>
                        </ContainerInfo>
                    </ContainerInfos>

                    <ContainerMenu>
                        <ContainerMenuItem>
                            <Link href='/tickets'>
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

                            <ContainerSubMenu>
                                <ContainerMenuItem>
                                    <input type="radio" id="ptbr" name="language" value="ptbr" />
                                    <label htmlFor="ptbr">Português (BR)</label>
                                </ContainerMenuItem>

                                <ContainerMenuItem>
                                    <input type="radio" id="ptpt" name="language" value="ptpt" />
                                    <label htmlFor="ptpt">Português (PT)</label>
                                </ContainerMenuItem>

                                <ContainerMenuItem>
                                    <input type="radio" id="en" name="language" value="en" />
                                    <label htmlFor="en">Inglês (EN)</label>
                                </ContainerMenuItem>
                            </ContainerSubMenu>
                        </ContainerMenuItem>

                        <ContainerMenuItem>
                            <button className="logout" onClick={handleModal}>
                                <Logout primaryColor="#DA100B" />
                                Sair
                            </button>
                        </ContainerMenuItem>
                    </ContainerMenu>
                </SidebarContainer>
            </SidebarProfile>

            <Modal 
                isActive={isModalActive}
                primaryColor="#DA100B"
                textColor="#212121"
                imageModal={<Image src={logoutImage} alt="Logout" />}
                title="Logout"
                subtitle="Tem certeza que deseja sair da sua conta?"
                confirmText="sim, quero sair"
                actionModal={actionLogout}
                handleModal={handleModal}
            />

        </>
    );
}