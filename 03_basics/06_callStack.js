// (this) is the variable in above image

// function One(){
//     console.log("One");
// }
// function Two(){
//     console.log("Two");
    
// }
// function Three(){
//     console.log("Three");
// }
// One();
// Two();
// Three();


function One(){
    console.log("One");
    Two();
}
function Two(){
    console.log("Two");
    Three();
    
}
function Three(){
    console.log("Three");
}
One();
Two();
Three();