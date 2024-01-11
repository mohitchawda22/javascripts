function mutliply(num){
    return num*5
}

mutliply.power=2

console.log(mutliply(5));
console.log(mutliply.power);
console.log(mutliply.prototype);


function createUser(username,score){
    this.username = username; 
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}

const chai =new createUser("chai",25)
const tea=new createUser("tea",250)

chai.printMe()