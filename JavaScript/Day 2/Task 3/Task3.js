// Function to add any number of integers (ES6)
const additionES5 = function () {
    let sum = 0;
    for(value in arguments){
        sum += arguments[value];
    }
    return sum;
}

console.log(addition(12,12));
console.log(addition(6,12,6,12));


// Function to add any number of integers (ES6)
const additionES6 = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(additionES6(1, 2, 3));
console.log(additionES6(5, 10, 15, 20));
