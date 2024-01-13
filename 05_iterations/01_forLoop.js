// for

// for(let i=0;i<=10;i++){
//     const element=i;
//     if(element==5){
//         console.log("5 is a lucky number");
//     }
//     console.log(element);
// }
// console.log(element);


// for(let i=1;i<=10;i++){
//     console.log(`outer value is : ${i}`);
//     for(let j=1;j<=10;j++){
//         // console.log(`inner loop value is ${j} and outer value is ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

const heroes=["Superman","Batman","Aquaman"];
// for(let i=0;i<heroes.length;i++){
//     let Element=heroes[i];
//     console.log(Element);
// }
// console.log(Element);

// break and continue

// for(let i=0;i<=10;i++){
//     if(i==5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(`element is ${i}`);
// }


for(let i=0;i<=10;i++){
    if(i==5){
        console.log("5 is detected");
        continue;
    }
    console.log(`element is ${i}`);
}