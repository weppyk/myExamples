const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set(10,"ten");
map.set({},"object");


console.log(map.get(10));
console.log(map.has("a"));
console.log(map.size);

const obj = {};
map.set(obj,"sameObject");
console.log(map.has(obj));

console.log(map);

map.delete("a");
console.log(map);

/* iterate over map */
for ([key, value] of map) {
    console.log(key, value);
}
// or
map.forEach((value, key) => {
    console.log(key, value);
})
// is same as above


const iter = map.entries(); 
console.log(iter.next().value);
console.log(iter.next().value);


const keys = map.keys(); 
console.log(keys.next().value);
console.log(keys.next().value);

const values = map.values();
console.log(values.next().value);
console.log(values.next().value);



// Map with constructor
const map2 = new Map([
    ["a", 1],
    ["b", 2],
    [10,"ten"],
    [{}, "object"]
]);

