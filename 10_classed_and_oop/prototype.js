// let MyName="mohit       "

// console.log(MyName.truelength);



let MyHeros=["thor","ironman"]


let heropower={
    thor:"hammer",
    ironman:"suit",

    getironmanpower:function(){
        console.log(`ironman power is${this.ironman}`);
    }
}

Object.prototype.mohit=function(){
    console.log(`mohit is present in all object`);
}

heropower.mohit() 

//inheritance

const user={
    name:"mohit",
    email:"jghgdga@gmail.com"

}

const teacher={
    makevideo:true
}

const teachingsupport={
    isavial:false
}

const tasupport={
    makeass:"js ass",
    fulltime:true,
    __proto__:teachingsupport
}


teacher.__proto__=user

//modern syntax

Object.setPrototypeOf(teachingsupport,teacher)


let anotherusername="mohitchawda"

String.prototype.truelenght=function(){
    console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`truelenght is ${this.trim().length}`);
}

anotherusername.truelenght()
"mohit".truelenght()
"icetea".truelenght()