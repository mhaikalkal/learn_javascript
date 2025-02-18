function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 2));
console.log(add(1)); // argument kosong otomatis menjadi undefined oleh javascript

function multiplyTest(num1, num2) {
  console.log(arguments);
  return num1 * num2;
}

// bisa kita isi lebih dari yang dibutuhkan.
console.log(multiplyTest(5, 5, 6, 9)); // yang tidak dibutuhkan masuk ke object arguments

function multiply(args) {
  console.log(args); // dia cuma ambil argument pertama, karena kita cuma terima 1
  let total = 1;
  for (let num of arguments) {
    total *= num;
  }
  return total;
}

console.log(multiply(5, 7, 1, 10)); // 350
