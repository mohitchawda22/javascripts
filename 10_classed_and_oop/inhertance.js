class User{
    constructor(username){
        this.username=username
    }

    logMe(){
    console.log(`username is ${this.username}`);
}
}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const chai =new teacher("chai","bckjabskfa","123")
chai.addcourse()

const chaimasala=new User("masalachai")

chaimasala.logMe()

console.log(chai instanceof User);