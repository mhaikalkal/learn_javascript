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
