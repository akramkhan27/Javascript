var c=300
let a=234;
if(true){
    let a=10;
    const b=20;
    // var c=30;
    var c=30;
    // console.log("Inner: ",a);

}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const money=100;
    function two(){
        const pocketMoney=10;
        console.log(money);
    }
    // console.log(pocketMoney);
    two();
}
// one();

if(true){
    const username="Akram";
    if(true){
        const website="youtube";
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// ----------------Interesting-------------------

// function addOne(num){
//     return num+1;
// }
// console.log(addOne(3));

// const addTwo=function(num){
//     return num+2;
// }
// console.log(addTwo(5));


console.log(addOne(3));
function addOne(num){
    return num+1;
}

// console.log(addTwo(5));       this will give error
const addTwo=function(num){
    return num+2;
}

