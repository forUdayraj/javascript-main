// Immediately Invoked Function Expression (IIFE)

//normal function
function one(){
    console.log("DB CONNECTED")
}
one();

//named IIFE
(function chai(){
    console.log("connected");
})();
//immedately execution
//to avoid global scope pulution global variable

//unnamed IIFE
( coffe = () => console.log("IIFE in arrow function"))();

//parameter unnamed IIFE
( names = (names) => console.log(`taking parameter as name ${names}`))("udayraj");