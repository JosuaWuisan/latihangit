// Starting object
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//Adding Go to the end array
programming.languages.push("Go");

//Changing difficult with bracket
programming["difficulty"] = 7;

//Removing key jokes
delete programming.jokes;

//Add a new key using dot notation
programming.isFun = true;

//Iterate through languages using map()
programming.languages = programming.languages.map(
  (language, index) => `${index} - ${language}`
);

//Output
console.log(programming.languages);
