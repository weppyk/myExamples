function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 4, 10));

function subtract(a, b, c) {
    return a - b - c;
}

/** Currying *
function curriedSum(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(curriedSum(1)(4)(10));
/******************************** */

/** Currying with a function*
function curry(func) {
    return function(a) {
        return function (b) {
            return function (c) {
                return func(a, b, c);
            }
        }
    }
}
/******************************************************* */

/***** Currying with a arrow function - same output as above *****/
function curry(func) {
    return (a) => (b) => (c) => func(a, b, c);
}



const curriedSum = curry(sum);
const curriedSubtract = curry(subtract);

// function addFour(b, c) {
//     return 4 + b + c;
// }
// |---> Get simpliefied to:
const addFour = curriedSum(4);
//console.log(addFour(10)(10));

// console.log(curriedSum(1)(4)(10));
// console.log(curriedSubtract(1)(4)(10));



/** Practical using */
// function converter(amount) {
//     return function (rate) {
//         return amount * rate;
//     }
// }
function converter(rate, amount) {
    return  amount * rate;
}
function curriedConverter(func) {
    return (amount) => (rate) => func(rate, amount);
}

const DOLLAR_TO_CZECH_RATE = 25.6;
const DOLLAR_TO_EUR_RATE = 0.85;
const dolarToCzech = curriedConverter(converter)(DOLLAR_TO_CZECH_RATE);
const dolarToEur = curriedConverter(converter)(DOLLAR_TO_EUR_RATE);
console.log(dolarToCzech(1));
console.log(dolarToEur(1));


function adding(a, b) {
    return a + b;
 }
 function curry(func) {
    return (a) => (b) => func(a, b);
 }
 const curriedSuma = curry(adding);
 const addFoura = curriedSuma(4);

console.log(addFoura(10));
 