let myHeros=["Bahat","Saint"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiterPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// using prototype we add any functionality in  object and 
//use any where
Object.prototype.Sant=function(){
 console.log("Sant is  present in all object");
}

//myHeros.Sant();
//heroPower.Sant();

Array.prototype.Sink=function(){
 console.log("sant says hello");
 
}

myHeros.Sink();

//inheritance

const user={
 name:"chai",
 email:"sant@gmail.com"
}


const Teacher={
    makevideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssigment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

//Mordern structure inheritence
Object.setPrototypeOf(TeachingSupport,Teacher)
let myName="Sant    "
let lastName=" singh  "

console.log(myName.length)

let anotherUsername="Santincode   "

String.prototype.trueLength=function(){
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength();