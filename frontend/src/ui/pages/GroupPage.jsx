import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { AddIcon } from "../icons/AddIcon";
import { GroupCard } from "../components/GroupCard";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
import { GroupIcon } from "../icons/GroupIcon";
import { ContentWrapper } from "../components/ContentWrapper";
import { AddGroupCard } from "../components/AddGroupCard";
import {GROUP_LIST} from "../../config/serverConfig";
import axios from "axios";

const gernericStyles = "px-10 md:px-16 lg:px-28 py-10";

const headers = {
    headers: {
        token : window.sessionStorage.getItem("token")
    }
}

const groupList = [
    {
      name : "Roomies",
      description : "Friends from hostel room who are working together",
      members : 3,
      spending : 1506
    },
    {
      name : "Homies",
      description : "Friends from home",
      members : 5,
      spending : 2195
    },
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
    },
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
    },
    {
      name : "SSB",
      description : "Friends from interview",
      members : 6,
      spending : 5461
    },
  ]

export const GroupPage = (props) => {
    const [isModalVisible,setModalVisible] = useState(false);
    const [groupList,setGroupList] = useState([]);
    useEffect(() => {
        getGroupDetails();
    }, []);

    const getGroupDetails = async () => {
        try {
            const groupsRes = await axios.get(GROUP_LIST,headers);
            const cleanGroups = groupsRes.data.groupWithExpenses.map((element)=>{
                return {
                    name : element.name,
                    description : element.description,
                    members : element.members.length,
                    spending : element.spending
                }
            })
            setGroupList(cleanGroups);
        } catch(e){
            console.error(e);
        }
    }

    return <div className="relative">
            <div className="flex justify-between align-middle flex-wrap">
                <div className="text-4xl font-bold flex items-center">My Groups</div>
            </div>
            <div className="my-10 flex gap-4 flex-wrap">
                {groupList.map((group,idx) => (
                    <div key={idx}>
                        <GroupCard name={group.name} description={group.description} members={group.members} spending={group.spending} />
                    </div>
                ))}
                <AddGroupCard onClick={()=>{setModalVisible(true)}} icon={<AddIcon />} />
            </div>
        {isModalVisible ? 
        <Modal className={gernericStyles} isModalVisible={isModalVisible} setModalVisible={setModalVisible}>
            <Input label="Group" size="lg" placeholder="Enter name of the group"/>
            <Input label="Description" size="lg" placeholder="Enter group description"/>
            <Button label="Create Group" endIcon={<GroupIcon />}/>
        </Modal> : null
        }
    </div>
}