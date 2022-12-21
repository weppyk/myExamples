let pets = [
    {name: 'Rex', type: 'dog', age: 10},
    {name: 'Miau', type: 'cat', age: 2},
    {name: 'Polly', type: 'bird', age: 1},
    {name: 'Kitty', type: 'cat', age: 3},
    {name: 'Bobby', type: 'dog', age: 1},
]

/* Mutating in this context means changing or modifying the original array
   Method push() lives a double life: it mutates the original array and returns the new length of the array
 */
console.log(pets.push({name: 'Donny', type: 'dog', age: 5}));

console.log(pets);

/* functions .map() and .filter() are non-mutating, just returning a new array */

let petsNames = pets.map(nameOnly);

function nameOnly(pet) {
    return pet.name;
}
console.log(petsNames);

let dogs = pets.filter(onlyDogs);

function onlyDogs(pet) {
    return pet.type == 'dog';
}
console.log(dogs);

let babies = pets.filter(onlyBabies);

function onlyBabies(pet) {
    return pet.age < 3;
}
console.log(babies);

/* incredibly powerful even though the methods are non-mutating
    we can chain them together to get the result we want
*/
let babyDogNames = pets.filter(onlyBabies).filter(onlyDogs).map(nameOnly);
console.log(babyDogNames);