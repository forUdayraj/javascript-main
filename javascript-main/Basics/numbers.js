let num1 = 400.11
let num2 = new Number(100)
console.log(num2);
console.log(num1 + num2 );
console.log(num1.toString().length);
console.log(typeof(num1));
let num3 = num1.toFixed();
//toFixed convert the number into string
console.log(typeof(num3));

let hundreds = 10000000000
console.log(hundreds.toLocaleString("en-IN"));
console.log(hundreds.toLocaleString('hi-IN',{
    style: 'currency',
    currency: 'INR'
}));


console.log("Math object");
//+++++++++++++++ Math Object +++++++++++++++ // 
console.log(Math.floor(Math.PI));
console.log(Math);
console.log(Math.abs(-4));//gives absolute values

console.log(Math.ceil(6.89))//gives upper value
//floor gives lower value

console.log(Math.min())

console.log(Math.random());
console.log(Math.floor((Math.random()*100) +1));

