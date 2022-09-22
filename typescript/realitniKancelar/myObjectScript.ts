//const employees: any[] = ["John", "Mary", "Bob", "Jane", "Fred",4,true];
let employees: any[]
employees = ["John", "Mary", "Bob", "Jane", "Fred",4,true]

// Tuples fixní pole
const tuples: [string, number, boolean] = ["John", 4, true];

// Enum
enum Role {ADMIN=100, AUTHOR=200, READ_ONLY=300};

const employee: {
    name: string,
    age: number,
    hobbies: string[],
    department: [number, string],
    role: Role
} = {
    name: "David Šetek",
    age: 30,
    hobbies: ["Sports", "Cooking", "Reading"],
    department: [2, "it developer"], // tuple,
    role: Role.ADMIN // tuple
}

if (employee.role === Role.ADMIN) {
    console.log("Role is admin with id: " + employee.role);
}

for (const oneEmployee of employees) {
    console.log(oneEmployee)
}

for (const department of employee.department) {
    console.log(department)
}
console.log(employee.name)
console.log(employee.age)
console.log(employee.hobbies)


//objekt person s polem hobbies
const person = {
    name: "Petr",
    age: 30,
    isStudent: true,
    hobbies: ["sport", "music"],
}

for (const oneHobby of person.hobbies) {
    console.log(oneHobby)
}



/********************** Objekt house *******************/
enum House_condition {HABITABLE, NORMAL, UNHABITABLE};

const house: {
    name: string,
    windows: number,
    doors: number,
    color: string,
    height: number,
    isNew: boolean,
    garage: boolean,
    vipClients: string[], // pole
    clients: string[],
    location: [number, string] // tuple
    condition: House_condition //enum
} = {
    name: "House",
    windows: 4,
    doors: 1,
    color: "white",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-do","Bum-bum-company"],
    clients: ["Daniel Stavitel", "Petr Oknokrad", "Dana Parketová"],
    location: [5, "jižní"],
    condition: House_condition.UNHABITABLE
};

console.log("Název: " + house.name)
console.log("Počet oken: " + house.windows)
console.log("Počet dveří: " + house.doors)
console.log("Barva: " + house.color)
console.log("Výška: " + house.height)
console.log("Novostavba: " + house.isNew)
console.log("Garáž: " + house.garage)
console.log("VIP klienti:",house.vipClients[0],",", house.vipClients[2])
console.log("Zájemci:",house.clients[0],",", house.clients[2])
console.log("Stav: " + house.condition)

for (const i of house.location) {
    console.log(i)
}
