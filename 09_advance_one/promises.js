// fetch('hhtps://something.com').then().catch().finally()


const promiseOne=new Promise(function(resolve,reject){
    //do an ansyn task
    //Db calls,cryptography,network
    setTimeout(function(){
        console.log("asyn task is completed");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task2");
        resolve()
    },2000)
}).then(function(){
    console.log("async 2 resolved")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("aysn task 3 consumed");
    resolve({username:"mohit",email:"mohitchawda22j@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"mohit",password:"123"})
        }else{
            reject("error:")
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log((user));
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>
    console.log("the promise is either resolved or rejected")
)


const promiseFive=new Promise(function(reslove,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject("error: js went wrong")
        }
    },1000)
})

async function consumePormiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}

consumePormiseFive()


async function getAllUSer(){
    try {
        const response=await fecth('')
        const data=response.json()
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUSer()

fetch('')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))