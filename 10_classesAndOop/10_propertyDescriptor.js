const pi= Object.getOwnPropertyDescriptor(Math,"PI");
console.log(pi);

console.log(Math.PI)
Math.PI=3.0;
console.log(Math.PI)

const chai={
    name: "Adrak Chai",
    price: 20,
    isAvailable: true,
    orderChai: function(){
        console.log("Chai nhi bani abhi!");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai,"name",{
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for(const [key,value] of Object.entries(chai)){
    console.log(value);
}