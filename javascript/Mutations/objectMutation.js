/**
 * Mutation object
 * by default, javascript objects are mutable - content can be changed
 */

const obj = {
    number: 10,
};

const obj1 = obj;
// obj1 === obj

obj.number++;

const obj2 = {
    number: 10,
};

console.log(obj);
console.log(obj1);