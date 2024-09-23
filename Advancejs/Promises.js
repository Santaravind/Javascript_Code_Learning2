// const promiseOne=new Promise(function(resolve,reject){
//     // Do an async task
//     //DB calls, creptography, network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// });

// promiseOne.then(function(){
//     console.log("promise cosumed.");
    
// })

// new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         console.log("Aynsc is one")
//         resolve();
//     },1000)
    
// }).then(function(){
//     console.log("Ayscn two");
// });

// const promiseThree=new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         resolve({username:"Chai",Email:"Sant@gmail.com"});
//     } ,1000)
    
// })

// promiseThree.then(function(user){
//   console.log(user);
// });


// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"hitesh",password:"1234"})
//         }else{
//             reject('error:some thing went wrong')
//         }
//     })

// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//       console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("the promise is either resolved or rejected "))


// const promisFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"hitesh",password:"1234"})
//         }else{
//             reject('error:some thing went wrong')
//         }
//     })
// })

// async function resolvepromisFive() {
//    try {
//     const cotan=await promisFive
//     console.log(cotan)
//    } catch (error) {
//      console.log(error);
     
//    }
    
// }
// resolvepromisFive();

// async function getAllUsers() {
//     try{
//         const reponce=await fetch('https://api.github.com/users/hiteshchoudhary')

//         const data=await reponce.json()
//         console.log(data)

//     }catch(error){
//         console.log("E:-",error);
//     }    
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((resolve)=>{
   return resolve.json();
})
.then((returnvalue)=>{
  console.log(returnvalue)
})
.catch((E)=>
 console.log(e,eror) 
)
