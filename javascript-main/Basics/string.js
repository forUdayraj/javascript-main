let user = "udayraj"
let user2 = "vardhan"
let user3 ="  ramesh  "
console.log(user + user2)

//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings
//string interpolation with embedded expressions, and special constructs called tagged templates. 
console.log(`my name is ${user.toUpperCase()} and brother name is raj${user2.toUpperCase()}`)
let a = 10
let b = 3
console.log(`addition of a and b is ${a + b}`)

console.log(user.toUpperCase())//to upper case
let z = user.charAt(2)// giver character at the index value
let variable = user.indexOf("r")// gives index we can save the values in variable so use it more further
console.log(variable)
console.log(z.toUpperCase())
console.log(user3)
console.log(user3.trim())
console.log(user.__proto__)
