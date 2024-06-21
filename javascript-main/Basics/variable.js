const accountId=4562
let nama = "udayraj"
var age = 21

// console.log(accountId)
// console.log(nama)
// console.log(age)
//prefer not to user var keyword to assign a variable
//user let because avoid block scope and functional scope conflict
// we cannot reassign a variable of const  S
console.table([accountId,nama,age])


const accountId2 = 144553
let accountEmail = "for.udayraj.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId2);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])