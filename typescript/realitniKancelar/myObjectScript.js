//const employees: any[] = ["John", "Mary", "Bob", "Jane", "Fred",4,true];
var employees;
employees = ["John", "Mary", "Bob", "Jane", "Fred", 4, true];
// Tuples fixní pole
var tuples = ["John", 4, true];
// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 100] = "ADMIN";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["READ_ONLY"] = 300] = "READ_ONLY";
})(Role || (Role = {}));
;
var employee = {
    name: "David Šetek",
    age: 30,
    hobbies: ["Sports", "Cooking", "Reading"],
    department: [2, "it developer"],
    role: Role.ADMIN // tuple
};
if (employee.role === Role.ADMIN) {
    console.log("Role is admin with id: " + employee.role);
}
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var oneEmployee = employees_1[_i];
    console.log(oneEmployee);
}
for (var _a = 0, _b = employee.department; _a < _b.length; _a++) {
    var department = _b[_a];
    console.log(department);
}
console.log(employee.name);
console.log(employee.age);
console.log(employee.hobbies);
//objekt person s polem hobbies
var person = {
    name: "Petr",
    age: 30,
    isStudent: true,
    hobbies: ["sport", "music"]
};
for (var _c = 0, _d = person.hobbies; _c < _d.length; _c++) {
    var oneHobby = _d[_c];
    console.log(oneHobby);
}
/********************** Objekt house *******************/
var House_condition;
(function (House_condition) {
    House_condition[House_condition["HABITABLE"] = 0] = "HABITABLE";
    House_condition[House_condition["NORMAL"] = 1] = "NORMAL";
    House_condition[House_condition["UNHABITABLE"] = 2] = "UNHABITABLE";
})(House_condition || (House_condition = {}));
;
var house = {
    name: "House",
    windows: 4,
    doors: 1,
    color: "white",
    height: 50,
    isNew: true,
    garage: true,
    vipClients: ["Build-store", "Damage-do", "Bum-bum-company"],
    clients: ["Daniel Stavitel", "Petr Oknokrad", "Dana Parketová"],
    location: [5, "jižní"],
    condition: House_condition.UNHABITABLE
};
console.log("Název: " + house.name);
console.log("Počet oken: " + house.windows);
console.log("Počet dveří: " + house.doors);
console.log("Barva: " + house.color);
console.log("Výška: " + house.height);
console.log("Novostavba: " + house.isNew);
console.log("Garáž: " + house.garage);
console.log("VIP klienti:", house.vipClients[0], ",", house.vipClients[2]);
console.log("Zájemci:", house.clients[0], ",", house.clients[2]);
console.log("Stav: " + house.condition);
for (var _e = 0, _f = house.location; _e < _f.length; _e++) {
    var i = _f[_e];
    console.log(i);
}
