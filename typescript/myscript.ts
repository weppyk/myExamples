// jednořádkový komentář
/*
 víceřádkový
 komentář 
*/
/*
    number = 3,2.1,-5
    string = "ahoj", 'ahoj', `ahoj`
    boolean = true, false
    const = konstanta: string = "ahoj"
    const = age: number = 5
    const = isStudent: boolean = true
    let = proměnná
*/

// objekt
/*const person: {
    name: string;
    age: number;
    isStudent: boolean;
} = {
    name: "Petr",
    age: 30,
    isStudent: true
}*/

// objekt jednoduchý zápis
const person = {
    name: "Petr",
    age: 30,
    isStudent: true
}


function soucet(a: number, b: number): number {
    return a + b;
}

console.log(soucet(5, 2));
console.log(person.name);
console.log(person.age);