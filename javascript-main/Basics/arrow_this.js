const user = {
  username: "udayraj",
  price: 500,
  welcomeMessage: function () {
    console.log(`${this.username},Welcome to the website ${this.price}`);
    console.log(this);
  },
};
// user.welcomeMessage();//this keyword is refernce variable
// console.log(this);
//for browser this value is window, window has different functons which is used like alert
//and for node environment it value has null

function chai() {
  let name = "udayraj";
  console.log(this.user); //its undefine
}
chai();

const chai1 = function chai() {
  let name = "udayraj";
  console.log(this.user); //its undefine
};
chai1();

const arrowFunction = () => {}; //syntax

const chai2 = () => {
  let user = "rajvardhan";
  console.log(this.user);
};
chai2();

const addTwo = (num1, num2) => num1 + num2; //implicit return

console.log(addTwo(3, 6));

const addMore = (num1, num2) => num1 + num2;
console.log(addMore(3.4, 22));
//if we wrap in curly return is must but for above paranthesses return is not neccessary
const addMore11 = (num1, num2) => ({ names: "udayraj" });
console.log(addMore11());
