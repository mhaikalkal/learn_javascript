// gak pake {} karena si student.js dia pake export default, bukan export aja. Maka :
// export default -> import ... from
// export -> import {...} from

// si Student ini export default, si ExStudent ini export biasa.
import Student, { ExStudent } from "./student.js";
// kenapa kita gak import si person?
// karena udah di import di si student.

const andi = new Student("Andi", 20);
console.log(andi);
andi.walk();
andi.study();
