const userEmail = []


//
if (userEmail) {
    console.log("got the email");
    
}
else{
    console.log("don't put the email");
}

//fasly vlaues => false, 0, -0, BigInt 0n, "", null, undefined, NaN
//truth values => "0", "false", " ", [], {}, faunction(){}


const userarray = []

if(userarray.length === 0){
    console.log("array is empty");
}

const emptyobj={}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}


// Nullish Coalescing operator (??)
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 //it cheak the value comes null from databsthser service or other fro o
console.log(val1);
val2 = undefined ?? 10 ?? 15;
console.log(val2);


//Terniary operator
//syntax
//condition ? true : false

const iceTeaPrice= 20;
iceTeaPrice == 20 ? console.log("equal to 20"):console.log("not equal");
