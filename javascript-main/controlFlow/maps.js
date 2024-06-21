const num = [1,2,3,4,5,6,7]

// const new_nums = num.map((num)=>{return num+10})
// console.log(new_nums);

const numbers = num
                .map((num)=>num*10) 
                .map((num)=>num+1)
                .filter((num)=> num >= 50)
console.log(numbers);