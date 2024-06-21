// array

let arr = [3, 5, 6, 7, 5];
let heros = ["ironman", "Captain America"];
let dc = ["batman", "flash"];
let arr2 = new Array(3, 5, 6, 6, 3, 3);

console.log(arr);
console.log(heros);
console.log(arr2);

// console.log(arr[3]);

//array methods

arr.push(4);
heros.push("black widow");
arr2.pop();
console.log(arr);
console.log(heros);
console.log(arr2);

console.log(arr.includes(3));
console.log(arr.shift());

//spread operator is works as concat() function
let allHeros = [...heros, ...dc];
console.log(allHeros);

// console.log(myArr[1]);

// Array methods

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr);
// console.log(myn2);
