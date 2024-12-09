import { GroupIcon } from "../icons/GroupIcon"
import { Card } from "./Card"

export const GroupCard = (props) => {
    return <div className="w-72 md:w-80 h-full">
        <Card className="px-5 pt-4 pb-10 relative">
            <div className="mb-4 flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <div className="rounded-full bg-brand-300 w-12 h-12 flex items-center justify-center">
                        <GroupIcon />
                    </div>
                    <div className="text-xl font-bold">{props.name}</div>
                </div>
                <div className="flex gap-2 items-center">
                    <GroupIcon size="sm" />
                    <div className="text-sm text-brand-700">{props.members} members</div>
                </div>
            </div>
            <div className="text-brand-800 text-sm">{props.description}</div>
            <div className="font-bold absolute bottom-2">Total Spendings : {Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(props.spending)}</div>
        </Card>
    </div>
}