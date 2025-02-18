// every()
let even = [2, 4, 6, 8, 10];
let allEvenNumbers = even.every((even) => even % 2 === 0); // semua syarat benar, maka benar
console.log(allEvenNumbers);

// some()
let numbers = [1, 3, 4, 11, 9];
let hasOneEvenNumber = numbers.some((numbers) => numbers % 2 === 0); // jika ada 1 syarat yang benar, maka benar.
console.log(hasOneEvenNumber);
