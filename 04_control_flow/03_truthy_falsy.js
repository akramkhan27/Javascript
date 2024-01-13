// const userEmails=[]; // truthy
// const userEmails=""; // falsy
// const userEmails=" ";   // truthy
// const userEmails={};   // truthy
// if(userEmails){
//     console.log("login with email");
// }
// else{
//     console.log("You don't have email");
// }

// falsy values: 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:
// "0", 'false', " ", [], {}, function(){}

// if(userEmails.length ===0){
//     console.log("array is empty");
// }

// const emptyObject={};
// if(Object.keys(Object.keys(emptyObject)).length ===0){
//     console.log("Object is empty");
// }

// Nullish coalescing operator (??) : Null undefined     // protect from null and undefined value

let val1;
val1=5 ?? 10;
val1=5 ?? null;
val1=null ?? 10;
val1=undefined ?? 10;
// val1=null ?? undefined ?? 2 ?? 3;
// console.log(val1);


// Ternary operator :  condition ? true:false

const softy=20;
softy<=13?console.log("softy price is less than  13"):console.log("softy price is greater than 13");;

// output of below is true
false==0
false==''
0==''


