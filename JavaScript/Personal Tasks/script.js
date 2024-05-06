//===========================================================================================================================
// Declarations

import { faker } from "https://esm.sh/@faker-js/faker";

const addEntrybtn = document.getElementById("addEntry");
const overlayForEntry = document.getElementById("overlayForEntry");
const addExpenseBtn = document.getElementById("addExpense");
const cancelEntrybtn = document.getElementById("cancelEntry");

const filterByCategorybtn = document.getElementById("filterByCategory");
const overlayForCategory = document.getElementById("overlayForCategory");
const FindExpenseByCategorybtn = document.getElementById("FindExpenseByCategory");
const cancelFindByCategorybtn = document.getElementById("cancelFindByCategory");

const filterByDatebtn = document.getElementById("filterByDate");
const overlayForDate = document.getElementById("overlayForDate");
const FilterExpenseByDatebtn = document.getElementById("FindExpenseByDate");
const cancelFilterByDatebtn = document.getElementById("cancelFindByDate");

const getTotalExpense = document.getElementById("getTotalExpense");
const removeExpense = document.getElementById("removeExpense");

//==========================================================================================================================
//Array Function Constructor


function Expense(expenseid, description, category, amount, date, modeOfPayment) {
  this.expenseid = expenseid;
  this.description = description;
  this.category = category;
  this.amount = amount;
  this.date = date;
  this.modeOfPayment = modeOfPayment;
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
    (expense) => expense.category == category
  );
  return filteredExpenses;
}

function getTotalExpensesInRange(startDate, endDate)
{
  const expenseInRange = arrayOfRandomExpense.filter((expense)=>{
    const  expenseDate = new Date(expense.date);
    return expenseDate >=  startDate && expenseDate <= endDate;
  });
  console.log("Expenses in range:", expenseInRange);
  return expenseInRange;
}

function deleteExpenseById(id) {
  const index = arrayOfRandomExpense.findIndex(
    (expense) => expense.expenseid.toLowerCase() === id
  );
  if (index != -1) {
    arrayOfRandomExpense.splice(index, 1);
  }else{
    alert("Expense ID doesn't Exist");
  }
}

let arrayOfRandomExpense = [];
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


/* AddEntry */  
/* AddEntry */  addExpenseBtn.addEventListener("click", () => {
/* AddEntry */    const description = document.getElementById("description").value;
/* AddEntry */    const category = document.getElementById("category").value;
/* AddEntry */    const amount = parseFloat(document.getElementById("amount").value);
/* AddEntry */    const date = document.getElementById("date").value;
/* AddEntry */    const paymentMode = document.getElementById("paymentMode").value;
/* AddEntry */  
/* AddEntry */    // Validate input
/* AddEntry */    if (!description || !category || isNaN(amount) || amount <= 0 || !date || !paymentMode) {
/* AddEntry */      alert("Please fill in all fields with valid data.");
/* AddEntry */      return;
/* AddEntry */    }
/* AddEntry */  
/* AddEntry */    // Create and add expense
/* AddEntry */    const newExpense = new Expense(
/* AddEntry */      generateUniqueId({ prefix: "expense" }),
/* AddEntry */      description,
/* AddEntry */      category,
/* AddEntry */      amount,
/* AddEntry */      date,
/* AddEntry */      paymentMode
/* AddEntry */    );
/* AddEntry */    arrayOfRandomExpense.push(newExpense);
/* AddEntry */    expenseHolder.innerHTML = ''; // Clear existing expense 
/* AddEntry */    renderExpenses(arrayOfRandomExpense);
/* AddEntry */  
/* AddEntry */    // Hide overlay
/* AddEntry */    overlayForEntry.style.display = "none";
/* AddEntry */  });
/* AddEntry */   // Show overlay when "Add Entry" button is clicked
/* AddEntry */   addEntrybtn.addEventListener("click", () => {
/* AddEntry */     overlayForEntry.style.display = "flex";
/* AddEntry */     document.getElementById("description").value = "";
/* AddEntry */     document.getElementById("category").value = "";
/* AddEntry */     document.getElementById("amount").value = "";
/* AddEntry */     document.getElementById("date").value = "";
/* AddEntry */     document.getElementById("paymentMode").value = "";
/* AddEntry */   });
/* AddEntry */   cancelEntrybtn.addEventListener("click", () => {
/* AddEntry */     overlayForEntry.style.display = "none";
/* AddEntry */   });


