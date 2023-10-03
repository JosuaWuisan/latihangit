// console.log(greetings("Josh")); //argument
// //Javascript function

// //cara pertama panggil function
// // function greetings(){
// //     return "hello";
// // }
// //cara kedua panggil function

// const age = 17; //global
// console.log(age); //local
// const greetings = function (fulName) {
//   return "hello";
//   console.log(age); //local
//   const job = "teacher";
//   if (job === teacher) {
//     const address = "Manado"; //blok scope
//   }
// };

//IIFE (Immediately Invoked Function Expression)
//Anonymous function
(function () {
  console.log("hello IIFE");
})();

function createGreetings(name, callback) {
  const greetings = "Hello" + name;
  callback(greetings);
}

function logGreetings(greetings) {
  console.log(greetings);
}

createGreetings("Josh", logGreetings);
