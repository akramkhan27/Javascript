// after ES6

// class user{
//     constructor(username, userEmail, userPassword){
//         this.username=username;
//         this.userEmail=userEmail;
//         this.userPassword=userPassword;
//     }
//     encryptPassword(){
//         return `The Passord in Encrypted : ${this.userPassword}abc`;
//     }
//     changeUsername(){
//         return `The username change is : ${this.username.toUpperCase()}`;
//     }
// }
// const user01=new user("Akram", "akram@gmail.com", 1234);
// console.log(user01.encryptPassword());
// console.log(user01.changeUsername());

// behind the scene
// using function

function user(username, userEmail, userPassword){
    this.username=username;
    this.userEmail=userEmail;
    this.userPassword=userPassword;
}
user.prototype.encryptPassword=function(){
    return `The Passord in Encrypted : ${this.userPassword}abc`;
}
user.prototype.changeUsername=function(){
    return `The username change is : ${this.username.toUpperCase()}`;
}

const user01= new user("akram", "akram@gmail.com", 2234);
console.log(user01.encryptPassword());
console.log(user01.changeUsername());