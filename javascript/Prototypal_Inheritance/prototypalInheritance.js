/**** function are objects in javascript ****
function bear() {

}
bear.type = 'grizzly';
console.log(bear); // is function
console.log(bear.type); // is also object
/ ****************************************** */

// class Bear
function Bear(type) {
    this.type = type;
}

Bear.prototype.growl = function() { // prototype adds method to all instances of Bear
    console.log(`The ${this.type} says grrr`);
};

function Grizzly() {
    Bear.call(this, 'grizzly');
}
Grizzly.prototype = Object.create(Bear.prototype);


//var grizzly = new Bear('grizzly');
var grizzly = new Grizzly();
var polar = new Bear('polar');

grizzly.growl = function() {
    console.log(`override`);
};
console.log(grizzly.growl(), polar.growl());
console.log(grizzly);