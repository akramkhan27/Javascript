class user{
    constructor(username){
        this.username=username;
    }
    loginMe(){
        console.log(`username is ${this.username}`);
    }
}
class teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New course has been added by : ${this.username}`);
    }
}

const user01= new teacher("Akram khan", "akram", 12345);
user01.addCourse();
user01.loginMe();

const user02=new user("Marka Khan");
user02.loginMe();
// user02.addCourse(); // error

console.log(user01 instanceof teacher);
console.log(user01 instanceof user);
console.log(user02 instanceof teacher);