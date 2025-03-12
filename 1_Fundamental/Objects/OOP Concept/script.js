const courseLink = `https://www.youtube.com/watch?v=PFmuCDHHpwk&ab_channel=ProgrammingwithMosh`;

// Creating objects
// Factories and Constructors
// Primitives and Reference Types
// Properties
// Private properties
// Getters and Setters

//  Object Literals
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log(`Draw`);
  },
};

circle.draw();

// Gimana kalo kita mau bikin circle baru?
// Factory Function
// Masukin si Object tadi ke sebuah function
function createCircle(radius) {
  return {
    // ini sebenernya radius: radius
    // karena ada fitur di es6, kalo key sama value sama, yaudah tinggal panggil 1 aja
    radius,
    draw: function () {
      console.log(`Draw ${this.radius}`);
    },
  };
}

const circle2 = createCircle(2);
circle2.draw();

// Constructor Function
// harus menggunakan huruf Besar
function Circle(radius) {
  // this ini akan me-return funhction ini yang mana Circle{}
  // console.log("this:", this);

  this.radius = radius;
  this.draw = function () {
    console.log(`Draw ${this.radius}`);
  };
}

const circle3 = new Circle(3);
circle3.draw();

// Value and Reference
console.log("~~Value and Reference");
// Primitive Value
// Dia copy by value
let x = 20;
let y = x;

x = 10;
console.log(x, y); // 10, 20

let number = 10;
function increase(number) {
  number++;
}
increase(number);
console.log(number); // 10

// Objects
// dia copy by reference
let i = { value: 100 };
let j = i;

i.value = 20;
console.log(i, j);

let obj = { value: 10 };
function increased(obj) {
  obj.value++;
}

increased(obj);
console.log(obj); // 10

circle.location = { x: 1 };
const propertyName = "location";
delete circle[propertyName];

// Enumeration
console.log("~~Enumeration");
const circle10 = new Circle(10);

for (let key in circle10) {
  // console.log(key); // radius, draw

  if (typeof circle10[key] !== "function") {
    console.log(`${key}: ${circle10[key]}`); // radius: 10
  }
}

// get all keys, store in an array
const keys = Object.keys(circle10);
console.log(keys);

// check if exist
if ("radius" in circle10) {
  console.log("radius exists");
}

// Abstraction
// Hide the derails, show the essentials
console.log("~~Abstraction");

// mainin variable aja, jadi private properties
function Rectangle(side) {
  // yang mau dihide
  // kita ubah yang awalnya this. menjadi sebuah variable aja.
  let defaultLocation = { x: 0, y: 0 };
  // untuk function, jika ada pemanggilan di method, maka gausah pake this lagi.
  let computeOptimumLocation = function (factor) {
    // blabla
  };

  // yang mau ditunjukin ke public
  this.side = side;
  this.draw = function () {
    computeOptimumLocation(1); // tinggal panggil aja langsung
    console.log("Draw", this.side);
    console.log(defaultLocation);
  };
}

const rect = new Rectangle(10);
console.log(rect);
rect.draw();

// Getter & Setter
console.log("~~Getter & Setter");
function Triangle(side) {
  this.side = side;

  // private property, jadi cuma bisa di akses via getter, dan diubah via setter
  let defaultLocation = { x: 10, y: 100 };

  this.draw = function () {
    console.log("Draw", this.side);
  };

  // get property nya return weh
  Object.defineProperty(this, "defaultLocation", {
    // bawaan javascript
    get: function () {
      return defaultLocation;
    },
    // untuk ubah,
    set: function (value) {
      // coba pake validation
      if (typeof value.x !== "number" || typeof value.y !== "number") {
        throw new Error("Location must be an object with x and y properties");
      }

      if (value.x < 0 || value.y < 0) {
        throw new Error("Location coordinates must be positive");
      }

      defaultLocation = value;
    },
  });
}

const triangle = new Triangle(10);
triangle.defaultLocation = { x: 10, y: 2 };
console.log(triangle);
