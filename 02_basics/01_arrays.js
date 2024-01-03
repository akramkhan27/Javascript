// Array

const myArray=[21,43,65,12,85];
const myArray_02=[32,"Akram",21.1,"Khan"];
// console.log(myArray);
// console.log(myArray_02);

const myArray03=new Array(11,12,13,14);
// console.log(myArray03[0]);

// Array Methods

// myArray03.push(2);
// myArray03.push(2);
// myArray03.pop();

// myArray03.unshift(1);
// myArray03.unshift(7);
// myArray03.shift();

// console.log(myArray03.includes(10));
// console.log(myArray03.includes(13));
// console.log(myArray03.indexOf(12));

const newArray= myArray03.join();
// console.log(myArray03);
// console.log(newArray);
// console.log(typeof newArray);

// slice and splice

console.log("A", myArray03);
const myn1=myArray03.slice(1,3);
console.log(myn1);
console.log("A", myArray03);

const myn2=myArray03.splice(1,3);
console.log(myn2);
console.log("A",myArray03);




