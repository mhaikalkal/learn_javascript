// String
console.log("1" + "1"); // 11
console.log("1" - "1"); // 0
console.log("1" * "1"); // 1
console.log("1" / "1"); // 1

console.log("\n");

console.log("1" + 1 + "1"); // 111
console.log("1" + 1 - "1"); // 10
console.log("1" - 1 - "1"); // -1
console.log("1" - 1 + "1"); // 01

console.log("\n");

console.log("1" + "1" + 1); // 111
console.log("1" + "1" - 1); // 10
console.log("1" - "1" - 1); // -1
console.log("1" - "1" + 1); // -1

console.log("\n");

console.log("A" + 1); // A1
console.log("A" - 1); // NaN
console.log("A" / 1); // NaN

console.log(true + 4); // 5
console.log(true - 4); // -3

console.log(false + 9); // 9
console.log(false - 9); // -9

console.log(null + 1); // 1
console.log(null - 1); // -1
console.log(null * 2); // 0
console.log(null == 0); // false

console.log(undefined + 1); // NaN
console.log(NaN + 1); // NaN

const a = { name: "Haikal" };
const b = { name: "Fajr" };
const c = { name: "Luck" };

a[b] = { name: "GOD" };
console.log(a); // { name: 'Haikal', '[object Object]': { name: 'GOD' } }
console.log(a[b]); // { name: "GOD" }
