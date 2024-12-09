import { UserIcon } from "../icons/UserIcon"

export const ProfileCard = (props) => {
    return <>
        <div className="flex gap-4 items-center">
            <div className="flex items-center justify-center rounded-full w-16 h-16 bg-brand-200">
                <UserIcon />
            </div>
            <div>
                <div className="font-bold text-xl">{props.name}</div>
                <div className="text-md text-brand-400">{props.email}</div>
            </div>
        </div>
    </>
}