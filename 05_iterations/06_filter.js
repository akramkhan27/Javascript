// const myprog=["C","Java","Python","HTML"];
// const lang=myprog.forEach((element)=>{   // for each does not return anything that's why output is undefined
//     console.log(element);
//     return element;
// });
// console.log(lang);

const myArray=[1,2,3,4,5,6,7,8,9,10];
// const myNum=myArray.filter((element)=>element>=5);
// const myNum=myArray.filter((element)=>{
//     return element>=5
// });
// console.log(myNum);


// const newNums=[];
// myArray.forEach((element)=>{
//     if(element>=5){
//         newNums.push(element);
//     }
// })
// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks=books.filter((bookInfo)=> bookInfo.genre =="Fiction");
//   const userBooks=books.filter((bookInfo)=> bookInfo.edition>=2007);
//   const userBooks=books.filter((bookInfo)=> { return bookInfo.publish>=2000});
const userBooks=books.filter((bookInfo)=>{ 
    return bookInfo.publish>=2000 && bookInfo.genre == "Science"

});
console.log(userBooks);
