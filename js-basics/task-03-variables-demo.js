/*
Demo: не меняй код.
Объясни TDZ и почему const не делает объект immutable.
*/

console.log("=== Task 03 Demo ===");

try {
  console.log("before let:", userName);
} catch (error) {
  console.log("TDZ error:", error.name);
}

let userName = "Maks";
console.log("after init:", userName);

const settings = { theme: "light", fontSize: 14 };
settings.theme = "dark";
console.log("mutated const object:", settings);

try {
  settings = { theme: "high-contrast" };
} catch (error) {
  console.log("reassign const error:", error.name);
}
