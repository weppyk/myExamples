//import * as helpers from "./helpers.js";
// helpers.frontendExpert();
//import { algoExpert, frontendExpert} from "./helpers.js";
//import Person  from "./Person.js";

// frontendExpert();
//algoExpert();

// const conner = new Person("Conner");
// conner.sayHello();

console.log(this); // undefined in module
/********** Import only if need ******************/
const shouldSayFrontend = true;

if (shouldSayFrontend) {
    const { frontendExpert } = await import("./helpers.js");
    frontendExpert();
}
/*************************************************/