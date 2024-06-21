// singleton created by constructor
// Object.create

//object literals 


const sym = Symbol("key1")

const JsUser={
    name:"udayraj","full name":"Udayraj Ramesh Ghuge",
    [sym]:"mykey1",
    age:21,
    email:"udayraj@google.com",
    lastlogin:["monday","saturday"]
}

const JsUser2={
    name:"rajvardhan",
    age:18
}

console.log(JsUser[sym]);
console.log(JsUser["age"]);
console.log(JsUser.name);

JsUser.email = "udayraj@gmail.com"
console.log(JsUser)
// Object.freeze(JsUser)//now object cannot change 
JsUser.email = "udayraj@microsoft@gmail.com"

const user1 ={...JsUser,...JsUser2}
console.log(user1);

//this kind of values comes from databases
const tinderuser=[
    {
        id:4334,
        name:"udayraj",
        isloggedin:"no"
    },
    {
        id:4244,
        name:"Rajvardhan",
        isloggedin:"no"

    }
]

// console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(Object.hasOwnProperty("name"));

//object destructuring
let course = {
    coursname:"javascript basics",
    price:"bohat jada",
}

let {coursname : user} = course
console.log(user);

