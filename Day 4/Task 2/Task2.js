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

function createStructure(obj) {
    if (typeof obj !== 'object') {
        return typeof obj;
    }
    const struct = {};
    for (let key in obj) {
        struct[key] = createStructure(obj[key]);
    }
    return struct;
}

const expenseStructure = createStructure(expense);
console.log(expenseStructure);