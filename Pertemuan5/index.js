// //Array javascript

// let students = ["Josh", "Bob", "Mark"];
// let numbers = [1, 2, 3, 4];

// let john = ["John", "Doe", 34, true];

// console.log(students);
// console.log(numbers);
// console.log(john);
// console.log(john.length);

// //Array index
// console.log(students[1]);
// students[1] = "Jiga";
// console.log(students);
// //Menampilkan string terakhir dalam sebuah string
// console.log(students[students.length - 1]);

// //ToString
// console.log(john.toString());
// //Join
// console.log(john.join(" "));
// //Pop
// john.pop();
// //push menambahkan string di bagian akhir
// john.push("Good morning");
// console.log(john);
// john.shift();
// console.log(john);
// john.unshift("Hellos");
// console.log(john);
// //splice :menambahkan string di bagian tengah
// john.splice(2, 0, true);
// console.log(john);
// //slice
// let john2 = john.slice(2, 4);
// console.log(john2);
// //Concat
// let combineArray = john.concat(john, numbers);
// console.log(combineArray);

// object
// Didalam objek bisa memiliki objek ataupun fungsi
const john = {
  firstName: "Josh",
  lastName: "Dom",
  age: 22,
  isMarried: false,
  grade: [10, 20, 30],
  address: {
    city: "Manado",
    province: "Sulut",
    postalCode: "2024814",
  },
  sayGreetings: function () {
    console.log("Hellows");
  },
};

// console.log(john.firstName);
// console.log(john.grade)[2];
// console.log(john.address.city);
// console.log(john.sayGreetings);

//Bracket notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"]);
// console.log(john[sayGreetings]);
// john.job = "Teacher";

//Array object
let students = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Josh",
  },
  {
    id: 3,
    name: "Doe",
  },
];
// students.forEach (function (item){
// console.log(object);
// )};

// let output = students.map (functioin (item){
//     return item.name === "Petter";
// });

// console.log(output);
