/**
 * Closures
 * Use debugger function and devtools to debug scope
 */
//var myName = 'Radek'; // global variable in global scope
const myName = 'Radek'; // local variable in local scope
//debugger;

function printName() {
    console.log(myName);
}
printName();

/***** global variable i in global scope ******/
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// logs 5 five times because i is in global scope and is not reset to 0 after each iteration
// and the setTimeout function is called after the loop is finished



/***** global variable i in global scope without timeout *****/
for (var i = 0; i < 5; i++) {
    console.log(i);
}
// logs 0, 1, 2, 3, 4 - although i is in global scope, it is reset to 0 after each iteration because there is no setTimeout function



/***** local variable i in local scope *****/
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
// logs 0, 1, 2, 3, 4 because i is in local scope and is reset to 0 after each iteration




// outerVariable goes from parent scope to child scope, innerVariable is only in its scope
function outerFunction(outerVariable) {
    const outer2 = 'Outer2';
    return function innerFunction(innerVariable) {
        console.log('Outer variable:', outerVariable);
        console.log('Inner variable:', innerVariable);
        console.log('Outer2 variable:', outer2);
    }
}
const newFunction = outerFunction('Outside!');
newFunction('Inside!');


// usable closure example
function getUrlData(url) {
    fetch(url).then(() => {
        console.log('Url:',url);
    });
}
getUrlData('https://dummyjson.com/products/1');


