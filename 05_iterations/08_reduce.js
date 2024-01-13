const num=[1,2,3,4];
// const newNum=num.reduce(function(accumulator,currValue){
//     console.log(`previous value : ${accumulator} and current value is : ${currValue}`);
//     return accumulator+currValue;
// },0);
// console.log(newNum);

// newNum=num.reduce((preValue,currValue)=>preValue+currValue,0);
// console.log(newNum);

const shopCart=[
    {
        courseName: "python",
        price: 100,
    },
    {
        courseName: "Java",
        price: 300,
    },
    {
        courseName: "C#",
        price: 200,
    },
    {
        courseName: "Html",
        price: 400,
    }
]
const totalPrice=shopCart.reduce((preValue,currValue)=>preValue+currValue.price,0);
console.log(totalPrice);