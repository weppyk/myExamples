const arr = [1, 2, 3, 4];
// const first = arr[0];
// const second = arr[1];
const [first, second, ...rest] = arr;

const person = {
    name: "John",
    website: "algoexpert.io",
    age: 30,
    //company: "Paradigma",
    getDetails() {
        return this.name + " " + this.website;
    },
};

const { name: firstName, website, company ='Algoexpert',...restPerson } = person;
console.log(firstName, website,company);
// console.log(restPerson);

function printName(person) {
    console.log(person.name);
}
printName(person);

function printName2({name}) {
    console.log(name);
}
printName2(person);
// console.log(first,rest);

// const doubled = arr.map(double);
// function double(num) {
//   return num * 2;
// };

// const doubled = arr.map(function double(num) {
//     return num * 2;
// });

// const doubled = arr.map((num) => {
//     return num * 2;
// });

// const doubled = arr.map((num) => num * 2);

// const doubled = arr.map(num => num * 2);

// const double = num => num * 2;
// const doubled = arr.map(double);
// console.log(doubled);


// const concat = (a, b) => String(a) + String(b);
// const concated = arr.reduce(concat);
// console.log(concated);

// function add(x, y) {
//     console.log( x + y);
// }
// console.log(arr);
// add(...arr);

// const arr2 = [5, 6, 7, 8, 9];
// const combined = [0,...arr, 4.5, ...arr2];
// console.log(combined);

// function logParams(x, ...rest) {
//     console.log(x, rest);
// }
// logParams(1, 2, 3, 4, 5);
// const name = undefined;
//const name = '';
// const nameOfficial = "John";
// const defaultName = name ?? "Aldo";
// console.log(defaultName);
// console.log('Hello ' + nameOfficial);
// console.log(`Hello ${nameOfficial} ${1+2}`); // template literals




/* Undefinied check by question mark */
const person2 = {
    /* uncomeent to see the difference */
    // company: {
    //     website: "algoexpert.io",
    // },
};
// console.log(person2.company.website); // error if company is undefined
console.log(person2?.company?.website ?? "Foo");



/* Check if a property exists in an object */
 let notExist = undefined; //"Aldo"
// let notExist = null; // "Aldo"
// let notExist = ""; // ""
// let notExist = 0; // 0
// let notExist = false; // false
// let notExist = NaN; // NaN
// if not defined, then Error
let exist = notExist ?? "Aldo";
console.log(exist);

/* Different ways to call a function */
// const shouldRunCode = true;
// function runCode() {
//     console.log("Code is running");
// }
// if(shouldRunCode) runCode(); //better to use this
// shouldRunCode && runCode(); // same as above, but harder to read
