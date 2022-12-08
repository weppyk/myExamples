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

/* 3. another way */
const child3 = {
    maxAge: 18
};
// ES6 method to set prototype of object 
// Browser not optimized yet, in loop could very slow down
// usually used if create object and never changing again
Object.setPrototypeOf(child3, person); 

/* 4. another way - deprecated - older way*/
const child4 = {
    maxAge: 18,
    __proto__: person
}

/* 5. another way  - too complicated, lot of code*/
const child5 = Object.create(person, {
    maxAge: {
        value: 18,
        writable: true,
        enumerable: true,
        configurable: true
    }
});

const john = Object.create(child);
john.name = 'John';
john.maxAge = 18;
console.log(john.maxAge);

console.log(person);
console.log(child2);
console.log(child3);
console.log(child4);
console.log(child5);
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

/* function constructor */
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

const conner = new Person('Conner');
const clemment = new Person('Clemment');
//const clemment = new conner.constructor('Clemment'); //same as above

conner.__proto__.test = 'test';

console.log(conner);
console.log(clemment);
console.log(conner.test);
console.log(Object.getPrototypeOf(conner)===Object.getPrototypeOf(clemment));


// conner.sayHello();
// console.log(conner.__proto__);
// console.log(Object.getPrototypeOf(conner));






/* copilot suggests */
const copy = Object.assign({}, person, {maxAge: 18});
