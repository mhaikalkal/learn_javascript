const numbers = [1, 2, 3, 4, 5, 6];
const evenNumber = numbers.filter((num) => num % 2 === 0);
console.log(evenNumber);

const employees = [
  { id: 1, name: "Haikal", role: "Developer" },
  { id: 2, name: "Alice", role: "Designer" },
  { id: 3, name: "Monika", role: "Manager" },
  { id: 4, name: "Vivi", role: "Developer" },
];

// tidak mengubah array awal
const developers = employees.filter(
  (employee) => employee.role === "Developer"
);
console.log(developers);
