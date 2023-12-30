// Dates

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// let myCreatedDate=new Date(2023,0,25);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date(2023,1,25);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate=new Date(2023,1,25,3,4);
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate=new Date("01,3,2023");
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"long"
}));






