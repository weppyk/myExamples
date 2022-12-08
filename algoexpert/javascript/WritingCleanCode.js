/** WRITING CLEAN CODE */

/*********** Use modern syntax ***************
 * Arrow function, destructuring, template literals, etc/
 * 
/* USE THIS */
people.forEach(({name,age}) => {
    console.log(`${name} is ${age} years old.`);
});
/* INSTEAD OF THIS */
/*people.forEach(function(person) {
    console.log(person.name + ' is ' + person.age + ' years old.');
});*/

/********** Avoid Callback Nesting ***************
 * use promises with async and await when possible
 */
/* USE THIS */
try {
    const fooValue = await foo();
    const barValue = await bar(fooValue);
    doSomething(barValue);
} catch (error) {
    doErrorStuff(error);
}
/* INSTEAD OF THIS */
/*foo((error, fooValue) => {
    if (error != null) {
        return doErrorStuff(error);
    }
    bar(fooValue, (error, barValue) => {
        if (error != null) {
            return doErrorStuff(error);
        }
        doSomething(barValue);
    });
});*/

/********** Don't Overuse This ***************
 * oftentimes simple parameters are better 
 * You should not bind this to a function unless make sense
 * USE THIS */
function getName({name}) {
    return name;
}
getName(person);
/* INSTEAD OF THIS */
/*function getName() {
    return this.name;
}
getName.call(person);*/


/******* Use functional programming *************
 * Pure functions for consistent, maintainable code
 * Function chaining for readability
 * USE THIS */
const arr = [1, 2, 3, 4];
const newArr = arr
    .filter(val => val > 2)
    .map(val => val * 2)
    .reverse();
/* INSTEAD OF THIS */
/*const arr = [1, 2, 3, 4];
const newArr = [];
for (let i = arr.length -1; i >= 0 ; i--) {
    if (arr[i] > 2) {
        newArr.push(arr[i] * 2);
    }
}*/





/******** Next copilot suggest ************
 * use const and let instead of var
 * use async and await instead of promises
 * use spread operator instead of .apply()
 * use rest operator instead of arguments
 * use default parameters instead of if statements
 * use object shorthand instead of object.key = value
 * use object destructuring instead of object.key
 * use array destructuring instead of array[index]
 */