// sengaja bikin 2 import di person.js
import { Person, Human } from "./person.js";

// kalau cuma ada satu object yang mau di export, kita bisa kasih "export default"
// nanti, file lain yang mau import student.js, maka dia gausah pake {}
// file lain import nya == import Student from "./student.js";
export default class Student extends Person {
  constructor(name, age, degree = "S.Kom") {
    super(name, age);
    this.degree = degree;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

export function ExStudent() {
  // blabla
}
