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

// Akram
// VM627:32 object
// VM627:33 object
// VM627:34 function
// VM627:35 string
// VM627:36 number
// VM627:37 number
// VM627:38 boolean
// VM627:39 object
// VM627:40 undefined
// VM627:41 undefined
// VM627:42 bigint
// VM627:43 symbol
// VM627:44 symbol

// ******************--------Memory---------***********************************

// Stack (primitive) and Heap (non-primitive)

let myName="Akram";
let yourName=myName;

console.log(yourName);
yourName="Khan"
console.log(myName);
console.log(yourName);


let myid1={
    email:"akramkhan.gmail.com",
    pass:"asasxasd"
}
let myid2=myid1;
console.log(myid1);
console.log(myid2);
myid2.pass="akramkhan";
console.log(myid1);
console.log(myid2);




