// object literal means it is only just a object
// const user={
//     userName: "Akram Khan",
//     userCity: "Bhayandar",
//     loginCount: 5,
//     getUserDetails: function(){
//         console.log("Got user data from database");
//         console.log(`the name is : ${this.userName}`);
//         console.log(this);
//     }

// }
// console.log(user.userName);
// user.getUserDetails();
// console.log(this);

function User(userName, loginCount, isLoggedIn){
    this.userName= userName;
    this.loginCount= loginCount;
    this.isLoggedIn= isLoggedIn

    this.greeting=function(){
        console.log(`Hello , ${this.userName}`);
    }
    return this;
}

// const userOne=User("Marka", 4, true);
// const userTwo=User("Akram", 1, false);
// console.log(userOne);

const userOne=new User("Marka", 4, true);
const userTwo=new User("Akram", 1, false);
console.log(userOne);
console.log(userTwo);
userTwo.greeting();

// console.log(userOne.constructor);