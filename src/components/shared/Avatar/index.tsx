import Image from "next/image";
import { AvatarContainer } from "./styles";

interface AvatarProps {
    srcImage: string;
    userName: string;
}

export const Avatar = ({ srcImage, userName }: AvatarProps) =>{
    return(
        <AvatarContainer>
            <Image src={srcImage} alt={userName} width={150} height={150} />
        </AvatarContainer>
    );
}