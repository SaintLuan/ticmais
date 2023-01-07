import { InputHTMLAttributes } from "react";
import { InputStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    iconRight?: React.ReactNode;
    width: number;
    widthMobile?: number;
}

export const Input = ({ icon, iconRight, className, width, widthMobile, ...props } :InputProps ) =>{
    return(
        <>
            <InputStyled width={width} widthMobile={widthMobile} className={className}>
                {icon}

                <input
                    placeholder={props.placeholder}
                    type={props.type}
                    value={props.value}
                    required
                    onChange={props.onChange}
                    onInvalid={props.onInvalid}
                />

                {iconRight}
            </InputStyled>
        </>
    )
}