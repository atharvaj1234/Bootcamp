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

//----------------------------------------------------------

function copyObjectMethod1(obj) {
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

//---------------------------------------------------------


function copyObjectMethod2(src, dest) {
    for (let key in src) {
        if (typeof src[key] == 'object') {
            dest[key] = {}
            copyObjectMethod2(src[key], dest[key]);
            break;
        }
        target[key] = src[key];
    }
}

const copy = {};
copyObjectMethod2(expense, copy);