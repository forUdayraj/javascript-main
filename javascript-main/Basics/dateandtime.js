let useDate = new Date();

console.log(typeof(useDate))
console.log(useDate)
console.log(useDate.toDateString())
console.log(useDate.toLocaleDateString())

let newdate = new Date();
let a = newdate.toLocaleString("default",{
            weekday : "long"
})
console.log(a)//An object that contains one or more properties that specify comparison options.
console.log(newdate.toLocaleString("hi-IN",{
    weekday:"long",
    era : "long"
}))
console.log(useDate.getMonth()+1);

//date nad time use in applications such as quiz and realtime booking applications where date and time playes crucial part
