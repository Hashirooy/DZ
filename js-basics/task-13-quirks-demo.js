/*
Demo: не меняй код.
Объясни реальные особенности JS без экзотики.
*/

console.log("=== Task 13 Demo ===");

const sum = 0.1 + 0.2;
console.log("0.1 + 0.2:", sum);
console.log("sum === 0.3:", sum === 0.3);

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log("a === b:", a === b);

const keyA = { id: "A" };
const keyB = { id: "B" };
const cache = {};
cache[keyA] = "first";
cache[keyB] = "second";
console.log("cache keys:", Object.keys(cache));
console.log("cache value:", cache[keyA]);
