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
