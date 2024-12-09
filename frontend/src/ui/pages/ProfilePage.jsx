import { Card } from "../components/Card"
import { ExpenseTable } from "../components/ExpenseTable"
import { ProfileCard } from "../components/ProfileCard"
import { BankNotesIcon } from "../icons/BankNotesIcon"
import { CreditCardIcon } from "../icons/CreditCardIcon"
import { HistoryIcon } from "../icons/HistoryIcon"
import { ReceiveIcon } from "../icons/ReceiveIcon"
import { SendIcon } from "../icons/SendIcon"

const recentExpenses = [
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Food",
        amount : 500,
        group : "New Friends",
        date : "28th Nov, 2024"
    },
    {
        description : "Fooding",
        amount : 100,
        group : "New Friends",
        date : "28th Nov, 2024"
    }
];

export const ProfilePage = ()=> {
    return <>
        <ProfileCard name="Ankit Sharma" email="ankit.sharma@gmail.com" />
        <div className="flex gap-6 lg:gap-10 flex-wrap my-10 justify-center lg:justify-start">
            <Card className="w-full max-w-96 rounded-md px-6 py-6">
                <div className="text-xl flex justify-between">
                    <span>You Owe</span>
                    <SendIcon />
                </div>
                <div className="mt-6 text-3xl font-bold text-red-600">{Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(500)}</div>
            </Card>
            <Card className="w-full max-w-96 rounded-md px-6 py-6">
                <div className="text-xl flex justify-between">
                    <span>You Are Owed</span>
                    <ReceiveIcon />
                </div>
                <div className="mt-6 text-3xl font-bold text-green-600">{Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(1500)}</div>
            </Card>
        </div>
        <div>
            <div className="text-4xl font-bold mb-10">Quick Actions</div>
            <div className="flex gap-6 lg:gap-10 flex-wrap my-10 justify-center lg:justify-start">
                <Card className="w-full max-w-96 rounded-md px-6 py-2">
                    <div className="text-xl flex justify-between">
                        <span>Make Payment</span>
                        <CreditCardIcon />
                    </div>
                </Card>
                <Card className="w-full max-w-96 rounded-md px-6 py-2">
                    <div className="text-xl flex justify-between">
                        <span>Add Expense</span>
                        <BankNotesIcon />
                    </div>
                </Card>
                <Card className="w-full max-w-96 rounded-md px-6 py-2">
                    <div className="text-xl flex justify-between">
                        <span>History</span>
                        <HistoryIcon />
                    </div>
                </Card>
            </div>
            <div className="w-full">
                <ExpenseTable expenseData={recentExpenses} />
            </div>
        </div>
    </>
}