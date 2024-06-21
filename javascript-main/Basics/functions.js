function sayMyName() {
    // function defination
    console.log("Udayraj");
}

sayMyName //Its is a refernence
sayMyName();

function addtwonumbers(a,b){
     console.log(a+b);
}
addtwonumbers(4,6);
 
function addition(a,b){
    return a+b
}

console.log(addition(4,3));

function name(username="enter user name"){

        result = `your name is ${username}`
        return result
}
console.log(name("udayraj"))



function calculatecart(val1, val2, ...num1){
    return num1
}

console.log(calculatecart(10,42,78,85))

//  const user = {
//     name:"udayraj",
//     age:21
//  }


 function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`)
 }

//  handleobject(user);

//its a function with an object containing properties name and age
 handleobject({
    name:"udayraj",
    age:21
 })


 let newArray = [12, 52, 54, 55]

 function returnsecondvalue(getvalue){
    return getvalue[1]
 }

 console.log(returnsecondvalue(newArray));