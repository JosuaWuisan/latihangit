// //String literal

// let fullName = "John Doe";
// let age = 33;
// let address = "Manado";

// // Halo nama saya John Do,umur saya 33 tahun dan saya tinggal di Manado

// let kalimat5 =
//   "Halo nama saya " +
//   fullName +
//   ",umur saya " +
//   age +
//   " tahun dan saya tinggal di " +
//   address;
// address;

// let kalimat6 = `Halo nama saya ${fullName},umur saya ${age} tahun,dan saya tinggal di ${address}`;

// console.log(kalimat5);
// console.log(kalimat6);

//Arrow function
//===================

// function sayGreetings5(name) {
//   return `Hellow ${name}`;
// }
// console.log(sayGreetings5());
// const sayGreetings6 = () => {
//   return "Hello";
// };
// console.log(sayGreetings6());

// implicit return value

// const sayGreetings6 = (name) => `Hello ${name}`;

// //Pada IIFE
// (() => {
//   console.log("Hellows");
// })();

// () => `Hello`();
// let output1 = (() => `Hellowss`)();
// console.log(output1);

// //Pada callback
// const numbers = [1, 2, 3, 4, 5];

// let output2 = numbers.map((item) => item);
// console.log(output2);

//Default parameter
//----------------

const sayGreetings5 = (fullName) => {
  if (fullName === undefined) {
    fullName = "John Doe";
  }
  console.log(`Hello ${fullName}`);
};

sayGreetings5();

const sayGreetings6 = (fullName = "John Doe") => {
  console.log(`Hello ${fullName}`);
};

sayGreetings6("Josh");
