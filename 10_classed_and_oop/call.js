function SetUserName(username){
    this.username=username
    console.log("called");
}

function CreateUser(username,email,password){
    SetUserName.call(this,username)

    this.email=email
    this.password=password
}

const chai=new CreateUser("chai","jshjja","123")
console.log(chai);