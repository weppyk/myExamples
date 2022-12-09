/** GENERATOR
 * 1. A generator is a function that can be paused and resumed
 * 2. It is a special type of function that does not run to completion when called
 * 3. It returns an iterator
 * 4. It can be paused and resumed
 * 5. use function* to create a generator
 * 6. use yield keyword to pause the function
 * 7. use next() to resume the function
 * 8. use return() to return a value
 * 9. use throw() to throw an error
 * 10. use for of loop to iterate over a generator
 * 11. use spread operator to convert a generator to an array
 * 12. use destructuring to get the values from a generator
 * 13. use for await of loop to iterate over a generator
 * 14. use yield* to delegate to another generator
 * 
 */

/********** Simple generator *****************
function* getNumbers() { // doesnt work with arrow function
    yield 1;
    yield 2;
    yield 3;
    return 4; 
}

const generator = getNumbers();
console.log(generator.next().value);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
/************************************************ */

/********** Generator with for of loop ******************
function* getNumbers(count) {
    for (let i = 0; i < count; i++) {
        yield i;
    }
    return count;
}

const generator = getNumbers(3);
// this does not show the return value
for (value of generator) {
    console.log(value);
}
/************************************************ */

/********** Generator return ******************
function* getNumbers(count) {
    const value = yield 0;
    yield value + 3;
}

const generator = getNumbers(3);
console.log(generator.next());
//console.log(generator.throw(new Error('This is an error')));
console.log(generator.return(10));
console.log(generator.next(10));
/************************************************ */

/********** Generator call another generator *******************/
function* generator1() {
    yield 1;
    yield 2;
}

function* generator2() {
    yield 3;
    yield 4;
}
function* getNumbers() {
    yield* generator1();
    yield 2.5;
    yield* generator2();
}

const generator = getNumbers();
for (value of generator) {
    console.log(value);
}
/************************************************ */

