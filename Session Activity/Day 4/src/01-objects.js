// const expense = {
//     id: "",
//     description: "Reason of Expense",
//     category: "",
//     amount: 10,
//     date: "25/04/2024",
//     paymentMode: "",
// };

const User = {};

function createExpenseObject(id,description,cat,amt,date,modeOfPayment){
    let tempExpense= {
        id: id,
        description:description, 
        category:{abc:121, fea:313},
        amount: amt,
        date: date,
        paymentMode: modeOfPayment
    };
    return tempExpense;
}

//Function Constructor
function Expense(
    expenseid,
    description,
    category,
    amount,
    date,
    modeOfPayment
    ){
        this.expenseid=expenseid;
        this.description=description;
        this.category= category;
        this.amount=amount;
        this.date=date;
        this.modeOfPayment= modeOfPayment;
    
        return this;
    }
    
const e1 = new Expense();
e1.deeaa = "something";
console.log(e1);

const e2 = {...e1} //copying contents of e1 to e2
    


let eo1=createExpenseObject(1,"Train Ticket","Travel",15,"25/04/2014","Cash");
e02 = {...eo1};
e02.dadae="890"

// const generateUniqueId = (config = {}) => {
//     // destructing
//     const { prefix } = config;
//     if (prefix) {
//       return prefix + "-" + Math.random().toString(36).substring(2);
//     }
//     return Math.random().toString(36).substring(2);
//   };