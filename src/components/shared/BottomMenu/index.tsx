import Link from "next/link";
import { Discovery, Heart, Home, Ticket, User } from "react-iconly";

import { MenuContainer, MenuItem, MenuWrapper } from "./styles";

export const BottomMenu = () => {
    return(
        <MenuContainer>
            <MenuWrapper>
                <MenuItem>
                    <Link href='/' className="active">
                        <Home set="bold" primaryColor="#023E5E" />
                        Home
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href='/'>
                        <Discovery primaryColor="#9E9E9E" />
                        Explorar
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href='/'>
                        <Heart primaryColor="#9E9E9E" />
                        Favoritos
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href='/'>
                        <Ticket primaryColor="#9E9E9E" />
                        Ingressos
                    </Link>
                </MenuItem>

                <MenuItem>
                    <Link href='/'>
                        <User primaryColor="#9E9E9E" />
                        Perfil
                    </Link>
                </MenuItem>
            </MenuWrapper>
        </MenuContainer>
    );
}