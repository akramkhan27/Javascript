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
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: 'A', 2: 'B'};
const obj2={3: 'C', 4: 'D'};
const obj4={5: 'E', 6: 'F'};
// const obj3={obj1,obj2};
// console.log(obj3);

// const obj3=Object.assign(obj1,obj2);
// console.log(obj3);

// const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

// const obj3=Object.assign({},obj1,obj2,obj4);
// console.log(obj3);

const obj3={...obj1,...obj2,...obj4};
// console.log(obj3);

// const User=[
//     {
//         id: "123",
//         email: "akramkhan@gmail.com",
//     },
//     {
//         id: "123",
//         email: "akramkhan@gmail.com",
//     },
//     {
//         id: "123",
//         email: "akramkhan@gmail.com",
//     },
//     {
//         id: "123",
//         email: "akramkhan@gmail.com",
//     }
// ]

// console.log(User[0]);
// console.log(User[0].id);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('LoggedIn'));

// destructuring

const course={
    coursename: 'Javascript',
    price: '599',
    courseInstructor:'Hitesh Sir'
}
console.log(course.courseInstructor);
const {courseInstructor}=course;
console.log(courseInstructor);

const {courseInstructor: instructor}=course;
console.log(instructor);

// api (json)

// {
//     "coursename": "C programming",
//     "price": 888,
//     "instructor": "Harry"
// }

// api can be array form also or above form also
[
    {},
    {},
    {},
    {}
]