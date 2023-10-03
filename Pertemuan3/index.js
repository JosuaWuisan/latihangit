//Variabel
//Using let and const

let firstName = "Josh Doe"; //string variable
let age = 30; //number variable
let isActive = true; //Boolean variable

console.log(firstName); //print output
console.log(isActive); //print output
console.log(age); //print output

//Operator

let result = "num1 + num3";
num1 = 22;
num2 = 38;
console.log(num1 + num2);

//String operator
let firstNama = "Joe";
let lastName = "Doe";

let fullName = firstNama + lastName;
console.log("Hello my name is ", firstNama + " " + lastName);

//Relational operator
let num3 = "6";
let num4 = 6;
console.log(num3 === num4); //Hasil outputnya false karena menggunakan 3 sama dengan,
//karena mengecek nilai dan tipe datanya

//Ternary operator
let ageUmur = 18;
//Kondisi yang ditulis dalam satu baris saja
let isEligible = ageUmur >= 17 ? true : false;
console.log(isEligible);

console.log("------------Batasan----------------");

//Javascript function

//Fungsi awal
function greetings(fulName) {
  //console.log("Hello");
  return "Hello world " + fulName;
}
//Panggil fungsi
console.log(greetings("Josh Doe"));
//greetings();
