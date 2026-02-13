/*
Demo: не меняй код.
Объясни, какие значения возвращают && и ||.
*/

console.log("=== Task 07 Demo ===");

console.log("'' || 'fallback':", "" || "fallback"); //fallback первый true
console.log("'user' && 'admin':", "user" && "admin");// admin последний true
console.log("0 && 'next':", 0 && "next");//0 первый false
console.log("0 || 15:", 0 || 15);//15 первый true

function logStep(name) {
  console.log("run:", name);
  return name;
}

const result = logStep("A") && logStep("B") && "done";
console.log("result:", result);// "done" последний true
