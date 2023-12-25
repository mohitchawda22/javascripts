///if loop


const isUserLoggedIn=true
// if (isUserLoggedIn) {
//     console.log("hello");
// } else{
//     console.log("not logged in");
// }
// const balance=2000
// if (balance>1000) console.log("okkk");       // It will run because it has implicit scope.

const DebitCard=true
if (isUserLoggedIn && DebitCard) {
    console.log("hello user!");
} else{
    console.log("sorry, you can't do that!");
}