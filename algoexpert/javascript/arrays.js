/*const arr = new Array();

arr.length = 10;
arr.fill(1);*/
const arr = [1, 2, 3, 4, 5,3];
//arr.length = 1;
console.log(arr.length);
console.log(arr[3]);
console.log(arr.includes(3));
console.log('indexOf(3): ',arr.indexOf(3));
console.log('lastIndexOf(3): ',arr.lastIndexOf(3));
console.log('arr.push(6,7,8)', arr.push(6,7,8));
console.log(arr);

console.log('arr.unshift(0)', arr.unshift(0)); //add to the beginning - avoid it, when algorithm is on, its iterating through all elements again
console.log(arr);

console.log('arr.shift()',arr.shift()); //delete first element
console.log(arr);

console.log('arr.pop()',arr.pop()); //delete last element
console.log(arr);

console.log(typeof arr); //returns object - array is object
console.log(Array.isArray(arr)); //returns true - use this to check if its array
console.log(arr instanceof Array); //returns true
arr.splice(2,1, 'a', 'b', 'c'); //delete 1 element from index 2 and add 3 elements
console.log(arr);
console.log(arr.slice(2,5)); //returns new array from index 2 to 5

const reverse = arr.reverse();
console.log(reverse);

reverse.forEach((value) => console.log(value));
reverse.forEach((value, index) => console.log(index, value));
reverse.forEach((value, index, array) => console.log(index, value, array));

//.forEach() doesnt return anything
reverse.forEach(function(value, index) { //this works only when you dont use arrow function
    console.log(index, value, this);
}, {num: 10});

//.map() returns new array
const mappedArray = reverse.map(function(value, index) { //this works only when you dont use arrow function
    return index + value+ this.num;
}, {num: 10});
// console.log(mappedArray);

//.filter() - returns new array with elements that pass the test
const filteredArray = mappedArray.filter(function(value) { //this works only when you dont use arrow function
    return value > this.num;
}, {num: 18});
// console.log(filteredArray);

//.find() returns first element that matches the condition
const foundArray = mappedArray.find(function(value) { //this works only when you dont use arrow function
    return value > this.num;
}, {num: 18});
// console.log(foundArray);

//.foundIndex() - returns index of first element that matches the condition
const foundIndex = mappedArray.findIndex(function(value) { //this works only when you dont use arrow function
    return value > this.num;
}, {num: 18});
// console.log(foundIndex);

//.every() - returns true if all elements pass the test
const allPass = mappedArray.every(function(value) { //this works only when you dont use arrow function
    return typeof value === 'number' || typeof value === 'string';
});
// console.log(allPass);

//.some() - returns true if at least one element pass the test
const somePass = mappedArray.some(function(value) { 
    return typeof value === 'number';
});
// console.log(somePass);

//.reduce() - returns single value summing all elements
const reduced = mappedArray.reduce(function(accumulator, value) { 
    return accumulator + value;
}, 0);
console.log(mappedArray);
console.log(reduced);

//.reduceRight() - returns single value summing all elements from right to left
const reducedRight = mappedArray.reduceRight(function(accumulator, value) {
    return accumulator + value;
}, 0);
// console.log(mappedArray);
// console.log(reducedRight);

//.reduceRight() difference - subtracting
const newArray = [1,2,3,4,5];
const difference = newArray.reduceRight(function(accumulator, curValue) {
    console.log(curValue);
    return accumulator - curValue;
}, 0);
// console.log(newArray);
// console.log(difference);

//.reduce() difference - subtracting
const difference2 = newArray.reduce(function(accumulator, curValue) {
    console.log(curValue);
    return accumulator - curValue;
});
// console.log(newArray);
// console.log(difference2);

//.sort() - sorts array in place
const unsortedArray = [1, 3, 2, 5, 4];
// console.log(unsortedArray);
unsortedArray.sort();
// console.log(unsortedArray);
// sort in descending order
unsortedArray.sort(compareNumbers);
function compareNumbers(firstNumber, secondNumber) {
    if(firstNumber === 3) {
        return -1;
    }
    if(secondNumber === 3) {
        return 1;
    }
    return secondNumber - firstNumber;
}

// console.log(unsortedArray);


