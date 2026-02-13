/*
Demo: не меняй код.
Объясни разницу между for...in и for...of на массиве с дырками и доп. свойствами.
*/

console.log("=== Task 10.2 Demo ===");

const items = [];
items[0] = "alpha";
items[2] = "gamma";
items.extra = "meta";

for (const key in items) {
  console.log("for..in key:", key);
}

for (const value of items) {
  console.log("for..of value:", value);
}

console.log("length:", items.length);
console.log("keys:", Object.keys(items));
console.log("index 1:", items[1]);
console.log("has 1:", 1 in items);
console.log("has extra:", "extra" in items);
