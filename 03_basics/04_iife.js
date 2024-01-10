// immediataly invoked function expressions (IIFE)

// function connect(){
//     console.log("DB CONNECTED");
// }
// connect();

// (function connect(){
//     console.log("DB CONNECTED");
// })();



// (function connect(){
//     console.log("DB CONNECTED");
// })();                        // if we write consecetive iife than put semicolon or error occur

// (function Me(){
//     console.log("Hello");
// })();

(function connect(){  // named iife
    console.log("DB CONNECTED");
})();                        

(()=>{  // arrow iife
    console.log("Hello");
})();

((name)=>{
    console.log(`My name is ${name}`);
})("Akram");

