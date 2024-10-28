import { ComponentProps } from "react";
import "./button.css"

export type ButtonProps = ComponentProps<'button'>



export function Button(props: ButtonProps, ){
    return(
        <button {...props}></button>
    )
}