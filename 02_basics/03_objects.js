// singleton object
// Object.create

// object literals

const myname=Symbol("keyname01");
const JsUser= {
    name: "Akram",
    // myname:"name01", // wrong way for symbol
    [myname]:"name01",
    "full name": "Akram khan",
    email: "Akramkhan.gmail.com",
    age: 18,
    location: "Nagpur",
    isLoggedIn:true,
    lastLogggedIn:["Mon","Tue"]    
}
// console.log(JsUser);

// console.log(JsUser.name);
// console.log(JsUser["name"]);

// console.log(JsUser.full name);// error
// console.log(JsUser["full name"]);

// console.log(JsUser[myname]);
// console.log(typeof (JsUser[myname]));

JsUser.email="AkramMarka.gmail.com";
// Object.freeze(JsUser);
JsUser.email="me@gmail.com";
// console.log(JsUser);

JsUser.greeting=function() {
    console.log("Hello user");
}
// console.log(JsUser.greeting);
console.log(JsUser.greeting());
JsUser.greetingtwo=function() {
    console.log(`Hello user ${this.name}`);
}
console.log(JsUser.greetingtwo());



