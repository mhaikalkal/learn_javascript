const dog = {
  name: "Buddy",
  age: 4,
  color: "black",
  bark: function () {
    console.log(`${this.name} barks!`);
  },
};

// loop di array bisa pake for "of"
// loop in objects memakai for "in"
// for (const key in dog) {
//   console.log(dog[key]);
// }

// untuk loop keys nya aja
const keys = Object.keys(dog); // ['name', 'age', ...]
// console.log(keys);

// untuk loop isi values nya aja
const values = Object.values(dog); // ['Buddy', 4, 'black, ...]
// console.log(values);

// untuk loop antara [[key: value], ...] menjadi array di dalam array.
const entries = Object.entries(dog); // ['name': 'Buddy'], ['age': 4]
// console.log(entries);

// jadi cara enumerating object memakai cara array kita bisa pake
// for (const key of keys) {
//   console.log(key);
// }

// for (const value of values) {
//   console.log(value);
// }

for (const entry of entries) {
  console.log(entry);
}
