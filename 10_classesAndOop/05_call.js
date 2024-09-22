function setUser(userName){
    // complex db calls
    this.userName=userName;
    console.log("Hello");
}
function createUser(userName, userEmail, userPassword){
    setUser.call(this,userName);
    this.userEmail=userEmail;
    this.userPassword=userPassword;
}

const user01=new createUser("akram", "akram@gmai.com", 1234);
console.log(user01);