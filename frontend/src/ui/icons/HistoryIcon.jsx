const sizeStyle = {
    'sm' : 'w-4',
    'md' : 'w-4',
    'lg' : 'w-6'
}

export const HistoryIcon = (props) => {
    return <>
        <svg className={sizeStyle[props.size? props.size : "lg"]} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

    </>
}