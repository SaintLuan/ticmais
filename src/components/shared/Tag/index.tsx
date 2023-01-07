import { ButtonHTMLAttributes } from "react";
import { TagContainer } from "./styles";

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    bgColor: string;
    textColor: string;
    className: 'filled' | 'outline';
}

export const Tag = ({  bgColor, textColor, className, children }: TagProps) => {
    return(
        <TagContainer 
            className={className}
            bgColor={bgColor} 
            textColor={textColor} 
        >
            {children}
        </TagContainer>
    );
}