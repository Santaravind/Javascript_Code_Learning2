class user{
     constructor(username){
        this.username=username;
     }  
     logME(){
        console.log(`Username is ${this.username}`)
     }  
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addNewCourse(){
        console.log(`Course allocated ${this.username}`)
    }
}

const chai=new Teacher("Sant","sant@gmail.com","124");

console.log(chai);
chai.addNewCourse();

console.log(chai instanceof Teacher);
console.log(chai instanceof user);

