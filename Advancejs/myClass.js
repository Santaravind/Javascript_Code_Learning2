//ES6: After that
  // class create using constructer 
class user {
    constructor(username,email,password){
     this.username=username;
     this.email=email;
     this.password=password
    }

    encryptPassword(){
        return`${this.password}abc`
    }

    changeUser(){
        return`${this.username.toUpperCase()}`
    }
}

const chai=new user("chai","sant@gmail.com","123")

//console.log(chai);
// console.log
// (chai.encryptPassword()
// )
// console.log
// (chai.changeUser()
// )

//behind the scene

function User(username,email,password){
    this.username=username;
     this.email=email;
     this.password=password
}
User.prototype.encryptPassword=function(){
     return`${this.password}abc`
}

User.prototype.changeUser=function(){
    return`${this.username.toUpperCase()}`
}

const tea=new User("tea","tea@gmail.com",123)
    
console.log(tea)
console.log(tea.encryptPassword())
console.log(tea.changeUser())
