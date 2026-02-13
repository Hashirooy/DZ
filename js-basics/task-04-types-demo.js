/*
Demo: не меняй код.
Объясни разницу между примитивами/объектами и ловушки typeof.
*/

console.log("=== Task 04 Demo ===");

let score = 10;
let nextScore = score;
nextScore += 5;
console.log("primitive copy:", score, nextScore);

const user = { name: "Oleg" };
const userCopy = user;
userCopy.name = "Olga";
console.log("object shared reference:", user.name, userCopy.name);

console.log("typeof null:", typeof null);// object
console.log("typeof []:", typeof []); // object
console.log("Array.isArray([]):", Array.isArray([])); // true
console.log("typeof (() => {}):", typeof (() => {})); // function
