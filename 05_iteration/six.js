//reduce function

const Mynums=[1,2,3,4,5,6,7,8,9]

const Mytotal= Mynums.reduce((acc,currval)=>{
    return acc + currval;
},0)

console.log(Mytotal);

const shoppingCart=[
    {
    name:'apple',
    price: 1.2
    },
    {
    name:'mango',
    price: 1.2
    },
    {
    name:'grapes',
    price: 1.2
    }
]

const total=shoppingCart.reduce((acc,fruits)=>acc+fruits.price,0)
console.log(total);