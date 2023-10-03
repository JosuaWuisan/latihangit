// First array
let people = ["Greg", "Mary", "Devon", "James"];

//Using for-loop
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

//Using forEach
people.forEach((person) => {
  console.log(person);
});

//Removing Greg
people.shift("Greg");

//Removing James
people.pop("James");

//Adding Matt to the front
people.unshift("Matt");

//Adding myname
people.push("Josua");

//Using loop for Mary
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

//Make copy with array
let copywithout = people.slice(1, 3);

//Using Splice
people.splice(2, 1, "Elizabeth", "Artie");

//Using concat
let withBob = people.concat("Bob");

console.log(withBob); // Final Result
