const workers = [
  { id: "1", name: "Haikal", isWorking: true },
  { id: "2", name: "Monika", isWorking: true },
  { id: "3", name: "Jeb", isWorking: true },
  { id: "4", name: "Xin", isWorking: false },
];

// function biasa kan kaya gini ya, agak panjang
const activeWorkers = workers.filter(function (workers) {
  return workers.isWorking;
});
console.log(activeWorkers);

// kalo arrow function cuma 1 baris bisa kaya gini.
const nonActiveWorkers = workers.filter((workers) => !workers.isWorking);
console.log(nonActiveWorkers);

// kalo ada parameter yang harus diisi maka ya pake (param)
const cube = function (side) {
  return side ** 3;
};
console.log(cube(4));

// kalo gak harus diisi parameter maka () kosong
const calculatedCircle = () => console.log(Math.PI * 7);
calculatedCircle();

// Arrow Function and .this
// Catatan, setTimeout itu global variable. meskipun dimasukin ke object dia akan return via global var
const human = {
  name: "Doe John",
  greet: function () {
    setTimeout(function () {
      console.log(
        `Tanpa Arrow Function di Object: Hello, my name is ${this.name}`
      );
    }, 1000);
  },
};
human.greet();

const person = {
  name: "John Doe",
  greet: function () {
    setTimeout(() => {
      console.log(
        `Dengan Arrow Function di Object: Hello, my name is ${this.name}`
      );
    }, 1000);
  },
};
person.greet();
