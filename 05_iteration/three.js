//for of 

let arr=[1,23,,4,5,7,3]   //except an array it will run on strings also
for (const i of arr) {
    console.log(i);
}   

//maps

let map=new Map()
map.set("IN","india")
map.set("us","usa")
map.set("fr","france")


//printing map value or keys value using for of loop

for (const [key,value] of map) {
    console.log(key+":-"+value);
}

//for in loop...

const MyOBject={
    js:"javascript",
    py:"python",
    r:"reactjs"
}

for (const key in MyOBject) {
    console.log(`${key}:${MyOBject[key]}`);
    }

//forEach loop..

const array=["py","saf","faaf","qw","sda"]

array.forEach(element => {    ////=> this function is called calledback function
    console.log(element);
});