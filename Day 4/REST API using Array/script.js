import { faker } from "https://esm.sh/@faker-js/faker";

function Expense(expenseid) {
  this.expenseid = expenseid;
  this.description = faker.lorem.words();
  this.category = faker.helpers.arrayElement([
    "Food",
    "Transport",
    "Entertainment",
    "Shopping",
  ]);
  this.amount = parseInt(faker.finance.amount());
  this.date = faker.date.soon({ refDate: "2024-05-01T00:00:00.000Z" });
  // this.modeOfPayment = faker.helpers.arrayElement(['Cash', 'Credit Card', 'Debit Card', 'Online']);
}

const generateUniqueId = (config = {}) => {
  // destructing
  const { prefix } = config;
  if (prefix) {
    return prefix + "-" + Math.random().toString(36).substring(2);
  }
  return Math.random().toString(36).substring(2);
};

function generateRandomArrayOfExpenses(num) {
  let array = [];
  for (let i = 0; i < num; i++) {
    array.push(new Expense(generateUniqueId({ prefix: "expense" })));
  }
  return array;
}

function findExpenseById(id) {
  return arrayOfRandomExpense.find((expense) => expense.expenseid == id);
}

function filterByCategory(category) {
  const filteredExpenses = arrayOfRandomExpense.filter(
    (expense) => expense.category == category
  );
  const totalExpense = filteredExpenses.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  );
  const reformattedExpenses = filteredExpenses.map(
    ({ expenseid, category, date, ...rest }) => rest
  );
  return { expenses: reformattedExpenses, totalExpense };
}

function updateExpenseById(id, updateObject) {
  const expenseToUpdate = arrayOfRandomExpense.find(
    (expense) => expense.expenseid == id
  );
  if (!expenseToUpdate) return;
  Object.keys(updateObject).forEach((key) => {
    if (key != "expenseid") {
      expenseToUpdate[key] = updateObject[key];
    }
  });
}

function deleteExpenseById(id) {
  const index = arrayOfRandomExpense.findIndex(
    (expense) => expense.expenseid === id
  );
  if (index != -1) {
    arrayOfRandomExpense.splice(index, 1);
  }
}

function getTotalExpensesInRange(startDate, endDate)
{
  const expenseInRange = arrayOfRandomExpense.filter((expense)=>{
    const  expenseDate = new Date(expense.date);
    return expenseDate >=  startDate && expenseDate <= endDate;
  });
  const sum = expenseInRange.reduce((total, expense)=>{
    total=total+expense.amount;
    return total;}
  ,0)
  const reformattedExpenses = expenseInRange.map(
    ({ expenseid, category, description, ...rest }) => rest
  );
  return {expense: reformattedExpenses, total: sum};
}

// ------------------------------------------------------------------------
const arrayOfRandomExpense = generateRandomArrayOfExpenses(5);
console.log("Original Array Of Objects",arrayOfRandomExpense);
// -----------------------------------------------------------------------

console.log("Finding element at index 2 by Expense-ID",findExpenseById(arrayOfRandomExpense[2].expenseid));

console.log("Finding Total of Category Food",filterByCategory("Food"));

console.log("Changing Description of object at index at 1 to \"New Description\"");
updateExpenseById(arrayOfRandomExpense[1].expenseid,{description: 'New Description'});
console.log(arrayOfRandomExpense);

console.log("Deleting object at index 3");
deleteExpenseById(arrayOfRandomExpense[3].expenseid);
console.log(arrayOfRandomExpense);

console.log("Total Expense from a Range of date (Generated using faker)",getTotalExpensesInRange(faker.date.soon({ refDate: "2024-05-01T00:00:00.000Z" }),faker.date.soon({ refDate: "2024-05-05T00:00:00.000Z" })));
