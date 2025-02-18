let characters = ["c", "d", "a", "x", "l", "z", "b"];
characters.sort();
console.log(characters);

let employees = [
  { id: 1, name: "Haikal" },
  { id: 2, name: "Monika" },
  { id: 3, name: "Jane" },
  { id: 4, name: "Flo" },
  { id: 5, name: "Hadi" },
];

// characters itu berupa angka di ASCII, huruf kapital < huruf kecil.
// maka lebih baik jika kita lowercase aja sebelum sort

employees.sort((a, b) => {
  const lowercaseA = a.name.toLowerCase();
  const lowercaseB = b.name.toLowerCase();

  if (lowercaseA > lowercaseB) return 1; // Artinya A datang seudah B
  if (lowercaseA < lowercaseB) return -1; // Artinya A datang sebelum B
  return 0;
});

console.log(employees);
