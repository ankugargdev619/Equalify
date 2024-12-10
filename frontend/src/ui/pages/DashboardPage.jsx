import { useState } from "react";
import { Header } from "../components/Header"
import { Card } from "../components/Card";
import { RupeeIcon } from "../icons/RupeeIcon";
import { GroupIcon } from "../icons/GroupIcon";
import { ExpenseTable } from "../components/ExpenseTable";
import { useRecoilState } from "recoil";
import { authState } from "../../atoms/authState";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GROUP_LIST, USER_EXPENSES,USER_PROFILE } from "../../config/serverConfig";
import axios from "axios";


const gernericStyles = "px-10 md:px-16 lg:px-28 py-10";
const headers = {
    headers: {
        token : window.sessionStorage.getItem("token")
    }
}

export const DashboardPage = () => {
    const [name,setName] = useState("");
    const [spending,setSpending] = useState(0);
    const [groupCount, setGroupCount] = useState(0);
    const [isAuth,setIsAuth] = useRecoilState(authState);
    const [recentExpenses,setRecentExpenses] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
      const token = window.sessionStorage.getItem("token");
      if(!token){
        navigate("/login");
      }
      getDashDetails();
    },[]);

    const getDashDetails = async () => {
        try {
            const expense = await axios.get(USER_EXPENSES,headers);
            const profile = await axios.get(USER_PROFILE,headers);
            const groupList = await axios.get(GROUP_LIST,headers);

            const cleanExpense = expense.data.map((element)=>{
                return {
                    name : element.name,
                    amount : element.amount,
                    group : element.groupId.name,
                    date : formatDate(element.createdAt.split('T')[0])
                }
            });
            const totalSpending = cleanExpense.reduce((total,item) => total + item.amount,0);

            const recentExpenses = cleanExpense.slice()
            .sort((a,b) => a-b)
            .slice(0,5);

            setRecentExpenses(recentExpenses);
            setSpending(totalSpending);
            setName(profile.data.name);
            setGroupCount(groupList.data.groupWithExpenses.length);
        } catch(e) {
            console.log(e);
        }
    }

    return <div>
            <div className="text-4xl font-bold">Welcome {name}!</div>
            <div className="flex gap-6 lg:gap-10 flex-wrap my-10 justify-center lg:justify-start">
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Spendings</span>
                        <RupeeIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">{Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(spending)}</div>
                </Card>
                <Card className="w-full max-w-96 rounded-md px-6 py-6">
                    <div className="text-xl flex justify-between">
                        <span>Total Groups</span>
                        <GroupIcon />
                    </div>
                    <div className="mt-6 text-3xl font-bold">{groupCount}</div>
                </Card>
            </div>
            <div className="w-full">
                {recentExpenses.length ? <ExpenseTable expenseData={recentExpenses} /> : null}
            </div>
    </div>
}

const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // "Nov"
    const year = date.getFullYear();

    // Add ordinal suffix to the day
    const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th'; // Covers 11th, 12th, 13th, etc.
        switch (n % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
};