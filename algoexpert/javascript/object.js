const myKey = 'Key';
const sameValue = 'This is the same value';
const id = Symbol('id');

const website = {
    name: "AlgoExpert",
    rating: 5,
    description: "AlgoExpert is the best place to learn how to code algorithms.",
    founded: 2018,
    isAwesome: true,
    sameValue,
    [id]: 123,
    [myKey]: "myValue",
    'multi word key': 'multi word value',
    founder: {
        name: "Adnan Aziz",
        title: "CEO"
    },
    courses: [
        {
            name: "Data Structures",
            description: "Learn how to code data structures in JavaScript.",
            price: 100
        },
        {
            name: "Algorithms",
            description: "Learn how to code algorithms in JavaScript.",
            price: 100
        }
    ],
    address: {
        street: "123 Main St.",
        city: "Toronto",
        province: "ON",
        postalCode: "M1M 1M1"
    },
    contact: {
        email: "something@algoexpert.io",
        phone: "416-123-4567"
    }
};
//
// //accessing object properties
// console.log(website.name);
// console.log(website["name"]);
// console.log(website.founder.name);
// console.log(website["founder"]["name"]);
// console.log(website.courses[0].name);
// console.log(website["courses"][0]["name"]);
// console.log(website.address.street);
// console.log(website["address"]["street"]);
// console.log(website.contact.email);
// console.log(website["contact"]["email"]);
// console.log(sameValue);
// console.log(website[id]);
// console.log('address' in website); //prototype property
// console.log('toString' in website);
// console.log(website.hasOwnProperty('address')); //own property - use this
// console.log(website.hasOwnProperty('toString'));
// console.log(website.address !== undefined); //problem with this approach is that it will return true even if the value is undefined
//
// //adding new properties
// website.founder.age = 30;
// website["founder"]["age"] = 30;
// website.courses[0].language = "JavaScript";
// website["courses"][0]["language"] = "JavaScript";
// website.address.country = "Canada";
// website["address"]["country"] = "Canada";
// website.contact.twitter = "@algoexpertio";
// website["contact"]["twitter"] = "@algoexpertio";
// console.log(website);
//
// //deleting properties
// delete website.founder.age;
// delete website["founder"]["age"];
// delete website.courses[0].language;
// delete website["courses"][0]["language"];
// delete website.address.country;
// delete website["address"]["country"];
// delete website.contact.twitter;
// delete website["contact"]["twitter"];
// console.log(website);
//
// //iterating through object properties
// for (const key in website) {
//     console.log(key, website[key]);
// }
//
// //iterating through object properties - only own properties
// for (const key in website) {
//     if (website.hasOwnProperty(key)) {
//         console.log(key, website[key]);
//     }
// }
//
// //iterating through object properties - only own properties - using Object.keys()
// for (const key of Object.keys(website)) {
//     console.log(key, website[key]);
// }
//
// //iterating through object properties - only own properties - using Object.entries()
// for (const [key, value] of Object.entries(website)) {
//     console
//         .log(key, value);
// }
//
// //iterating through object properties - only own properties - using Object.values()
// for (const value of Object.values(website)) {
//     console.log(value);
// }
//
// //iterating through object properties - only own properties - using Object.getOwnPropertyNames()
// for (const key of Object.getOwnPropertyNames(website)) {
//     console.log(key, website[key]);
// }
//
// //iterating through object properties - only own properties - using Object.getOwnPropertySymbols()
// for (const key of Object.getOwnPropertySymbols(website)) {
//     console.log(key, website[key]);
// }
//
// //iterating through object properties - only own properties - using Reflect.ownKeys()
// for (const key of Reflect.ownKeys(website)) {
//     console.log(key, website[key]);
// }
//
// //iterating through object properties - only own properties - using Object.assign()
// const websiteCopy = Object.assign({}, website);
// for (const key in websiteCopy) {
//     console.log(key, websiteCopy[key]);
// }
//
// //iterating through object properties - only own properties - using spread operator
// const websiteCopy2 = { ...website };
// for (const key in websiteCopy2) {
//     console.log(key, websiteCopy2[key]);
// }
//
// //iterating through object properties - only own properties - using JSON.parse(JSON.stringify())
// const websiteCopy3 = JSON.parse(JSON.stringify(website));
// for (const key in websiteCopy3) {
//     console.log(key, websiteCopy3[key]);
// }
//
// //iterating through object properties - only own properties - using lodash
// const websiteCopy4 = _.cloneDeep(website);
// for (const key in websiteCopy4) {
//     console.log(key, websiteCopy4[key]);
// }
//
// //iterating through object properties - only own properties - using underscore
// const websiteCopy5 = _.clone(website);
// for (const key in websiteCopy5) {
//     console.log(key, websiteCopy5[key]);
// }
//
// //iterating through object properties - only own properties - using jQuery
// const websiteCopy6 = $.extend({}, website);
// for (const key in websiteCopy6) {
//     console.log(key, websiteCopy6[key]);
// }
//
// //iterating through object properties - only own properties - using Object.create()
// const websiteCopy7 = Object.create(website);
// for (const key in websiteCopy7) {
//     console.log(key, websiteCopy7[key]);
// }
//
// //iterating through object properties - only own properties - using Object.freeze()
// const websiteCopy8 = Object.freeze(website);
// for (const key in websiteCopy8) {
//     console.log(key, websiteCopy8[key]);
// }
//
// //iterating through object properties - only own properties - using Object.seal()
// const websiteCopy9 = Object.seal(website);
// for (const key in websiteCopy9) {
//     console.log(key, websiteCopy9[key]);
// }
//

