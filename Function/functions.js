// ?

function greetUser(templateMsg, userName) {
  console.log(templateMsg() + userName);
}
function myFunc() {
  return "Good Afternoon, ";
}
greetUser(myFunc, "Andy");

// ? Setting A Function As A Return Value

function outerFunction() {
  return function () {
    console.log("Hello from inner function");
  };
}
const hehe = outerFunction(); // The returned function will be stored as hehe's value
hehe(); // Calling the inner function stored in hehe
outerFunction()(); // Immediately calls the inner function, useful one-liner.
// Both will do the same thing

// ? Immediately-Invoked Function Expressions

var myName = (function () {
  var name = "Andy";
  return name;
})();
console.log(name); // Will throw an error.
console.log(myName); // Will output "Andy" to the console

// ? Function Closures

function outerFunc() {
  var name = "Andy";
  function innerFunc() {
    console.log(name);
  }
  return innerFunc;
}
var myFunc = outerFunc();
myFunc();


