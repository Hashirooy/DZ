/*
Demo: не меняй код.
Объясни, как инструкции, блоки и автоподстановка ; влияют на результат.
*/

console.log("=== Task 01 Demo ===");

const price = 1200;
const tax = 0.2;

{
  const total = price + price * tax;
  console.log("total inside block:", total);
}

function buildSummary(name) {
  return {
    name,
    createdAt: Date.now(),
  };
}

const summary = buildSummary("Mentoring");
console.log("summary:", summary);
console.log("final label:", `Amount: ${price + price * tax}`);
