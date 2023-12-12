const myArr=[0,1,2,3,4,5]
const myHeros= ["ironman","superman"]

console.log(myArr);

///// array methods/////////

myArr.push(6)
myArr.pop()
myArr.unshift(0) //=>shifts the value on the beining
myArr.shift()  

console.log(myArr.includes());
console.log(myArr.indexOf());

const newArr = myArr.join()
console.log(myArr);

console.log("A",myArr);
const myn1= myArr.slice(1,3)
console.log(myn1);

console.log("B",myArr);
const myn2= myArr.slice(1,3)
console.log(myn2);

const marvel=["thor","ironman","spiderman"]
const dc=["superman","aquaman","wonderman"]

const Heros=marvel.push(dc)

console.log(Heros);