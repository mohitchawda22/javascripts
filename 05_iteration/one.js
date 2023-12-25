//for 

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
}


for (let i = 0; i < 10; i++) {
    //console.log(`outerloop value ${i}`);
  for (let j = 0; j < 10; j++) {
    console.log(i + "*" + j + "=" + i*j);
  }
}


for (let i = 0; i < array.length; i++) {
    if (i==5) {
        console.log("value 5 detected:");
        break
    }
    console.log(`value of i is: ${i}`);
    
}