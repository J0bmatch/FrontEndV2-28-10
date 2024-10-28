import { ComponentProps } from "react";
import "./input.css"
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

interface InputProps extends ComponentProps<'input'>{
    label?: string;
}

export default function Input({label, ...props}: InputProps ){
    const className = twMerge('w-[350px]', props.className)
    return(
        <div className="flex flex-col gap-2 justify-start">
            <span className="ml-3 font-poppins font-normal">{label}</span>
            <input {...props} className={cn(className, 'input-css')} />
        </div>
    )
}