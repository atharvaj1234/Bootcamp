//Homework
// writing functions in javascript
// difference between ES5 and ES6 functions
// write aprogram to add any number of integers (both ES5 and ES6) - arguments.length


function add2numbers(n1,n2){
    const sum = n1 + n2;
    return sum;
}

//functions - ES6

const additon = function () {
    let sum = 0;
    for(value in arguments){
        sum += arguments[value];
    }
    return sum;
}

//arrow functions - ES6

const addition = (n1,n2) => {
    return n1+n2;
}


//destructing objects ES6
const student={
    name: "Atharva",
    email: "atharva@email.com",
    phone: "9876543210",
}

