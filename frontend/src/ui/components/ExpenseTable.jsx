
export const ExpenseTable = (props) => {
    const expenseData = props?.expenseData;
    const totalAmount = expenseData?.reduce((sum, item) => sum + item.amount, 0);
    return <>
        <div className="text-4xl font-bold mb-10">Recent Expenses</div>
        {expenseData ? <table className="table-auto border-collapse border w-full">
                    <thead  className="text-lg md:text-xl">
                        <tr>
                        {Object.keys(expenseData[0]).map((key,idx) => (
                            <th key={key} className={`border py-2 bg-brand-950 text-brand-50 ${idx==0 ? 'rounded-tl-lg' : ''} ${idx == Object.keys(expenseData[0]).length -1 ? 'rounded-tr-lg' : ''}`}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                            </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody className="text-center text-md md:text-lg">
                    {expenseData.map((row,id) => (
                    <tr key={id}>
                        {Object.values(row).map((value, index) => (
                        <td key={index} className="border py-2 px-4">
                            {value}
                        </td>
                        ))}
                    </tr>
                    ))}
                    </tbody>
                    <tfoot className="text-center text-md md:text-lg text-brand-50 font-bold">
                        <tr>
                            <td className="rounded-bl-lg bg-brand-950 py-2">Total</td>
                            <td colSpan="3" className="rounded-br-lg bg-brand-950 py-2">{Intl.NumberFormat("en-IN", {
                            style: "currency",
                            currency: "INR",
                            }).format(totalAmount)}</td>
                        </tr>
                    </tfoot>
                </table> : 
                <div className="text-lg md:text-xl">No expenses yet!</div>
            }
    </>
}