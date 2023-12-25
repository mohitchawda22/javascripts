// for of 

// let arr=[1,23,,4,5,7,3]   //except an array it will run on strings also
// for (const i of arr) {
//     console.log(i);
// }   

//maps

let map=new Map()
map.set("IN","india")
map.set("us","usa")
map.set("fr","france")

for (const [key,value] of map) {
    console.log(key+":-"+value);
}