import { faker } from 'https://esm.sh/@faker-js/faker';

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

const button = document.getElementById('addEntry');

button.addEventListener('click', () => {
  
  const br = document.createElement('br');
  const expense = new Expense(generateUniqueId({prefix:"expense"}));

  let entires = Object.entries(expense);
  entires.forEach(([key, value]) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = key+" : "+value;
    document.body.appendChild(newDiv);
  })
  document.body.appendChild(br);
});