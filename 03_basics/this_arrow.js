const user={
    username:"mohit",
    price:199,

    welcomeMessage: function (params) {
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()

// function chai(params) {
//     let username="mohit"
//     console.log(this);
// }

// chai()

const chai=() => {
    let username="mohit"
    console.log(this);
}

chai()

const addTwo =(num1,num2)=>{
return num1+num2
}

console.log(addTwo(3,4));

//////////or//////////////

const addone = (num1,num2) => (num1+num2)

console.log(addone(2,4))

const myArr= [23,4,5,2]
myArr.forEach()