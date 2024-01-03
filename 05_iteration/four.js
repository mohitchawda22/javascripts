const arr=["aad","dsacas","dsas","daa"]

const items=arr.forEach((value) => {
    console.log(value);
});
console.log(items);             /// this function didnt return or console any value it will undefiend.
//because forEach loop didnt return any of the value.


const number=[1,2,3,4,5,6,,7,8,9]

const numb=number.filter((num)=>num>=5)
console.log(numb);                          

//if you are using scope and you should use return keyword.

const numb1=number.filter((num)=> {
    return num>4
})
console.log(numb); 

const books=[{
    title:"book1",genre:"fiction",publish:1981,edition:2004},
    {title:"book2",genre:"comedy",publish:1880,edition:2007}
]

const userbooks=books.filter((bk)=>(bk.genre=="fiction"))
console.log(userbooks);