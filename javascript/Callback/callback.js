// 2 is printed after 3 - used callback function in setTimeout
console.log("1");
setTimeout(() => {
    console.log('2');
}, 1000);
console.log("3");

//callback function in forEach
const names = ['shaun', 'mario', 'luigi'];
names.forEach((name) => console.log(name));

// create callback function myForEach
const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        callback(element);
    }
}

// call myForEach
myForEach(names, (name) => console.log(name));

// callback function in Promises
const loadPokemon = (id, callback) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => callback(data))
}

loadPokemon(56, (pokemon) => {
    console.log(pokemon);
}) 