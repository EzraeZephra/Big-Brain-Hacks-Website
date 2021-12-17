"use strict";

let number = 69; //"let" is variable declaration syntax (dynamic typing & can reassign variables later) [block scoped]
const creationDate = 2021; //"const" variables cannot be changed - must have initial value (use these instead of let to reduce possible bugs)
var job = "programmer"; //old way of defining variables [function-scoped]
const friends = [];
//friends.push(12);

//=== is strict comparison (exactly the same), == is loose comparison (automatic type conversion // can compare strings to numbers)
//typeof function returrns variable type, good for debugging I think

//alert(
//  `  Funny number ${number},
//  Website creation date: ${creationDate},
//  Job: ${job}` //backticks indicate a template string (just use this always lmao) (no need for \n\ on backtick lines)
//);

//const drink = Number(prompt(`How old are you?:`)) >= 21 ? "Beer" : "Milk"; - allows for changing of variable based on conditions in one line
//alert(`${Number(prompt(`How old are you?:`)) >= 21 ? "Beer" : "Milk"}`); //can be slapped into a template string

//ARRAYS: .unshift to add to front, shift removes front, .push to add to end, .length for length, .pop removes end, .indexOf to find specific elements, includes to check if elements exist
const sam = {
  firstName: "Sam",
  lastName: "Ng",
  age: 16,
  job: "student",
  friends: ["Aaron", "Antong", "Alijah"],
};

//can use continue to skip specific conditions.
for (let i = 1; i <= 10; i++) {
  friends.push(i);
}
console.log(friends);

//Math.trunc(Math.random() * 10) + 1 - gives only integers
