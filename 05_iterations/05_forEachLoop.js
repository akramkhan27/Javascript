const myprogramLang=["Html","Css","Javascript","Java"];
// myprogramLang.forEach(function (element){
//     console.log(element);
// });

// myprogramLang.forEach((element) =>{
//     console.log(element);
// });

// function printMe(element){
//     console.log(element);
// }
// myprogramLang.forEach(printMe);  // pass the function reference

// myprogramLang.forEach((item,index,myArray)=>{
//     console.log(`${item} ${index} ${myArray}`);
// })


const myCourses=[
    {
        courseName: "C programming",
        coursePrice: "Free" 
    },
    {
        courseName: "Python programming",
        coursePrice: "Free" 
    },
    {
        courseName: "Java programming",
        coursePrice: "Free" 

    }
];
myCourses.forEach((myObj)=>{
    console.log(myObj.courseName," ",myObj.coursePrice);
})