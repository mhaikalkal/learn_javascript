function maxNum(numOne, numTwo) {
  return numOne >= numTwo ? numOne : numTwo;
}

console.log(maxNum(4, 5));

let numbers = [3, 12, 84, 15, 50, 1, 20, 31, 1, 9, 10, 100, 101, -2, 28];
function fizzBuzz(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result += `${i}. FizzBuzz\n`;
    } else if (array[i] % 3 === 0) {
      result += `${i}. Fizz\n`;
    } else if (array[i] % 5 === 0) {
      result += `${i}. Buzz\n`;
    } else {
      result += `${i}. ${array[i]}\n`;
    }
  }

  return result;
}

console.log(fizzBuzz(numbers));
