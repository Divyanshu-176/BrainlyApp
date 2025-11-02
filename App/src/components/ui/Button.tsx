 
import type { ReactElement } from "react";




export interface ButtonProps{
    variant: "primary" | "secondary";
    size:"sm"|"md"|"lg";
    text: string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick?: ()=>void    
}


const variantStyles = {
    "primary":"bg-[#5046e4] text-white ",
    "secondary":"bg-[#e0e7fe] text-[#3e38a7]"
}

const sizeStyles = {
    "sm":"py-1 px-2 ",
    "md":"py-2 px-4",
    "lg":"py-4 px-6"
}

const defaultStyles = "rounded-md  flex flex-row items-center font-normal cursor-pointer";


export const Button = (props:ButtonProps) => {
    
    return <button 
    onClick={props.onClick}
    className= 
    {`${defaultStyles} ${variantStyles[props.variant]}  ${sizeStyles[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null } {props.text} {props.endIcon ? <div className="pl-2">{props.endIcon}</div> : null } 
        </button>
}