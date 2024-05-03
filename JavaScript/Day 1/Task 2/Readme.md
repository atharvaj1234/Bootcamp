# Object Structure Demo
This repository demonstrates a function that generates the structure of the provided object. In this case, it analyzes the structure of an expense object.

## Description
The `createStructure` function takes an object as input and recursively analyzes its structure, generating a structured representation of its keys and their types.

## Example
Consider the following example object representing an expense:

```
const expense = {
    id: 1234,
    description: "Reason of Expense",
    category: "",
    address: {
        pincode: 400012,
        city: "Mumbai",
        street: "xyz street",
        flat: "abc 12",
    },
    amount: 10,
    date: Date.now(),
    paymentMode: "",
};

const expenseStructure = createStructure(expense);
console.log(expenseStructure);

```
This will output the structure of the expense object.

## Function Explanation
The createStructure function analyzes the structure of the provided object recursively. Here's how it works:

 - If the input is not an object, it returns the type of the input.
 - If the input is an object, it iterates through each key:
 - For each key, it recursively calls createStructure to analyze its value.
 - It constructs and returns a structured object representing the keys and their types.
