// Rest parameter and spread operator

//Tanpa rest parameters
// function penjumlahanArray(a, b, c, d, e) {
//   const array = [a, b, c, d, e];
//   let total = 0;
//   array.forEach((item) => {
//     total = total + item;
//   });
//   console.log(total);
// }

// penjumlahanArray(1, 2, 3, 4, 5);

//Dengan rest parameter

// function penjumlahanArray(a, b, c, ...params) {
//   let total = 0;
//   array.forEach((item) => {
//     total = total + item;
//   });
//   console.log(total);
// }

// penjumlahanArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//spread operator:Duplikasi array,menggabungkan array
// const array1 = [1, 2, 3, 4, 5];
// console.log(...array1);
// let array2 = array1;
// array1.push(6);
// console.log(`array1 = ${array1},array2 = ${array2}`);

//concat array
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];

// const combineArray = [...array1, 4, ...array2, ...array3];
// console.log(combineArray);

//Pada objek
// const john = {
//   fulName: "John Doe",
//   age: 32,
//   address: "Manado",
// };

// john = {
//   ...john,
//   job: "Teacher",
// };
// console.log(john);

// let peter = {
//   fullName: "Peter",
//   age: 35,
// };

// const students = { ...john, ...peter };
// console.log(students);

//Destructuring
let student = ["<NAME>", "<EMAIL>"]; //deklarasikan variabel sebagai array yang berisi nama dan email dari
console.log(`${student[0]},${student[1]}`);
