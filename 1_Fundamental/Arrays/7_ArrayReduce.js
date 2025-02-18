// Reduce is built in method dor array.
// reducing array into single value, it could be anything.

const numbers = [1, 2, 3, 4, 5];
let total = 0;
for (const num of numbers) {
  total += num;
}
console.log(total);

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// 0, di akhir merupakan initial value, atau value awal. karena ini cuma sum, maka nilai awal adalah 0, kalo 1 berarti 1 + isi
// optional diisinya juga. kalo gak diisi diisi otomatis ama dia.
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum);

const words = ["I", "am", "strong"];
const phrase = words.reduce(
  (accumulator, currentValue) => accumulator + " " + currentValue
);
// kaya gini mungkin prosesnya
// step 1 : accumulator = initial value + accumulator
// step 2 : accumulator = accumulator + current value (array index 1)
// step 3 : accumulator = accumulator + current value (array index n...)

console.log(phrase);
