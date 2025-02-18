// Hoisting is a process
// That automatically moves all the "function declarations" to the top of their scope before execution

// Declarations
add(2, 4);
function add(num1, num2) {
  console.log(num1 + num2);
}

// Expressions
// sum(1, 3); // error
let sum = function (num1, num2) {
  console.log(num1 + num2);
};
sum(1, 3); // baru bisa diinvoke
