function Website(name,ratin,founders){
    this.name = name;
    this.rating = ratin;
    this.founders = founders;
}

const frontendExpert = new Website("Frontend Expert", 5, ["Adnan Aziz", "John Doe"]);

console.log(frontendExpert);