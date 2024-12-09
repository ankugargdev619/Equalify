import React from "react"
const defaultStyles = 'flex items-center justify-center border-2 my-4'
const sizeStyle = {
    'sm' : 'py-2 px-2 gap-2 rounded-md w-24 sm:w-48 lg:w-60',
    'md' : 'py-2 px-6 gap-4 rounded-md w-36 sm:w-60 lg:w-80',
    'lg' : 'py-2 px-8 gap-6 rounded-lg w-60 sm:w-80 lg:w-96'
}
const variantStyles = {
    'primary' : 'bg-brand-700 hover:bg-brand-800 text-brand-50',
    'secondary' : 'bg-brand-500 hover:bg-brand-600 text-white',
    'outline' : 'bg-white hover:bg-brand-50',
    'cancel' : 'bg-red-500 hover:bg-red-600 text-brand-50',
    'save' : 'bg-green-500 hover:bg-green-600 text-brand-50',
    'disabled' : 'bg-brand-100 text-brand-400'
}

export const Button = (props) => {
    const StartIcon = props.startIcon ? React.cloneElement(props.startIcon, {size : props.size}) : null;
    const EndIcon = props.endIcon ? React.cloneElement(props.endIcon, {size : props.size}) : null;
    return <>
        <button 
            className={`
                ${defaultStyles}
                ${props.size ? sizeStyle[props.size] : sizeStyle['lg']}
                ${props.variant ? variantStyles[props.variant] : variantStyles['primary']}
            `}
            onClick={props.variant=='disabled' ? null : props.onClick}
        >
            {StartIcon}
            {props.label}
            {EndIcon}
        </button>
    </>
}