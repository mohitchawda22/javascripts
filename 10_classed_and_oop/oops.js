const user={
    username:"mohit",
    loginCount:0,
    signedIn:true,

    getUSerDetails:function(){
        // console.log("gpt user detail from database");
        console.log(`username${this.username}`);
    }

    
}

// console.log(user.username);
// console.log(user.getUSerDetails());


// const promiseOne=new Promise()
// const date= new Date()

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    
    this.greeting=function(){
        console.log(`welcome${this.username}`);
    }

    return this
}

const user1=new User("mohit",12,"true")
const user2=new User("chai",13,false)
console.log(user1.greeting()) 
console.log(user1)
console.log(user2);

 