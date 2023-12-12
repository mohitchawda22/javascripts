//const tinder= new object()
const tinderuser={}

tinderuser.id="12334"

tinderuser.isLoggedIn=false
tinderuser.name="mohit"
//console.log(tinder);

const regularUser={
    email:"mohit@gmail.com",
    fullname:{
    firstname:"mohit",
    lastname:"chawda"
}
}
console.log(regularUser.fullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}
//const obj3= Object.assign(obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users=[{
    email:"mohit@gmail.com",
    id:'1'
},
{
    email:"mohit@gmail.com",
    id:'2'
},
{
    email:"mohit@gmail.com",
    id:'3'
},
]

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty());