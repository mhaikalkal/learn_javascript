// Factory Functions
// memakai camel case, misal : helloWorld, maxNumber
const human = {
  name: "Max",
  race: "Chinese",
  age: 36,
  heightInCm: 174,
  eat: function () {
    console.log("makan");
  },
  sleep() {
    console.log("zzz");
  },
};

const anotherHuman = {
  name: "Del",
  race: "White",
  age: 23,
  heightInCm: 162,
  eat: function () {
    console.log("makan");
  },
  sleep() {
    console.log("zzz");
  },
};

function newHuman(name, race, age, heightInCm) {
  return {
    name: name,
    race: race,
    age: age,
    heightInCm: heightInCm,
    eat: function () {
      console.log("makan");
    },
    sleep() {
      console.log("zzz");
    },
  };
}

// membuat object baru
const yetAnotherHuman = newHuman("Angel", "African", 246, 58);
console.log(anotherHuman);
console.log(yetAnotherHuman);

// Constructor function
// menggunakan PascalNotation, misal BuatManusia, BuatKendaraan
function Human(name, race, age, heightInCm) {
  // bawaannya udah ada
  // this = {};
  // Object Literal, yang artinya this ini merupakan object Human (Object itu sendiri)

  this.name = name;
  this.race = race;
  this.age = age;
  this.heightInCm = heightInCm;
  this.eat = function () {
    console.log("makan");
  };
  this.sleep = function () {
    console.log("zzz");
  };

  // return this;
}

// membuat object baru tinggal menggunakan keyword "new"
const yetYetAnotherHuman = new Human("Beru", "Ant", 2, 203);
console.log(yetYetAnotherHuman);
