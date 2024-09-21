// function is also an object

function multiplyBy5(num){
    return num*5;
}

console.log(multiplyBy5(10));
multiplyBy5.myNumber=500;
console.log(multiplyBy5.myNumber);
console.log(multiplyBy5.prototype);

// new keyword

function createUser(userName, userAge){
    this.userName=userName;
    this.userAge=userAge;
}
createUser.prototype.increment=function(){
    this.userAge++;
}
createUser.prototype.printMe=function(){
    console.log(`The age after increment is : ${this.userAge}`);
}

// const userOne= createUser("Akram",21);  // error
// userOne.increment();
// userOne.printMe();

const userOne=new createUser("Akram",21);
userOne.increment();
userOne.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/