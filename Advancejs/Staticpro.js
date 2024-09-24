class user{
    constructor(username ){
        this.username=username
    }
  
    logME(){
        console.log(`username:${this.username}`);
        
    }

    static   createId(){
        return`123`
    }
}

const sant=new user("aravind");
//console.log(sant.createId())

class Teacher extends user{
    constructor(email ,username){
       super(username)
        this.email=email
    }
}

const iphone=new Teacher("Sant","iphone@gmail.com")

console.log(iphone.createId())
