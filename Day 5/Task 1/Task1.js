function printhelloworld(){
    console.log("Hello World");
}

function add2numbers(n1,n2){
    const sum = n1 + n2;
    return sum;
}

//functions - ES5

const additionES5 = function () {
    let sum = 0;
    for(value in arguments){
        sum += arguments[value];
    }
    return sum;
}

//arrow functions - ES6

const additionES6 = (n1,n2) => {
    return n1+n2;
}

printhelloworld(); //prints Hello World to the console
console.log(add2numbers());
console.log(additionES5);
console.log(additionES6);
