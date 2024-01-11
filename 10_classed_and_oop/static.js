class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const mohit=new User("mohit")
// console.log(mohit.createId());

class teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}


const iphone=new teacher("iphone","jhhvjhva")
console.log(iphone.createId());

