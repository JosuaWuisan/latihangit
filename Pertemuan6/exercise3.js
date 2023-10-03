//First array
let people = ["Greg", "Mary", "Devon", "James"];

//Use for loop
for (let n = 0; n < people.length; n++) {
  console.log(people[n]); //prints out each element in the array
}

//Use forEach
people.forEach((person) => {
  console.log(person);
});

//Remove Greg
people.shift("Greg");

//Remove James
people.pop("James");

//Add Matt to the front
people.unshift("Matt");

//Add namaSandiri
people.push("Josua");

//Use loop for Mary
for (let n = 0; n < people.length; n++) {
  console.log(people[n]);
  if (people[n] === "Mary") {
    break;
  }
}

//Make copy with array
let copytanpaduanama = people.slice(1, 3);

//Use splice
people.splice(2, 1, "Elizabeth", "Artie");

//Use concat
let denganBob = people.concat("Bob");

//Output akhir.....
console.log(Array);
console.log("=============");
console.log(denganBob);
console.log(" ");
//The object
let programming = {
  languages: ["Javascript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//Add Go dalam array
programming.languages.push("Go");

//Change difficult dengan bracket
programming["difficulty"] = 7;

//Remove jokes key
delete programming.jokes;

//Add key baru dengan dot notasi
programming.isSeru = true;

//Pengulangan bahasa dengan map()
programming.languages = programming.languages.map(
  (languages, index) => `${index} - ${languages}`
);

//Outputnya
console.log(Object);
console.log("=============");
console.log(programming.languages);
