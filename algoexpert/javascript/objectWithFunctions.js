const website = {
    name: "AlgoExpert",
    rating: 5,
    description: " is the best place to learn how to code algorithms.",
    sayHello: () => {
        console.log("Hello");
    },
    sayHello2() {
        console.log("Hello2 from " + this.name);
    },
    // getter function
    get getDescription() {
        return 'description: Use '+this.name+this.description;
    },
    // setter function
    set setDescription(newDescription) {
        this.description = newDescription;
    }
};

// website.sayHello();
// website.sayHello2();
// console.log(website.getDescription);
website.setDescription =" to enjoy code algorithms.";
// console.log(website.getDescription);

// ************ INHERITANCE ************
const obj = {
    foo: 'bar',
    hello:'world',
    [Symbol('id')]: 0,
    __proto__: website,
}

//console.log(obj);
//console.log(obj.name);
//console.log(obj.getDescription);


// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//Object.entries(obj).forEach(([key, value]) => {
//    console.log(`${key}: ${value}`);
//});

// show all properties of an object including inherited properties and methods, but excluding symbols
//for (key in obj) {
//    console.log(`${key}: ${obj[key]}`);
//}


//*********** copy Object ***********/
const myObj = {
    original: 123,
}
Object.assign(myObj, obj); //copy all properties from obj to myObj without __proto__ property
//console.log(myObj);

// Object.freeze(myObj); //make myObj immutable
// myObj.name = "AlgoExpert2"; //if strict mode is on, this will throw an error
// console.log(Object.isFrozen(myObj));
// console.log(myObj); //name property is not changed

// Object.seal(myObj); //make myObj immutable except for adding new properties
// myObj.name = "AlgoExpert2"; //if strict mode is on, this will throw an error
// myObj.original = 456;
// console.log(Object.isSealed(myObj));
// console.log(myObj); 

//console.log(website.toString());
/*website.toString = () => {
    return "Hello world";
}*/
// show all properties of an object including inherited properties and methods, but excluding symbols
console.log(website.valueOf());

//****** */
const frontendExpert = Object.create(website);
frontendExpert.name = "Frontend Expert";
// console.log(frontendExpert.getDescription);
