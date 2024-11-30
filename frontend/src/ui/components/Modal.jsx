import { CloseIcon } from "../icons/CloseIcon"

export const Modal= (props)=>{
    return <div>
        <div className={`fixed top-0 right-0 opacity-40 z-40 w-screen h-screen bg-brand-500 ${props.className}`} />
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <div className="w-full relative bg-brand-50 z-50 opacity-1 rounded-lg px-10 py-2">
                    {props.children}
                    <button className="absolute top-2 right-2" onClick={()=>{props.setModalVisible(false)}}>
                        <CloseIcon />
                    </button>
                </div>
        </div>
    </div>
}