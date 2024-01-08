const user={
    username: "Akram khan",
    age: 22,
    welcome: function(){
        console.log(`Hello, ${this.username} welcome to marka group`);
        console.log(this);
    }
    
}
// user.welcome();
// user.username='Marka khan';
// user.welcome();

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai();

// function chai(){
//     let userName="Missdef";
//     console.log(this.userName);  // error :- undefined
// }
// chai();

// const Me=function(){
//     let userName="Missdef";
//     console.log(this.userName);  // error :- undefined
// }
// Me();

// const Me= ()=>{
//     let userName="Missdef";
//     console.log(this.userName); 
//     console.log(this);
// }
// Me();

// const Me=(num1,num2)=>{   // explicit return in arrow function
//     return num1+num2;
// }
// console.log(Me(2,1));

// const Me=(num1,num2)=>(num1+num2);                      // implicit return in arrow function
// console.log(Me(2,1));

const Me=(num1,num2)=>({username: 'Akram'});
console.log(Me(2,1));
