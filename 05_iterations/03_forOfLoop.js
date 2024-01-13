// for of

// ["","",""];
// [{},{},{}]

// const myArr=[1,2,3,4,5];
// for(const element of myArr){
//     console.log(`element is ${element}`);
// }

// const greet="Hello, Akram Khan";
// for(let char of greet){
//     console.log(`Char is : ${char}`);
// }

// Maps

const country=new Map();
country.set("IN","India");
country.set("IN","India");
country.set("PL","Palestine");
country.set("RS","Russia");
country.set("IR","Iran");
country.set("YM","Yemen");
console.log(country);
for(const [Short,Name] of country){
    console.log(`full form of ${Short} is ${Name}`);
}

// for of :- on Object // object is not iterable with the help of (for of)

// const myObject={                // Error
//     game1: "Valorant",
//     game2: "God of war"
// }
// for(const [No,Name] of myObject){
//     console.log(`Game ${No} name is${Name}`);
// }