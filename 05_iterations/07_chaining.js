const num=[1,2,3,4,5,6,7,8,9,10];
// const myNum=num.map((element)=>element+10);
// console.log(myNum);

const newNum=num.map((element)=> element*10).map((element)=> element+1).filter((element)=> element>=40);  // in filter only conditional operation can be done
console.log(newNum);