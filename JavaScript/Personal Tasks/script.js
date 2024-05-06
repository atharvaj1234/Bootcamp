//===========================================================================================================================
// Declarations

import { faker } from "https://esm.sh/@faker-js/faker";

const addEntrybtn = document.getElementById("addEntry");
const filterByCategorybtn = document.getElementById("filterByCategory");


//==========================================================================================================================
//Array Function Constructor


function Expense(expenseid) {
  this.expenseid = expenseid;
  this.description = faker.lorem.words();
  this.category = faker.helpers.arrayElement([
    "food",
    "transport",
    "entertainment",
    "shopping",
  ]);
  this.amount = parseFloat(faker.finance.amount());
  this.date = faker.date.soon({ refDate: "2024-04-04T00:00:00.000Z" });
  this.modeOfPayment = faker.helpers.arrayElement([
    "Cash",
    "Credit Card",
    "Debit Card",
    "Online",
  ]);
}

//==================================================================================================================================
// Functions Logic

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

function filterByCategory(category) {
  const filteredExpenses = arrayOfRandomExpense.filter(
    (expense) => expense.category == category.toLowerCase()
  );
  return filteredExpenses;
}



const arrayOfRandomExpense = generateRandomArrayOfExpenses(1);
//===============================================================================================================================================
// Renter Total and Expenses to Screen Logic

function rendertotal(totalExpense){
  const Div = document.createElement("div");
  const innerdiv = document.createElement("div");
  Div.classList.add("totalexpense");
  innerdiv.classList.add("expensetext");
  innerdiv.textContent = `Total Expense: ${totalExpense.toFixed(2)}`;
  Div.appendChild(innerdiv);
  expenseHolder.appendChild(Div);
}


function renderExpenses(expenses) {

  expenses.forEach((expense) => {
    const newDiv = document.createElement("div");
    newDiv.classList.add("expense");

    Object.entries(expense).forEach(([key, value]) => {
      const textdiv = document.createElement("div");
      textdiv.classList.add("expensetext");
      textdiv.textContent = `${key}: ${value}`;
      newDiv.appendChild(textdiv);
    });

    expenseHolder.appendChild(newDiv);
  });
}
//=================================================================================================================================================}
// Buttons Logic

addEntrybtn.addEventListener("click", () => {
  const expenseHolder = document.getElementById("expenseHolder");
  const newexpense = new Expense(generateUniqueId({ prefix: "expense" }));

  arrayOfRandomExpense.push(newexpense);
  expenseHolder.innerHTML = ''; // Clear existing expenses
  renderExpenses(arrayOfRandomExpense);
});


filterByCategorybtn.addEventListener("click", () => {
  const expenseHolder = document.getElementById("expenseHolder");
  const filteredArrayOfExpense = filterByCategory("Food");

  expenseHolder.innerHTML = ''; // Clear existing expenses

  const totalExpense = filteredArrayOfExpense.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  );

  rendertotal(totalExpense);
  renderExpenses(filteredArrayOfExpense);
});
