import { toast } from "react-toastify";
import { createBudget, createExpense } from "./helper";

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  console.log(_action);
  // new user submission
  // Should be handling with database instead
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created!!");
    } catch (e) {
      throw new Error("There was a problem creating your budget!");
    }
  }
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        // This is from the id of the select header.
        budgetId: values.newExpenseBudget,
      });
      return toast.success("Expense created!!");
    } catch (e) {
      throw new Error("There was a problem creating your budget!");
    }
  }
  // hidden action name defined in ExpenseItem.jsx
  if (_action === "deleteExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        // This is from the id of the select header.
        budgetId: values.newExpenseBudget,
      });
      return toast.success("Expense Deleted!!");
    } catch (e) {
      throw new Error("There was a problem Deleting your budget!");
    }
  }
}
