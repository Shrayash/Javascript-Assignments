// Assignment 1
// Q1. Want to find out how old you'll be? Calculate it!

// Store your birth year in a variable.
// Store a future year in a variable.
// Calculate your 2 possible ages for that year based on the stored values. For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.
// Output: "I will be either NN or NN in YYYY", substituting the values.

var birth_year = 1998;
var future_year= 2040;

const c = (a=0,b=0) => b - a ;
const d = (a=0, b=0) => b - a + 1;

console.log("I will be either " + c(birth_year,future_year) +" or "+ d(birth_year,future_year) +" in 2040");
