// Replace in the future with database queries
export function fetchData(key) {
  return JSON.parse(localStorage.getItem(key));
}

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

const generateRandomColour = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Get all items
export const getAllMatchingItems = ({ category, key, value }) => {
  // If category is empty, then return an empty array
  const data = fetchData(category) ?? [];
  // Filter returns everything in an array
  return data.filter((item) => item[key] === value);
};

// Create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    colour: generateRandomColour(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

// Delete Expense
const deleteExpense = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
};
// Total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  // This will be an end point from the backedn
  const expenses = fetchData("expenses") ?? [];
  // Smth like a map
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budgetId) {
      return acc;
    }
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

// Format Currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "currency",
    currency: "AUD",
  });
};

// Format Percent
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

export const formatDateToLocaleString = (epoch) => {
  return new Date(epoch).toLocaleDateString();
};
