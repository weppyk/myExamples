let str="Hello World";
console.log(str.length);
console.log(str.padStart(20,"*").padEnd(30,"*"));
let spacedStr="        Hello World      ";
console.log(spacedStr.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.split(" "));
console.log(str.split(" ").join(""));
console.log(str.split(" ").join("-"));
console.log(str.split(" ").join("-").toLowerCase());

// object
const person = {
    name: "John",
    age: 30,
    city: "New York",
    course: "Frontend Engineer",
}

console.log(person);
person.name="Radek";
console.log(JSON.stringify(person));
console.log(typeof JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));

// MAP Object - has get and set methods
const map = new Map();
map.set("name", "John");
map.set("age", 30);
console.log(map.get("name"));
console.log(map.size);


// SET Object - has add and delete methods
const set = new Set();
set.add("John");
set.add("Radek");
set.delete("John");
console.log(set.has("John"));
console.log(set.size);
console.log(set);

//array
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr.push(6));
console.log(arr);

//functions
function add(a = 5, b = 10) {
    return a + b;
}
console.log(add(1, 2));

function callfunc(func,a,b) {
    console.log(func(a,b));
}

callfunc(add, 10, 20);


// for loop
for (let i = 0; i < 10; i++) {
    if (i == 2) {
        continue;
    };
    console.log(i);
    if (i == 5) {
        break;
    };
}

// while loop
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);   


// for in loop
for (const value of [1, 2, 3, 4, 5]) {
    console.log(value);
}

// for of loop
const obj = {
    name: "John",
    age: 30,
    course: "Frontend Engineer",
}
for (const key in obj) {
    console.log(key, obj[key]);
}

//forEach loop
const arr1 = [1, 2, 3, 4, 5];
arr1.forEach(function (value, index, array) {
    console.log(value, index, array);
});

//switch
const color = "red";
switch (color) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("color is blue");
        break;
    default:
        console.log("color is not red or blue");
}

//ternary operator
const myNum = 10;

console.log(myNum > 5 ? "myNum is greater than 5" : "myNum is less than 5");

// Error handling
try {
    throw new Error("Oh no, an error!");
} catch (error) {
    console.log(error);
} finally {
    console.log("Finally");
}


console.log("value");
console.error("error");
console.debug("debug");
console.table({ name: "John", age: 30 });