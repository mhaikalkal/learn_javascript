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
