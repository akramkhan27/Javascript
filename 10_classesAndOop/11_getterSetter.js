class student{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    set email(value){
        this._email=value;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set name(value){
        this._name=value;
    }
    get name(){
        return this._name.toUpperCase();
    }
}
const studentOne=new student("Akram", "akram@gmail.com");
console.log(studentOne.name);
console.log(studentOne.email);