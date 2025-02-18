const fruits = ["banana", "apple", "starfruits", "jackfruits"];

// array modifier add
// menambah element di akhir array
fruits.push("grape");
console.log(fruits);

// menambah element di awal
fruits.unshift("lemon");
console.log(fruits);

let numbers = [1, 2, 3, 4, 5, 6, 7];

// array modifier delete
// menghapus isi array paling terakhir
const lastElement = numbers.pop();
console.log(lastElement); // mengubah arraynya, bukan membuat array baru
console.log(numbers);

// menghapus isi array paling awal
const firstElement = numbers.shift();
console.log(firstElement); // mengubah arraynya, bukan membuat array baru
console.log(numbers);

// menghapus array yang kita targetkan
const targetElement = numbers.splice(1, 3); // kita menghapus (3 element dimulai dari index ke 1).
// jika splice(4, 2), maka menghapus 2 element (2 element dimulai dari index ke 4)
console.log(targetElement); // membuat array baru dari object yang dihapus.
console.log(numbers);

// menghapus semua isi array
numbers = [];
// numbers.splice(0, numbers.length);
// numbers.length = 0
console.log("damn " + numbers);

// combine and slicing arrays
const exNumbersA = [1, 2, 3];
const exNumbersB = [4, 5, 6];

const combinedArray = exNumbersA.concat(exNumbersB);
console.log(combinedArray);

// ambil array index dari 0 sampai 4 (awal Akhir)  (membuat array baru, tidak memengaruhi array awal)
const firstSlice = combinedArray.slice(0, 4);
console.log(combinedArray);
console.log(firstSlice);

// spread operator
const combinedArraySpread = [...exNumbersA, 90, ...exNumbersB, 8];
console.log(combinedArraySpread);

const firstSliceSpread = [...combinedArraySpread].slice(0, 5);
console.log(firstSliceSpread);

let i = [1, 2];
let j = [...i];

console.log(j);

// iterate over arrays
// for of
for (const angka of combinedArraySpread) {
  console.log(angka);
}

// forEach()
// combinedArraySpread.forEach((number) => console.log(`${number}`));
