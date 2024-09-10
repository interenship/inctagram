import {ComponentProps} from "react";
import {cn} from "@/features/utils/cn";

type InputProps = ComponentProps<'input'> & {
    searchIcon?: boolean
    eyeIcon?: boolean
    label?: string
    error?: boolean
    disabled?: boolean
    errorText?: string
}

function Input({className, error, errorText, eyeIcon, searchIcon, ...props}: InputProps) {
    return (
        <div className={cn('')}>
            <input
                className={cn
                ('px-2.5 border rounded-sm border-dark-100 bg-transparent leading-6 text-light-900 font-normal text-base h-9 ' +
                    'active:border-light-100 active:text-light-100 active:bg-dark-500 active:outline-none ' +
                    'hover:border-light-900 hover:text-light-900 active:bg-dark-500 active:outline-none ' +
                    'focus:border-accent-500 focus:outline-none ' +
                    'disabled:cursor-not-allowed disabled:text-dark-100 ' ,
                    error && 'border-danger-500')} {...props}
            />
            {searchIcon && <span className={cn('')}>🔎</span>}
            {eyeIcon && <span className={cn('')}>👁️</span>}
            {error && <div className={cn('text-danger-500 font-normal text-sm leading-6')}>{errorText}</div>}
        </div>
    )
}

export {Input}