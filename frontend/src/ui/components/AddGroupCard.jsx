import { Card } from "./Card"

export const AddGroupCard = (props) => {

    return <div className="cursor-pointer" onClick={props.onClick}>
        <Card>
            {props.icon}
        </Card>
    </div>
}