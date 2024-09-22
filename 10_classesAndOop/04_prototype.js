// let myName="Akram    ";
// let mychannel="  marka    ";

// console.log(myName.trueLength); // make a custom function which return true value without space
// in the end we will get answer how to do 

const myHero=["Spiderman", "Ironman"];

const myHeroPower={
    thor: "Hammer",
    spider: "Web",
    displaySpiderPower:  ()=>{
        console.log(`The spider power is : ${this.spider}`);
    }
}

Object.prototype.heyAkram=function(){
    console.log("Hello Akram present in all object");
}


// myHeroPower.heyAkram();
// myHero.heyAkram();

Array.prototype.helloAkram=function(){
    console.log("Hyy Akram present in all Arrays");
}

// myHero.helloAkram();
// myHeroPower.helloAkram(); // error because not accessible 


// const h1= myHeroPower;
// console.log(h1.thor)
// h1.thor="Hathoda";
// const h2=myHeroPower;
// console.log(h2.thor)

// Inheritance 

const student={
    studentName: "Akram Khan",
    studentEmail: "akramkhan@gmail.com"
}

const teacher={
    makeVideo: true
}

const teachingSupport={
    isAvailable: false
}

const TA={
    makeAssignment: 13,
    fullTime: true,
    __proto__: teachingSupport  // old syntax to do inheritance
}
console.log(TA.isAvailable);
// console.log(teachingSupport.makeAssignment);  // error because not access the TA but can acces the properties of teachingSupport

teacher.__proto__=student;  // old syntax to do inheritance
console.log(teacher.studentName);
// console.log(student.makeVideo); // error

// modern syntax

Object.setPrototypeOf(teachingSupport,teacher);
console.log(teachingSupport.makeVideo);

// above question answer about give trueLength in String
myUserName="   AkramKhan   ";
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`The true length is : ${this.trim().length}`)
}
myUserName.trueLength();
"Hello Akram".trueLength();
"     Akram".trueLength();