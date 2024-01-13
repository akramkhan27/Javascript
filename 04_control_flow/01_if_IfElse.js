// if

// const isUserLoggedIn=true;
// if(isUserLoggedIn){
//     console.log("You are Online");
// }

// const temperature=45;
// if(temperature>=45){
//     console.log("It's very hotttt");
// }
// console.log("Execcute");

// >, <, >=, <=, ==, ===, !=, !==

// const score=400;
// if(score>100){
//     let power=10;
//     console.log(`Use Power ${score}`);
// }
// console.log(`Use power ${score}`);

const balance=1000;
// if(balance>500) console.log("test1"),console.log("test2");;

// if(balance<500){
//     console.log("balance is less than 500");
// }
// else if(balance<750){
//     console.log("balance is less than 750");
// }
// else if(balance<900){
//     console.log("balance is less than 1000");
// }
// else{
//     console.log("balance is less than 1200");
// }


const userLoggedIn=true;
const loginFromGoogle=true;
const loginFromEmail=true;
const debitCard=false;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loginFromEmail || loginFromGoogle){
    console.log("User Logged In");
}