//==================================================================================================================================
// Functions Logic

const generateUniqueId = (config = {}) => {
  const { prefix } = config;
  return (prefix ? prefix + "-" : "") + Math.random().toString(36).substring(2);
};

function filterByCategory(category) {
  return arrayOfRandomExpense.filter(
    (expense) => expense.category.toLowerCase() === category.toLowerCase()
  );
}

function getTotalExpensesInRange(startDate, endDate) {
  return arrayOfRandomExpense.filter((expense) => {
    const expenseDate = new Date(expense.date);
    return expenseDate >= startDate && expenseDate <= endDate;
  });
}

function deleteExpenseById(id) {
  const index = arrayOfRandomExpense.findIndex(
    (expense) => expense.expenseid.toLowerCase() === id.toLowerCase()
  );
  if (index !== -1) {
    arrayOfRandomExpense.splice(index, 1);
  } else {
    alert("Expense ID doesn't Exist");
  }
}

function updateExpenseById(id, updateObject) {
  const expenseToUpdate = arrayOfRandomExpense.find(
    (expense) => expense.expenseid === id
  );
  if (!expenseToUpdate) alert("Expense Doesn't Exist");
  Object.assign(expenseToUpdate, updateObject);
}

let arrayOfRandomExpense = [];

export {generateUniqueId,filterByCategory,getTotalExpensesInRange,deleteExpenseById,updateExpenseById,arrayOfRandomExpense}
