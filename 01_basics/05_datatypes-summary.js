// Primitive (value) if we call then copy has been passed

// String,Number,Boolean,Null,undefined,bigInt,Symbol

let Name="Akram";
let id=123;
let income=22222.23;
let isLoggedIn=true;
let temperature=null;
let driving;
let fishing=undefined;
const views=121212121245454545n
const Me=Symbol(123);
const You=Symbol(123);

console.log(Me==You);

// Non-primitive (reference) if we call then reference or actual value address has been passed

// Array,Object,function

let students=["Akram","Marka","Abhi",1];
console.log(students);

const Bus={
    Myname:"Akram",
    age:22
}
console.log(Bus);

const Myfunc =function(){
    console.log("Akram");
}
Myfunc();

console.log(typeof students);
console.log(typeof Bus);
console.log(typeof Myfunc);   // type is function object we have to say
console.log(typeof Name);
console.log(typeof id);
console.log(typeof income);
console.log(typeof isLoggedIn);
console.log(typeof temperature);
console.log(typeof driving);
console.log(typeof fishing);
console.log(typeof views);
console.log(typeof Me);
console.log(typeof You);


