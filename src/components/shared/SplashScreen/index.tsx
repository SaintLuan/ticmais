import Image from "next/image";

import { SplashContainer, SplashLogo } from "./styles";
import { LoadingIcon } from "@/components/shared/LoadingIcon";

import logoWhite from '@/assets/img/logo_white.svg';


export const SplashScreen = () =>{
    return(
        <SplashContainer>
            <SplashLogo>
                <Image 
                    src={logoWhite}
                    alt="Tic Mais"
                    width={35}
                    height={35}
                />
            </SplashLogo>

            <LoadingIcon />
        </SplashContainer>
    );
}