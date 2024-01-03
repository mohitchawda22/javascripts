const numbers=[1,2,3,4,5,6,7,8,9]

const Mynums= numbers.map((nums)=>{             // if we using the {} i.e scope we have to use the return keyword
    return nums+10                              //  in order to print the output.
})

const Mynums2=numbers
                    .map((num)=>num*10)         // we also use more callback function along with callback fn.
                    .map((num)=>num+1)
                    .filter((num)=>num>=40)
                    
console.log(Mynums);
console.log(Mynums2);