let a = { value: 10 };
let b = a;
b.value = 1000;
console.log(a);
console.log(b);
// ubah satu variable / value maka yang lain akan ikut, soalnya satu index memory.

let i = { value: 30 };
let j = {};
// salah satu cara clone object / copy object
Object.assign(j, i);
j.value = 400;
console.log(i);
console.log(j);
// ubah satu variable / value dengan "assign" maka yang lain tidak akan ikut, karena jadi variable independent

// Spread Operator
let x = { id: 1, location: "Sukabumi", value: "Megami" };
let y = { ...x, location: "Bandung" }; // copy dan ubah locationnya
y.value = "Sakura"; // ubah value

console.log(x);
console.log(y);
// ubah satu variable / value dengan "...namaObject" maka yang lain tidak akan ikut, karena jadi variable independent
