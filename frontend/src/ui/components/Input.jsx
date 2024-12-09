import React, { useState } from "react";
import { EyeIcon } from "../icons/EyeIcon";
import { EyeSlashIcon } from "../icons/EyeSlashIcon";
import { set } from "mongoose";
const defaultStyles = {
    'wrapper' : 'relative flex items-center justify-center border-2 bg-white',
    'input' : ' focus:outline-none'
}
const sizeStyle = {
    'sm' : 'py-1 px-2 gap-0.5 md:gap-1 lg:gap-2 rounded-md w-24 sm:w-48 lg:w-60',
    'md' : 'py-1 px-2 gap-0.5 md:gap-1 lg:gap-4 rounded-md w-36 sm:w-60 lg:w-80',
    'lg' : 'py-1 px-2 gap-0.5 md:gap-1 lg:gap-6 rounded-lg w-60 sm:w-80 lg:w-96'
}
const variantStyles = {
    'text' : '',
    'password' : ''
}

export const Input = (props) => {
    const [isPassVisible,setPassVisibility] = useState(false);
    return <>
    <div className="my-4">
        <div className="text-black text-lg my-1">{props.label}</div>
        <div className={`
            ${defaultStyles['wrapper']}
            ${props.size ? sizeStyle[props.size] : sizeStyle['lg']}
            `}>
            <input
                className={`
                    ${defaultStyles['input']}
                    ${props.size ? sizeStyle[props.size] : sizeStyle['lg']}
                `}
                type={!isPassVisible ? props.type : "text"}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
            {props.type =="password" ? 
                <button 
                    onClick={()=> {setPassVisibility(!isPassVisible)}}
                    className="absolute right-2"
                >
                    {isPassVisible ? <EyeSlashIcon/>: <EyeIcon/>}
                </button> : 
            null}
            
        </div>
        {props.error ? 
            <div className="text-red-600 text-center">
                {props.error}
            </div> : null
        }
    </div>
    </>
}