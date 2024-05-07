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
//===============================================================================================================================================
// Render Total and Expenses to Screen Logic

function renderTotal(totalExpense) {
  const totalExpenseDiv = document.createElement("div");
  totalExpenseDiv.classList.add("totalexpense");
  totalExpenseDiv.innerHTML = `Total Expense: ${totalExpense}`;
  expenseHolder.appendChild(totalExpenseDiv);
}

function renderExpenses(expenses) {
  expenses.forEach((expense) => {
    const expenseDiv = document.createElement("div");
    expenseDiv.classList.add("expense");

    Object.entries(expense).forEach(([key, value]) => {
      const textDiv = document.createElement("div");
      textDiv.classList.add("expensetext");
      textDiv.textContent = `${key}: ${value}`;
      expenseDiv.appendChild(textDiv);
    });

    expenseHolder.appendChild(expenseDiv);
  });
}

//=================================================================================================================================================
// Buttons Logic

elements.addExpenseBtn.addEventListener("click", () => {
  const description = elements.overlayForEntry.querySelector("#description").value.trim();
  const category = elements.overlayForEntry.querySelector("#category").value.trim();
  const amount = parseFloat(elements.overlayForEntry.querySelector("#amount").value.trim());
  const date = elements.overlayForEntry.querySelector("#date").value.trim();
  const paymentMode = elements.overlayForEntry.querySelector("#paymentMode").value.trim();

  // Validate input
  if (!description || !category || isNaN(amount) || amount <= 0 || !date || !paymentMode) {
    alert("Please fill in all fields with valid data.");
    return;
  }

  // Create and add expense
  const newExpense = new Expense(
    generateUniqueId({ prefix: "expense" }),
    description,
    category,
    amount,
    date,
    paymentMode
  );
  arrayOfRandomExpense.push(newExpense);
  expenseHolder.innerHTML = ""; // Clear existing expense
  renderExpenses(arrayOfRandomExpense);

  // Hide overlay
  elements.overlayForEntry.style.display = "none";
});

elements.generateRandom.addEventListener("click",()=>{
  const fakerDate = faker.date.soon({ refDate: "2024-05-01T00:00:00.000Z" });
  const formattedDate = `${fakerDate.getFullYear()}-${(fakerDate.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${fakerDate.getDate().toString().padStart(2, "0")}`;
  
  document.getElementById("description").value = faker.lorem.words();
  document.getElementById("category").value = faker.helpers.arrayElement([
    "Food",
    "Transport",
    "Entertainment",
    "Shopping",
  ]);
  document.getElementById("amount").value = parseInt(faker.finance.amount());
  // Set the value of the date input
  document.getElementById("date").value = formattedDate;
  document.getElementById("paymentMode").value = faker.helpers.arrayElement(['Cash', 'Credit Card', 'Debit Card', 'Online']);
})

elements.addEntrybtn.addEventListener("click", () => {
  elements.overlayForEntry.style.display = "flex";
  elements.overlayForEntry.querySelectorAll("input, select").forEach((input) => {
    input.value = "";
  });
});

elements.cancelEntrybtn.addEventListener("click", () => {
  elements.overlayForEntry.style.display = "none";
});

elements.filterByCategorybtn.addEventListener("click", () => {
  elements.overlayForCategory.style.display = "flex";
  elements.overlayForCategory.querySelector("#category1").value = "";
});

elements.FindExpenseByCategorybtn.addEventListener("click", () => {
  const category = elements.overlayForCategory.querySelector("#category1").value;
  if (!category) {
    alert("Please fill in the field with valid data.");
    return;
  }
  const expenseHolder = document.getElementById("expenseHolder");
  const filteredArrayOfExpense = filterByCategory(category);
  expenseHolder.innerHTML = ""; // Clear existing expenses
  const totalExpense = filteredArrayOfExpense.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  );
  renderTotal(totalExpense);
  renderExpenses(filteredArrayOfExpense);
  elements.overlayForCategory.style.display = "none";
});

elements.cancelFindByCategorybtn.addEventListener("click", () => {
  elements.overlayForCategory.style.display = "none";
});

elements.filterByDatebtn.addEventListener("click", () => {
  elements.overlayForDate.style.display = "flex";
  elements.overlayForDate.querySelector("#dateStart").value = "";
  elements.overlayForDate.querySelector("#dateEnd").value = "";
});

elements.FilterExpenseByDatebtn.addEventListener("click", () => {
  const startDate = new Date(elements.overlayForDate.querySelector("#dateStart").value);
  const endDate = new Date(elements.overlayForDate.querySelector("#dateEnd").value);
  if (!startDate || !endDate) {
    alert("Please fill in all fields with valid data.");
    return;
  }
  const expenseHolder = document.getElementById("expenseHolder");
  const FilteredArrayByDate = getTotalExpensesInRange(startDate, endDate);
  expenseHolder.innerHTML = ""; // Clear existing expense
  const totalExpense = FilteredArrayByDate.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  );
  renderTotal(totalExpense);
  renderExpenses(FilteredArrayByDate);
  elements.overlayForDate.style.display = "none";
});

elements.cancelFilterByDatebtn.addEventListener("click", () => {
  elements.overlayForDate.style.display = "none";
});

elements.getTotalExpense.addEventListener("click", () => {
  const totalExpense = arrayOfRandomExpense.reduce(
    (total, currentObj) => total + currentObj.amount,
    0
  );
  expenseHolder.innerHTML = "";
  renderTotal(totalExpense);
  renderExpenses(arrayOfRandomExpense);
});

elements.removeExpense.addEventListener("click", () => {
  const expenseid = prompt("Enter Expense ID to remove:");
  deleteExpenseById(expenseid);
  expenseHolder.innerHTML = "";
  renderExpenses(arrayOfRandomExpense);
});

elements.updateExpenseBtn.addEventListener("click", () => {
  elements.overlayForUpdate.style.display = "flex";
  elements.overlayForUpdate.querySelectorAll("input, select").forEach((input) => {
    input.value = "";
  });
});

elements.updateExpenseAttributesBtn.addEventListener("click", () => {
  const inputFields = elements.overlayForUpdate.querySelectorAll("input, select");
  const updatedExpenseAttributes = {};
  inputFields.forEach((field) => {
    if (field.value.trim() && field.value.trim() !== null && field.value.trim() !== undefined) {
      updatedExpenseAttributes[field.name] = field.value.trim();
    }
  });
  updateExpenseById(updatedExpenseAttributes.expenseid, updatedExpenseAttributes);
  expenseHolder.innerHTML = "";
  renderExpenses(arrayOfRandomExpense);
  elements.overlayForUpdate.style.display = "none";
});

elements.cancelUpdateBtn.addEventListener("click", () => {
  elements.overlayForUpdate.style.display = "none";
});
