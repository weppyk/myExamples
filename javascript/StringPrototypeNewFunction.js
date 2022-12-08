// make chaining methods for string
String.prototype.makeUpperCase = function() {
    return this.toUpperCase();
};
String.prototype.makeLowerCase = function() {
    return this.toLowerCase();
};
String.prototype.putMinusBetween = function() {
    return this.split('').join('-');
};
String.prototype.sayHello = function () {
    return 'Hello ' + this + ' !!!';
};


const firstName = "radek";

// use this chaining method
const sayHelloCorrect = firstName.putMinusBetween().makeUpperCase().sayHello();
console.log(sayHelloCorrect);


