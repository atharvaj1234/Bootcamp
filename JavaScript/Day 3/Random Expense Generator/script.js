import {faker} from 'https://esm.sh/@faker-js/faker';

function Expense(expenseid) {
    this.expenseid = expenseid;
    this.description = faker.lorem.words();
    this.category = faker.helpers.arrayElement(['Food', 'Transport', 'Entertainment', 'Shopping']);
    this.amount = faker.finance.amount();
    this.date = faker.date.soon({ refDate: '2024-04-04T00:00:00.000Z' });
    this.modeOfPayment = faker.helpers.arrayElement(['Cash', 'Credit Card', 'Debit Card', 'Online']);
}

const generateUniqueId = (config = {}) => {
  // destructing
  const { prefix } = config;
  if (prefix) {
    return prefix + "-" + Math.random().toString(36).substring(2);
  }
  return Math.random().toString(36).substring(2);
};

function generateRandomArrayOfExpenses(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(new Expense(generateUniqueId()));
    }
    return array;
}

const arrayOfRandomExpense = generateRandomArrayOfExpenses(5);
console.log(arrayOfRandomExpense);
