// const tinderUser=new Object();
// console.log(tinderUser);

const tinderUser={};
// console.log(tinderUser);
tinderUser.id="123";
tinderUser.name="Akram";
tinderUser.isLoggedIn=true;
// console.log(tinderUser);

const regularUser={
    email: "akramkhan.gmail.com",
    fullname:{
        userfullname:{
            firstname:"Akram",
            lastname:"Khan",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);



