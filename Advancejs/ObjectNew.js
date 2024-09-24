function multiplyBy4(num){
    return num*4;
}

multiplyBy4.power=5;

console.log(multiplyBy4.power);
console.log(multiplyBy4(4));

function createUser(username,score) {
    this.username=username
    this.score=score
    
}

//add pototypes

createUser.prototype.increment=function(){
    this.score++;
}

createUser.prototype.price=function(){
    console.log(`The price is ${this.score}`);
    
}

const chai= new createUser("Sant",25)
const tea= new createUser("singh",45);


console.log(chai)
chai.price();

/*
Here's what happebs behind the seans when the new keyword is used:
 
A new object is created: The new keyword initiates the creation of a new javaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the construtor function. This means that the it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor , JavaScript assumes this, the newly created object, to be the intended return value.

A new object is returned: After the constructor function has been called , if it doesn't return a non-primitive value (object ,array ,functio,etc.) the newly created object is returned.

*/
