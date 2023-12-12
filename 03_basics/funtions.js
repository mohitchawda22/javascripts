function sayMyName(params) {
    console.log("mohit")
}
//sayMyName()

function addTwoNum(num1,num2) {
    console.log(num1+num2);
}

addTwoNum(3,5)

// function (params) {
    
// }
function userLogin(username) {
    if (username==undefined) {
        console.log("please enter a username");
        return
    }
    return `${username} just loggin`
}
console.log(userLogin())

function calulateCartPrice(...num1) {
    return num1
}

console.log(calulateCartPrice(2,3,4,6));

const user={
    username:"mohit",
    price:199
}

function handleObject(anyObject) {
    console.log(`username ${anyObject.username}and price is ${anyObject.price}`);
}

console.log(user);