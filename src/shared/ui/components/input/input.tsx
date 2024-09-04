import {ComponentProps} from "react";

type InputProps = ComponentProps<'input'> & {
    searchIcon?: boolean
    eyeIcon?: boolean
    label?: string
}

function Input(props: InputProps) {
    return <input className={'border-2 border-rose-500'} {...props} type="text"/>
}

export {Input}