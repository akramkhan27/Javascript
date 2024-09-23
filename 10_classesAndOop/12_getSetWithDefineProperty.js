function student(email, password){
    this._email= email;
    this._password= password;

    Object.defineProperty(this,"email",{
        set: function(value){
            this._email=value;
        },
        get: function(){
            return this._email.toUpperCase();
        }
    })
    Object.defineProperty(this,"password", {
        set: function(value){
            this._password=value;
        },
        get: function(){
            return this._password;
        }
    })

}

const studentOne=new student("marka@gmail.com", 12);
console.log(studentOne.email);
console.log(studentOne.password);
