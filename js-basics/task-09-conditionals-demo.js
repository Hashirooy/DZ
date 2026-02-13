/*
Demo: не меняй код.
Сравни читаемость if, ?: и switch.
*/

console.log("=== Task 09 Demo ===");

const responseTime = 620;
const level = responseTime > 1000 ? "critical" : responseTime > 500 ? "warning" : "ok";
console.log("level:", level);

function resolveTab(tab) {
  switch (tab) {
    case "home":
      return "Главная";
    case "tasks":
      return "Задания";
    default:
      return "Неизвестно";
  }
}

console.log(resolveTab("tasks"));
