// Cara mengubah/memanipulasi array
const numbers = [2, 4, 6, 8, 10];
const squaredNumber = numbers.map((num) => num ** 2);
console.log(squaredNumber);

const characters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const charactersUpper = characters.map((char) => char.toUpperCase());
console.log(charactersUpper);

const nums = [4, 5, 6, 9, 10];
const squaredNumWhereEven = nums.map((num) => {
  if (num % 2 === 0) {
    return num ** 2;
  } else {
    return num;
  }
  // sebenernya bisa pake chain method.
  // filer dulu, baru di map
});
console.log(squaredNumWhereEven);

const users = [
  { id: 1, name: "John", email: "johnNy@gmail.com" },
  { id: 2, name: "Samuel", email: "sAMueL22@gmail.com" },
  { id: 3, name: "Negus", email: "NeGusta.GG@gmail.com" },
];

const updatedEmail = users.map((user) => ({
  id: user.id,
  name: user.name,
  email: user.email.toLowerCase(),
  // ...user,
  // email: user.email.toLowerCase()
  // kita gak tau seberapa banyak key => value diobjectnya
  // maka mending pake spreadOperator aja.
}));
console.log(updatedEmail);
