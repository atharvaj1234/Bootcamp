//===========================================================================================================================
// Declarations

import { faker } from "https://esm.sh/@faker-js/faker";

const elements = {
  addEntrybtn: document.getElementById("addEntry"),
  overlayForEntry: document.getElementById("overlayForEntry"),
  addExpenseBtn: document.getElementById("addExpense"),
  cancelEntrybtn: document.getElementById("cancelEntry"),
  generateRandom: document.getElementById("generateRandom"),

  filterByCategorybtn: document.getElementById("filterByCategory"),
  overlayForCategory: document.getElementById("overlayForCategory"),
  FindExpenseByCategorybtn: document.getElementById("FindExpenseByCategory"),
  cancelFindByCategorybtn: document.getElementById("cancelFindByCategory"),

  filterByDatebtn: document.getElementById("filterByDate"),
  overlayForDate: document.getElementById("overlayForDate"),
  FilterExpenseByDatebtn: document.getElementById("FindExpenseByDate"),
  cancelFilterByDatebtn: document.getElementById("cancelFindByDate"),

  updateExpenseBtn: document.getElementById("updateExpense"),
  overlayForUpdate: document.getElementById("overlayForUpdate"),
  updateExpenseAttributesBtn: document.getElementById("updateExpenseAttributes"),
  cancelUpdateBtn: document.getElementById("cancelUpdate"),

  getTotalExpense: document.getElementById("getTotalExpense"),
  
  removeExpense: document.getElementById("removeExpense")
};


//==========================================================================================================================
// Array Function Constructor

function Expense(
  expenseid,
  description,
  category,
  amount,
  date,
  modeOfPayment
) {
  this.expenseid = expenseid;
  this.description = description;
  this.category = category;
  this.amount = amount;
  this.date = date;
  this.modeOfPayment = modeOfPayment;
}

export {elements,Expense}