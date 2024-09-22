// static strict the access

class user{
    constructor(username){
        this.username = username
    }

    // printMe(){
    //     console.log(`This is username : ${this.username}`);
    // }
    static printMe(){
        console.log(`This is username : ${this.username}`);
    }
   
}

const myUser01=new user("kantaa");
// myUser01.printMe(); //error after adding static

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email=email;
    }
}

const teacher01=new teacher("marka","marka@gmail.com");
// teacher01.printMe(); // error because of static u cannot access by extending also