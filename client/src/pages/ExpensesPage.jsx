import { useLoaderData} from "react-router-dom"
import Table from "../components/Table"

const ExpensesPage = () => {
    // Remember to put the brackets around the extraction. 
    const {expenses} = useLoaderData()
  return (
    <div className="grid-lg">
        <h1>All Expenses</h1>
        {
            expenses && expenses.length > 0 ? (
                <div className="grid-md">
                    <h2>Recent Expenses <small>({expenses.length} total)
                    </small>
                    </h2>
                    <Table expenses = {expenses.sort((a,b) => a.createdAt - b.createdAt)}/> 
                </div>
            ):(<p>No Expenses to show</p>)
        }
    </div>
  )
}

export default ExpensesPage