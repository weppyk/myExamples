'use strict';

/* arrow function does not have its own this binding, it uses this from the parent scope *
const logThisArrow = () =>{
    console.log(this);
}
button.addEventListener('click', logThisArrow);*/

/* set button listener *
const button = document.querySelector('button');
button.addEventListener('click', logThis);
console.log(this); 
// window object*/

// standard function has its own this binding
// function logThis() {
//     console.log(this);
// }
function logThis(x,y) {
    console.log(this);
    console.log(x,y);
}
//logThis();
//window object or undefined in strict mode

/* Object declaration *
const obj = {
    num: 10,
    logThis
}

/* declaration object with logThis method bound to obj */
const obj = {
    num: 10,
}
//const boundLogThis = logThis.bind(obj);
//boundLogThis(10,20);
//const boundLogThis = logThis.bind(obj, 10, 20);
//boundLogThis();
//If you need just one time immediately
logThis.call(obj, 10, 20);
logThis.apply(obj, [10, 20]);
//logThis.call(123, 10, 20);

//obj.logThis();
//obj object*/

/****** array itteration *************
[1,2,3].forEach(function(num){
    console.log(this); //window object or undefined in strict mode
    console.log(num);
});
[1,2,3].forEach((num) =>{ //arrow function does not have its own this context, it uses this from the parent scope
    console.log(this);
    console.log(num);
});
[1,2,3].forEach(function(num){
    console.log(this);
    console.log(num);
}, {num: 10});
***************************/


class Person {
    constructor(name){
        console.log(this);
        this.name = name;
        console.log(this);
    }
    speak(){
        console.log('Hello, I am ' + this.name);
    }
}

const nathanael = new Person('Nathanael');
const clement = new Person('Clement');
nathanael.speak();
clement.speak();
