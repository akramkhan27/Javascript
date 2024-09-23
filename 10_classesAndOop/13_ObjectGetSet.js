const employee={
    _name: "me",
    _email: "me@gmail.com",

    set name(value){
        this._name=value;
    },
    get name(){
        return this._name;
    },
    set email(value){
        this.email=value;
    },
    get email(){
        return this._email;
    }

}

const emp1=Object.create(employee);
console.log(emp1.name);
console.log(emp1.email);