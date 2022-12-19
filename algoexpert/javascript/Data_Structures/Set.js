const set = new Set();
set.add("a");
set.add("b");
set.add(10);
set.add({});
console.log(set);
console.log(set.has("a"));
set.delete("a");
console.log(set);
set.clear();
console.log(set);

// Set with constructor
const set2 = new Set(["a", "b", 10, {}]);

// iterate over set
for (const value of set2) {
    console.log(value);
}

// or
set2.forEach(value => {
    console.log(value);
})

// or
const iter = set2.values();
console.log(iter.next().value);
console.log(iter.next().value);

const keys = set2.keys();
console.log(keys.next().value);
console.log(keys.next().value);

const values = set2.entries();
console.log(values.next().value);
console.log(values.next().value);


/* Sample removing duplicates from array */
const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const setWithoutDuplicate = new Set(arr);
console.log(Array.from(setWithoutDuplicate));
/*************************************** */

/* WeakSet */
const weakSet = new WeakSet();
const obj1 = {};
const obj2 = {};
weakSet.add(obj1);
weakSet.add(obj2);
console.log(weakSet);
console.log(weakSet.has(obj2));

const weakSet2 = new WeakSet();

//(function() {
    const obj3 = {};
    weakSet2.add(obj3);
//})

console.log(weakSet2.has(obj3));


