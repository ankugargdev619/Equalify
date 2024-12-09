const sizeStyle = {
    'sm' : 'w-4',
    'md' : 'w-4',
    'lg' : 'w-6'
}

export const SendIcon = (props) => {
    return <>
        <svg className={sizeStyle[props.size? props.size : "lg"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>

    </>
}