/* FindByCategory*/  filterByCategorybtn.addEventListener("click", () => {
/* FindByCategory*/    overlayForCategory.style.display = "flex";
/* FindByCategory*/    document.getElementById("category1").value = "";
/* FindByCategory*/  });
/* FindByCategory*/  
/* FindByCategory*/  FindExpenseByCategorybtn.addEventListener("click", ()=>{
/* FindByCategory*/    const category = document.getElementById("category1").value;
/* FindByCategory*/    if (!category) {
/* FindByCategory*/      alert("Please fill in the field with valid data.");
/* FindByCategory*/      return;
/* FindByCategory*/    }
/* FindByCategory*/    console.log(category);
/* FindByCategory*/    const expenseHolder = document.getElementById("expenseHolder");
/* FindByCategory*/    const filteredArrayOfExpense = filterByCategory(category);
/* FindByCategory*/  
/* FindByCategory*/    expenseHolder.innerHTML = ''; // Clear existing expenses
/* FindByCategory*/  
/* FindByCategory*/    const totalExpense = filteredArrayOfExpense.reduce(
/* FindByCategory*/      (total, currentObj) => total + currentObj.amount,
/* FindByCategory*/      0
/* FindByCategory*/    );
/* FindByCategory*/  
/* FindByCategory*/    rendertotal(totalExpense);
/* FindByCategory*/    renderExpenses(filteredArrayOfExpense);
/* FindByCategory*/    overlayForCategory.style.display = "none";
/* FindByCategory*/  });
/* FindByCategory*/  cancelFindByCategorybtn.addEventListener("click", () => {
/* FindByCategory*/    overlayForCategory.style.display = "none";
/* FindByCategory*/  });

filterByDatebtn.addEventListener("click", () => {
    overlayForDate.style.display = "flex";
    document.getElementById("dateStart").value = "";
    document.getElementById("dateEnd").value = "";
  });

FilterExpenseByDatebtn.addEventListener("click", ()=>{
  const startDate = document.getElementById("dateStart").value;
  const endDate = document.getElementById("dateEnd").value;
  if(!startDate || !endDate) {
    alert("Please fill in all fields with valid data.");
    return;
  }
  console.log(startDate,endDate);
  const expenseHolder = document.getElementById("expenseHolder");
  const dateStart = new Date(startDate);
  const dateEnd = new Date(endDate);
  const FilteredArrayByDate = getTotalExpensesInRange(dateStart,dateEnd);

  expenseHolder.innerHTML = ''; // Clear existing expense  

  const totalExpense = FilteredArrayByDate.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  )  
  rendertotal(totalExpense);
  renderExpenses(FilteredArrayByDate);
  overlayForDate.style.display = "none";
})

cancelFilterByDatebtn.addEventListener("click",() =>{
  overlayForDate.style.display="none";
})

getTotalExpense.addEventListener("click", ()=>{
  const totalExpense = arrayOfRandomExpense.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  )  
  expenseHolder.innerHTML = '';
  rendertotal(totalExpense);
  renderExpenses(arrayOfRandomExpense);
})

removeExpense.addEventListener("click", ()=>{
  const expenseid = prompt("Enter Expense ID to remove:");
  deleteExpenseById(expenseid.toLowerCase())
  expenseHolder.innerHTML = '';
  renderExpenses(arrayOfRandomExpense);
})