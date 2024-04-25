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

console.log("const expenseStructure =")
function copyObject(obj) {
    if (typeof obj !== 'object') {
        return typeof obj;
    }
    const copy = {};
    for (let key in obj) {
        copy[key] = copyObject(obj[key]);
    }
    return copy;
}

const copyOfExpense = copyObject(expense);
