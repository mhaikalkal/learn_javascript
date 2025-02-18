// Jadi function di Object itu cuma read-only, gak bisa diubah.
// jadi cara agar dapat mengubah isi object menggunakan function didalam object itu sendiri, bisa menggunakan get, dan set
let Human = {
  name: "John",
  age: 30,
  nationality: "Brazil",
  get introduction() {
    return `${this.name} is ${this.age} years old and from ${this.nationality}`;
  },
  set introduction(value) {
    let firstParts = value.split(" is ");
    // console.log(firstParts);
    let secondParts = firstParts[1].split(" years old and from ");
    // console.log(secondParts);
    this.name = firstParts[0];
    this.age = parseInt(firstParts[1]);
    this.nationality = secondParts[1].trim();
  },
};

// Bisa ubah isi object menggunakan kalimat
// contoh
console.log(Human.introduction);
console.log(Human);
Human.introduction = "Haikal is 25 years old and from Indonesia";
console.log(Human);
