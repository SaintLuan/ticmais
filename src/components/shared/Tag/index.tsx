import { ButtonHTMLAttributes } from "react";
import { TagContainer } from "./styles";

interface TagProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    bgColor: 'white' | 'primary-500' | 'secondary-500';
    textColor: 'white' | 'primary-500' | 'secondary-500';
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