let numbers = [1, 2, 3, 4, 5];
const joinedNumbers = numbers.join("||"); // argument nya adalah pemisahnya
console.log(joinedNumbers);

const courseName = "Belajar Javascript Bagi Pemula di Tahun 2025";
const lowerCaseCourseName = courseName.toLowerCase();
const parts = lowerCaseCourseName.split(" "); // argument nya adalah pembaginya karena diatas mau kita bagi per "spasi" maka pake spasi
console.log(parts); // return sebuah array yang terbagi per argument split.
const urlSlug = parts.join("-");
console.log(urlSlug);

// daripada banyak code kebuang kaya diatas, mending di chain method aja
const urlSlugMethodChain = courseName.toLowerCase().split(" ").join("-");
console.log(urlSlugMethodChain); // its the same thing
