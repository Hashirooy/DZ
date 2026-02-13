/*
Demo: не меняй код.
Объясни, где преобразование явное, а где неявное.
*/

console.log("=== Task 05 Demo ===");

console.log("Number('42'):", Number("42"));
console.log("String(512):", String(512));
console.log("Boolean(''):", Boolean(""));

console.log("'5' + 2:", "5" + 2);
console.log("'5' - 2:", "5" - 2);
console.log("'5' * '4':", "5" * "4");

const values = [0, "", "0", "false", null, undefined, NaN];
for (let i = 0; i < values.length; i += 1) {
  console.log("value:", values[i], "->", Boolean(values[i]));
}
