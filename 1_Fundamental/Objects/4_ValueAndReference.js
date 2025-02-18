// Primitive Variables
let a = 20;
let b = a;
a = 100;
console.log(a); // hasil 100
console.log(b); // hasil 20

// karena primitive value / variable, dipassing secara copy. maksudnya di analogikan gini
// di word kita mengetik "saya makan"
// lalu kita copy si "saya makan"-nya
// kita paste, di excel
// terus kita ubah "saya makan"-nya di word.
// berarti si b tetep "saya makan" karena udah copy duluan sebelum diubah.

// Object
let i = { value: 20 };
let j = i;

i.value = 100;

console.log(i.value); // hasil 100
console.log(j.value); // hasil 100

// karena copy passing value di object merupakan ambil didalam memory.
// mereferensi memory yang sama didalam object.
// misal variable i tinggal di rumah A
// terus dia pindah ke rumah C
// kita nanya alamat ke tetangga mengenai si i.
// Tetangga ya ngasih alamat rumah C, bukan alamat rumah A
