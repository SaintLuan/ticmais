import { InputHTMLAttributes } from "react";
import { InputStyled } from "./styles";
import InputMask from "react-input-mask";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
    iconRight?: React.ReactNode;
    mask?: string | (string | RegExp)[] | any ;
    width: number;
    widthMobile?: number;
}

export const Input = ({ mask, icon, iconRight, className, width, widthMobile, ...props } :InputProps ) =>{
    return(
        <>
            <InputStyled width={width} widthMobile={widthMobile} className={className}>
                {icon}

                <InputMask
                    placeholder={props.placeholder}
                    mask={mask}
                    type={props.type}
                    value={props.value}
                    required
                    onChange={props.onChange}
                    onInvalid={props.onInvalid}
                    name={props.name}
                    id={props.id}
                />

                {iconRight}
            </InputStyled>
        </>
    )
}