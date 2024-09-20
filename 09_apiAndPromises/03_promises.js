// const promiseOne= new Promise(function(resolve, reject){
    //     // Do an Async Task
    //     // DB Calls, Cryptography, network
    //     setTimeout(()=>{
    //         console.log("Async Task is Complete");
    //         resolve();
    //     },1000)
    // });
    
    // promiseOne.then(function(){
    //     console.log("Promise One Consumed");
    // });
    
    // new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         console.log("Async Task 2");
    //         resolve();
    //     },1000);
    // }).then(()=>{
    //     console.log("Async 2 resolved")
    // })
    
    // const promiseThree= new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         resolve({userId: 1, userName: "Akram Khan"});
    //     },1000);
    // })
    
    // promiseThree.then((user)=>{
    //     console.log(user); 
    //     console.log(user.userId);
    // })
    
    // const promiseFour=new Promise((resolve, reject)=>{
    //     setTimeout(()=>{
    //         let error=false;
    //         if(!error){
    //             resolve({userName: "Akram Khan", userPass: 1234});
    //         }
    //         else{
    //             reject("ERROR: something went wrong");
    //         }
    //     },1000)
    // });
    
    // promiseFour
    // .then((user)=>{
    //     console.log(user);
    //     return user.userName;
    // })
    // .then((userName)=>{
    //     console.log(userName);
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })
    // .finally(()=>{
    //     console.log("Db Closed");
    // });
    
    const promiseFive= new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let error=false;
            if(!error){
                resolve({id:1, studentName:"Marka Khan"});
            }
            else{
                reject("Error");
            }
        },1000);
    });
    
    async function consumePromiseFive(){
        try{
            // console.log(await promiseFive);
    
            const response=await promiseFive;
            console.log(response.studentName);
    
        }
        catch(error){
            console.log(error);
        }
    }
    consumePromiseFive();
    
    // getAllUser excute first at any cost because of fetch() has most priority than others
    async function getAllUser(){
        try{
            const response=await fetch("https://api.github.com/users/akramkhan27");
            const data=await response.json();
            console.log(data);
            console.log("Fetch With async and await");
        }
        catch(error){
            console.log(error);
        }
    }
    
    getAllUser();
    
    fetch("https://api.github.com/users/akramkhan27")
    .then((response)=>{
        console.log("Fetch With Then");
        return response.json();
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    