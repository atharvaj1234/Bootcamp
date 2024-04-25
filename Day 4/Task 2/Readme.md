# Object Structure Demonstration

## Overview

This repository showcases a JavaScript function designed to provide insights into the structure of an object. By iterating through the properties of the object and logging their keys along with their corresponding data types, this function offers a clear understanding of complex object compositions, including nested structures.

## Usage

To utilize the function effectively, adhere to the following steps:

1. **Function Inclusion**: Copy the provided `objectDetails` function into your JavaScript codebase.

2. **Input Object**: Pass the object of interest, whose structure you wish to analyze, as an argument to the `objectDetails` function.

3. **Execution**: Run your JavaScript code. The function will log the structure of the object to the console.

Example:
```javascript
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

console.log("const expenseStructure =");
objectDetails(expense);
```

This will output the structure of the `expense` object to the console.

## Function Explanation

The `objectDetails` function operates by accepting an object as input and recursively traversing through its properties. For each property encountered, it logs the key along with its data type to the console. If a property's value is another object, the function recursively calls itself to log the structure of the nested object.

