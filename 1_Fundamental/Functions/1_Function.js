// function declarations
function sayHi() {
  console.log("Hello Declarations");
}
sayHi();

// function expressions
let sayHello = function () {
  // anonymous function yang di assign di variable
  console.log("Hello Expressions");
};
sayHello();

let greeting = function sayGreeting() {
  console.log("Hello");
};
greeting(); // greeting disini mereference si sayGreeting
