import React, { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width: number;
    className: 'outline' | 'filled';
    color: 'primary-500' | 'primary-100' | 'gray-200' | 'secondary-500';
    textColor: 'white' | 'gray-900' | 'primary-500' | 'secondary-500';
}

export const Button = ({ className, width, onClick, color, textColor, children }: ButtonProps) =>{
    return(
        <ButtonStyled onClick={onClick} className={className} width={width} color={color} textColor={textColor} >
            {children}
        </ButtonStyled>
    )
}