const sizeStyle = {
    'sm' : 'w-4',
    'md' : 'w-4',
    'lg' : 'w-6'
}

export const ReceiveIcon = (props) => {
    return <>
        <svg className={sizeStyle[props.size? props.size : "lg"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
        </svg>
    </>
}