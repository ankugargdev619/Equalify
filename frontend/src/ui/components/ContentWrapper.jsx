const gernericStyles = "px-10 md:px-16 lg:px-28 py-10";

export const ContentWrapper = (props) => {
    return <div className={gernericStyles}>
        {props.children}
    </div>
}