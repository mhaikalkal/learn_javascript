/// You can add properties in object
const person = {
  name: "Steven Makarov",
};

person.nickname = "Steve";
person["mothersName"] = "Baba";
person["FathersName"] = "Yaga";
delete person.FathersName;

console.log(person); // Output: { name: "Steven Makarov", nickname: "Steve", mothersName: "Baba" }
person.eat = function (food) {
  console.log(`${person.name} eating ${food}`);
};
person.eat("Burger");

// let haikal = { name: "Haikal", nickname: "kal", father: "Iman" };
let haikal = "my name is haikal";
anotherNewPerson = Object.create(haikal);
console.log(anotherNewPerson);
