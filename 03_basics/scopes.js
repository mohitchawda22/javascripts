let a=300

if(true){
    let a=10
    const b =20
    //var c=19
    console.log("inner:",a)
    console.log("inner:",b)
}

// for (let i = 0; i < array.length; i++) {
    
// }

console.log(a);
// console.log(b);
// console.log(c);

function one(params) {
   const username="mohit"

   function two(params) {
    const website="youtube"
    console.log(username);
   }
   //console.log(website);

   two()
}
one()


if(true){
    const username="mohit"
    if(username==="mohit"){
        const website ="youtube"
        console.log(username+website)
    }
}

console.log(addone(5))
function addone(num){
    return num+1
}


//////hoisting concept///////
console.log(addtwo(5)) ///=> this will not give any output this throws an error because of hoisting or scope
const addtwo=function(num) {
    return num +1
}

