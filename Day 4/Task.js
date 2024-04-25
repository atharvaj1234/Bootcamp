// write a function that takes a input object(any level of nesting) and creates copy of same
// Hint : Recursion
// declaration
//let variable = {
//     key : value
// };

const expense = {
    id: "",
    description: "Reason of Expense",
    category: "",
    address: {
        pincode: 400012,
        city: "Mumbai",
        street: "xyz street",
        flat: "abc 12",
    },
    amount: 10,
    date: "25/04/2024",
    paymentMode: "",
};

function copyObject(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }
    const copy = {};
    for (let key in obj) {
        copy[key] = copyObject(obj[key]);
    }
    return copy;
}

const copyOfExpense = copyObject(expense);