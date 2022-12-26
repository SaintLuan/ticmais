import { HeaderContainer, HeaderLogo, HeaderProfiler, MenuContainer } from "./styles"
import Image from "next/image";

import logoHeader from '@/assets/img/logo_color.svg';
import menuIcon from '@/assets/img/menu.svg';
import avatar from '@/assets/img/avatar.svg';

export const Header = () => {
    return(
        <HeaderContainer>
            <MenuContainer>
                <Image src={menuIcon} width={25} alt="Tic Mais" />
            </MenuContainer>

            <HeaderLogo>
                <Image src={logoHeader} width={100} alt="Tic Mais" />
            </HeaderLogo>

            <HeaderProfiler>
                <Image src={avatar} width={35} alt="Tic Mais" />
            </HeaderProfiler>

        </HeaderContainer>
    );
}