/*
Demo: не меняй код.
Объясни, когда срабатывают default-значения.
*/

console.log("=== Task 11.2 Demo ===");

function getPrefix() {
  console.log("build prefix");
  return "[AUTO]";
}

function label(name, prefix = getPrefix()) {
  return `${prefix} ${name}`;
}

console.log(label("Task"));// getPrefix вызывается, потому что prefix не передан
console.log(label("Task", ""));//getPrefix не вызывается
console.log(label("Task", undefined));//getPrefix вызывается, потому что prefix передан как undefined
console.log(label("Task", null)); //getPrefix не вызывается, потому что null считается валидным значением для prefix
