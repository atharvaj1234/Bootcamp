# REST API using Array

## Expense Management System Functions

This is a simple JavaScript expense management system that generates random expenses using Faker.js and provides functionality to manipulate and analyze expenses.

## Setup

To use this expense management system, follow these steps:

1. Import the Faker.js library to generate realistic fake data for expenses. 

`javascript
import { faker } from "https://esm.sh/@faker-js/faker";
`

2. Implement helper functions to generate random expenses, find expenses by ID, filter expenses by category, update expenses, delete expenses, and calculate total expenses within a date range.

# Usage
Here's how you can use the expense management system:

Generate an array of random expenses:
```javascript 
const arrayOfRandomExpense = generateRandomArrayOfExpenses(5);
```
Perform operations on expenses:
Find an expense by ID:
``` javascript
const expense = findExpenseById("your-expense-id");
```
Filter expenses by category and calculate total expense:
``` javascript

const categoryExpenses = filterByCategory("Food");
```
Update an expense by ID:
``` javascript

updateExpenseById("your-expense-id", { description: "New Description" });
```
Delete an expense by ID:
``` javascript
deleteExpenseById("your-expense-id");
```
Calculate total expenses within a date range:
``` javascript
const totalExpenses = getTotalExpensesInRange(startDate, endDate);
```
Example
Here's a sample usage of the expense management system:

``` javascript
// Generate random expenses
const arrayOfRandomExpense = generateRandomArrayOfExpenses(5);

// Find an expense by ID
console.log(findExpenseById(arrayOfRandomExpense[2].expenseid));

// Filter expenses by category
console.log(filterByCategory("Food"));

// Update an expense
updateExpenseById(arrayOfRandomExpense[1].expenseid, { description: "New Description" });

// Delete an expense
deleteExpenseById(arrayOfRandomExpense[3].expenseid);

// Calculate total expenses within a date range
console.log(getTotalExpensesInRange(startDate, endDate));
```

# Credit
- Edba Academy