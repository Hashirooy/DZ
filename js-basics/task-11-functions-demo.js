/*
Demo: не меняй код.
Объясни различия function declaration и function expression.
*/

console.log("=== Task 11 Demo ===");

console.log(sum(2, 3));

function sum(a, b = 0) {
  return a + b;
}

try {
  console.log(multiply(2, 3));
} catch (error) {
  console.log("multiply before init:", error.name);
}

const multiply = function (a, b) {
  return a * b;
};

function logValue(value) {
  console.log("logged:", value);
}

logValue(sum(10));
