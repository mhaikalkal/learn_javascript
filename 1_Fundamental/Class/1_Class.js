// membuat class
class Person {
  // constructor ini untuk menerima parameter yang dimasukkan ketika kita mau membuat sebuah class
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // method
  walk() {
    console.log(`${this.name} is walking`);
  }
}

// mirip object sih wkwk.
const haikal = new Person("Haikal", 25);
console.log(haikal);
haikal.walk();

// inheritance, jadi seorang student sudah pasti sebuah person.
// ya masa aja student nya ikan jir
class Student extends Person {
  // nyobain pake default value juga si hehe
  constructor(name, age, degree = "S.Kom") {
    // jika ternyata ada parameter masukan untuk membuat classnya sama dengan parent nya,
    // maka kita assign ke super. masukkan variable yang sama dengan parent nya.
    super(name, age);

    // ini parameter yang baru, cuma ada di student, bukan di person.
    this.degree = degree;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

// meskipun kita gak kasih var name didalam class student, kita bisa pake kan?
// meskipun kita gak assign walk di class student, kita bisa pake di si class student ini.
const andi = new Student("Andi", 20);
console.log(andi);
andi.walk();
andi.study();

// Liskov Substitution Principal (LSP)
console.log(`~~Liskov Substitution Principal (LSP)`);
// kita bikin di inheritance nya aja. jadi kita gak bisa bikin secara langsung si Product, tapi kita lihat apa productnya
class Product {
  constructor() {
    // kalu kalian bikin direct kaya :: let hp = new Product(''). gak akan bisa. langsung throw new error
    if (this.constructor.name === "Product") {
      console.log(this.constructor.name);
      throw new Error(`${this.constructor.name} is an abstract class!)`);
    }
  }

  getName() {
    throw new Error(`Method not Implemented`);
  }

  getExpiredDate() {
    throw new Error(`Method not Implemented`);
  }
}

// gak semua product ada expiredDate nya. masa hp ada masa expiredkan?
// maka kita separate, ada product yg bisa expired dan tidak.
class FoodProduct extends Product {
  constructor() {
    super();

    if (this.constructor.name === "FoodProduct") {
      throw new Error(`${this.constructor.name} is abstract class!`);
    }
  }
  getExpiredDate() {
    throw new Error(`${this.constuctor.name} is an abstract class!`);
  }
}

// kita ubah dia extedns ke FoodProduct, bukan direct ke Product lagi.
class Vegetable extends FoodProduct {
  constructor(name, expiredDate = Date.now()) {
    super();
    this.name = name;
    this.expiredDate = expiredDate;
  }

  getName() {
    return this.name;
  }

  getExpiredDate() {
    return this.expiredDate;
  }
}

class Smartphone extends Product {
  constructor(name) {
    super();
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let spinach = new Vegetable("spinach");
console.log(spinach.getName()); // "Spinach"
console.log(spinach.getExpiredDate());
console.log(spinach);

let samsung = new Smartphone("Samsung Galaxy S25+");
console.log(samsung.getName());
// console.log(samsung.getExpiredDate()); // error, karena gak ada masa expired
console.log(samsung);

// inti dari LSP adalah, kita kaya bikin si variable dulu di awal.
// nanti baru kita assign valuenya belakangan. jadi dia kaya di assign di enduser nya aja.

// Dependency Inversion Principle (DIP)
console.log(`~~Dependency Inversion Principle (DIP)`);
// kita bagi engine ke = [diesel, petrol(gas), electric, hybrid]

class Car {
  constructor(engine) {
    // kita bikin class EngineInterface-nya
    // jika engine tidak dikenali oleh class EngineInterface
    if (!(engine instanceof EngineInterface)) {
      throw new Error("Engine must be an instance of EngineInterface");
    }
    // jadi nanti kalo mau bikin class harus melewati EngineInterface extends nya
    this.engine = engine;
  }

  start() {
    this.engine.start();
  } // iife (immediately invoke function expression)
}

// jadi si engine nya itu / templatenya gak usah nge extends Car. jadi buat singgah doang jir
class EngineInterface {
  start() {
    throw new Error("Method not implemented");
  }
}

class DieselEngine extends EngineInterface {
  start() {
    console.log("Diesel engine is starting");
  }
}

class PetrolEngine extends EngineInterface {
  start() {
    console.log("Petrol engine is starting");
  }
}

class ElectricEngine extends EngineInterface {
  start() {
    console.log("Electric engine is starting");
  }
}

class HybridEngine extends EngineInterface {
  start() {
    console.log("Hybrid engine is starting");
  }
}

const dieselEngine = new DieselEngine();
const dieselCar = new Car(dieselEngine);
console.log(dieselCar);
dieselCar.start();
