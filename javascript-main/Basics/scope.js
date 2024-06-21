let user = "udayraj";
function outer() {
    let user2 = "Rajvardhan";

    function inner() {
        let user3 = "ramesh";
        console.log(user3);
    }
    console.log(user2);
    inner();
}
outer();

if (true) {
    const username = "Udayraj";
    if (username === "Udayraj") {
        const login = "logged in";
        console.log(username + login);
    }
    // console.log(login);
}
// console.log(username);

console.log(addone(4));
function addone(num) {
    return num + 1;
}

//variable can store even function, object
//its called expression also

//console.log(addTwo(4)); // its get error now
const addTwo = function (num) {
    return num + 2;
};
