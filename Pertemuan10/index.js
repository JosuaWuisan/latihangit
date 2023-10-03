// //import module
// import {
//   greetings,
//   arrayy,
//   fullName,
//   objectt,
//   john,
//   greetings,
// } from "./ultis.js";
// import selloworld from "./ultis.js";

// console.log(fullName);
// console.log(arrayy);
// console.log(objectt);
// console.log(john);
// greetings();
// console.log(selloworld);

//Synchronous
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3");
// console.log("Proses 4");

//Asynchronous
// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 4000);
// console.log("Proses 4");

// Async terdiri dari 2 :
// Parallel dan concurrency

//Parallel
// console.log("Proses 1");
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 4000);
// console.log("Proses 4");

//concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// });

//Promise
new Promise((resolve, reject) => {
  if (true) {
    //Apa yang dilakuka jika promis fulfilled
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

// 2.Async - await

const consumePromise = () => {
    await new Promise((resolve, reject) => {
        if(true){

        })
}

//Copy dari code classroom jo so bingo wkwkw