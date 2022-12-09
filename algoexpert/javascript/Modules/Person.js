export default class Person {
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log('Hello, I am ' + this.name);
    }
}

//export default Person;
//export { Person as default };