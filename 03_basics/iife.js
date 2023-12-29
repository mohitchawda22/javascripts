// function hello(){
//     console.log("hello");
// }()     // =>this will give error:


(function hello(){
    console.log("hello");
})();                        // now this will run and this is called IIFE...

( () =>{
    console.log("mohit");
} )();                      // this is how we also create an arrow function too.....

