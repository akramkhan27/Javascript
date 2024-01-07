function myfunction(){
    console.log("Hello");
}
// myfunction();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(2,3);

function addTwoNumbers(num1,num2){
    // const result=num1+num2;
    return num1+num2;
}
// console.log(addTwoNumbers(2,3));
const result=addTwoNumbers(5,2);
// console.log(result);


// function loginUserMessage(name){
//     return `${name}, Hi There`;
// }
// console.log(loginUserMessage());
// console.log(loginUserMessage("Akram"));


// function loginUserMessage(name="Unknown"){
//     return `${name}, Hi There`;
// }
// console.log(loginUserMessage());
// console.log(loginUserMessage("Akram"));


function loginUserMessage(name){
    // if(name== undefined){
    //     console.log("Please enter the name!!!!!");
    //     return;
    // }
    if(!name){
        console.log("Please enter the name!!!!!");
        return;
    }
    return `${name}, Hi There`;
}
// console.log(loginUserMessage());
// console.log(loginUserMessage("Akram"));

function calculatorCartPrice(...items){
    return items;
}
// console.log(calculatorCartPrice("apple","banana","kiwi"));

const userOne={
    name: "Akram",
    age: 21
}
function userFunction(userObject){
    console.log(`Hello, my name is ${userObject.name} & my age is ${userObject.age}`);
}
// userFunction(userOne);
userFunction({
    name: "Akram",
    age: 21
});

const newOneArray=[2,1,45,1,74,232];
function accessTheArray(takeNewArray,element){
    return takeNewArray[element-1];
}
// console.log(accessTheArray(newOneArray,5));
console.log(accessTheArray([1,2,4,5,7,2],4));