/// dates

let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

let mycreateddate= new Date(2023,2,24)
let mycreateddate1= new Date("2023-01-14")


console.log(mycreateddate1.toDateString());
console.log(mycreateddate.toDateString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));
