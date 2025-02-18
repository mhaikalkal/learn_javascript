// REST Operator => {...}
function multiply(...args) {
  console.log(args);
  return args.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
}

console.log(multiply(5, 4, 5));

// Jika ingin menggunakan rest operator untuk function atau argument,
// Pastikan bahwa rest operator diterima paling belakang. Misal:
// function add(num1, num2, num3, ...nums) harus selalu dibelakang
function multiplyAdv(multiplier, ...nums) {
  return nums.map((num) => num * multiplier);
}

console.log(multiplyAdv(5, 2, 3, 4, 5));
