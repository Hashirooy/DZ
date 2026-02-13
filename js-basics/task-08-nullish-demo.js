/*
Demo: не меняй код.
Объясни разницу между || и ??, а также работу ??=.
*/

console.log("=== Task 08 Demo ===");

console.log("0 || 3000:", 0 || 3000); // 3000 первое истинное
console.log("0 ?? 3000:", 0 ?? 3000);// первоее не налл и не undefined
console.log("'' || 'Untitled':", "" || "Untitled");// "Untitled" первое истинное
console.log("'' ?? 'Untitled':", "" ?? "Untitled");// "" первое не null и не undefined

const settings = { retries: 0, timeout: null };
settings.retries ??= 3; // 0 не null и не undefined, поэтому остается 0
settings.timeout ??= 5000; // null заменяется на 5000
console.log("settings:", settings);
