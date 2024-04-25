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
function objectDetails(src) {
    console.log("{")
    for (let key in src) {
        console.log(key + ":" + typeof src[key]);
        if(typeof src[key] == 'object')
        {
            objectDetails(src[key]);
        }
    }
    console.log("}");
}

objectDetails(expense);
