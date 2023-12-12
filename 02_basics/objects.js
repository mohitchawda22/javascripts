///singleton objects////

/// objects literals

const mySm= Symbol("key1")
const jsUser={
    name:"mohit",
    roll_no:"1",
    phone:827662829,
    emial:"mohit@GMAIL.COM",
    [mySm]:"key1"
}

console.log(jsUser);/// prints all the entries
console.log(jsUser["emial"]);
console.log(jsUser[mySm]);

jsUser.greeting = function(){
    console.log(`hello jsuser , ${this.name}`);
}

console.log(jsUser.greeting());