// function is also an object

function multiplyBy5(num){
    return num*5;
}

console.log(multiplyBy5(10));
multiplyBy5.myNumber=500;
console.log(multiplyBy5.myNumber);
console.log(multiplyBy5.prototype)