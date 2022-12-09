/** CLASES */

/* Prototype */
const person = {
    isHuman: true
};

/* 1. way - Create child object - Best solution for most*/
 const child = Object.create(person);
/* old way - deprecated 
const child = {};
child.__proto__ = person; */
child.maxAge = 18;

/* 2. another way - 2. best solution */
const child2 = Object.assign(Object.create(person), {
    maxAge: 18
});
console.log(child2);

/* 3. another way */
const child3 = {
    maxAge: 18
};

// ES6 method to set prototype of object 
// Browser not optimized yet, in loop could very slow down
// usually used if create object and never changing again
Object.setPrototypeOf(child3, person); 
console.log(child3);


/* 4. another way - deprecated - older way*/
const child4 = {
    maxAge: 18,
    __proto__: person
}
console.log(child4);

/* 5. another way  - too complicated, lot of code*/
const child5 = Object.create(person, {
    maxAge: {
        value: 18,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(child5);


const john = Object.create(child);
john.name = 'John';
john.maxAge = 18;
console.log(john.maxAge);

console.log(person);
console.log(john.__proto__.__proto__); // older and faster way to get prototype
console.log(Object.getPrototypeOf(john)); // recommended way to get prototype


/****** Prototype of object, array and string *************
const funcProto = Object.getPrototypeOf(() => {});
const arrayProto = Object.getPrototypeOf([]);
const stringProto = Object.getPrototypeOf('');
console.log(Object.getOwnPropertyNames(funcProto));
console.log(Object.getOwnPropertyNames(arrayProto));
console.log(Object.getOwnPropertyNames(stringProto));
/******************************************************/

/**************** function constructor **************************
function Person(name){
    console.log('here');
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    isHuman: true,
    sayHello(){
        console.log('Hello ' + this.name);
    }
}
//Person.prototype.test = 'test';
Person.prototype.speak = function(){
    console.log('Hello, I am ' + this.name);
    console.log(this.isHuman);
};

const conner = new Person('Conner');
const clemment = new Person('Clemment');
//const clemment = new conner.constructor('Clemment'); //same as above

conner.__proto__.test = 'test';

// console.log(conner);
// console.log(clemment);
// console.log(conner.test);
// console.log(Object.getPrototypeOf(conner)===Object.getPrototypeOf(clemment));

// console.log(conner instanceof Object);
// console.log(conner instanceof Person);
// console.log(clemment instanceof Person);
// Object.setPrototypeOf(conner, Array.prototype);

// conner.speak();
// clemment.speak();
// conner.sayHello();
// console.log(conner.__proto__);
// console.log(Object.getPrototypeOf(conner));

/***********************************************************************/

/* *********** Polyfill - can use in older browser **********************
// if (Array.prototype.myPush === undefined)
// Array.prototype.myPush = function(value){
if (Array.prototype.push === undefined) {
    Array.prototype.push = function(value){
        this[this.length] = value;
    }
}
const arr = [1,2,3];
//arr.myPush(4);
arr.push(4);
console.log(arr);
/**********************************************************************/

/************ Modern class syntax, Classes are syntactic sugar!!! *******************
class Person {
    // static isHuman = true;
    constructor(name){
        this.name = name;
    }
    // static greet(){
    //     console.log('Hello');
    // }
    speak(){
        console.log('Hello, I am ' + this.name);
    }
    // get getName(){
    //     return this.name;
    // }
    // set setName(name) {
    //     this.name = name;
    // }
}
// const conner = new Person('Conner');
// const clement = new Person('Clement');
// conner.setName = 'Conner2';
// conner.speak();
// clement.speak();
// clement.isHuman = false;
// console.log(Person.isHuman);
// console.log(Person.greet());
// console.log(conner.isHuman);
// console.log(clement.isHuman);
/********************************************** */

/* ********** Inheritance *************** */
class Person {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log('Hello, I am ' + this.name);
    }
}
// child class
class Programmer extends Person {
    #language //private field
    constructor(name, language){
        super(name);
        this.#language = language;
    }
    code(){
        console.log('I am coding in ' + this.#language);
    }
}

const peter = new Programmer('Peter', 'JavaScript');
peter.speak();
peter.code();
console.log(peter instanceof Person);
console.log(Person instanceof Function);
console.log(peter.language); // undefined - language is private
/********************************************** */


/* copilot suggests */
const copy = Object.assign({}, person, {maxAge: 18});
