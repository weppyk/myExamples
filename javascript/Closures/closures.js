/**
 * Closures
 * Use debugger function and devtools to debug scope
 */
//var myName = 'Radek'; // global variable in global scope
const myName = 'Radek'; // local variable in local scope
debugger;

function printName() {
    console.log(myName);
}

//global variable i in global scope
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}


// local variable i in local scope
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}


printName();