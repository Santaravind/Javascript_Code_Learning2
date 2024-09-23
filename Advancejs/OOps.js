const user={
    username:"Sant",
    password: "2323",
    Loggined: true,

    getdata:function(){
        //console.log(`username:${this.username}`);

    }
}

//console.log(user.username);
// console.log(user.password);

//Constructer prototyping

function users(username,password,isLogin) {
    this.username=username;
    this.password=password;
    this.isLogin=isLogin;

    return this;
    
}

const userOne= new users("Sant",234,true);
const userTwo=new users("Singh",4345,true);

console.log(userOne);
console.log(userTwo);
//use new keywords create a empty object 
//a constructer function is create using new key words

