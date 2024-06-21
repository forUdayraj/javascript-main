let {greet,sub,foo} = require ('./first.js');
// require execute first file
// its just executes the file but not carry over after execute
function add(a,b){
    return a+b;
}

console.log(add(1,3));
console.log(sub(4,3));
