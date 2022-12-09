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
console.log(curriedSum(1)(4)(10));
console.log(curriedSubtract(1)(4)(10));
