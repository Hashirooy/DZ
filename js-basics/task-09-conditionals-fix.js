/*
Контекст: правила определения типа доставки.
Псевдо:
1) label зависит только от type;
2) priority зависит от type и флага задержки;
3) выборка не должна проваливаться в соседние ветки.
Критерии приемки:
1) getShipmentInfo("express", false) возвращает label: "today", priority: "medium";
2) getShipmentInfo("standard", true) возвращает label: "2-3 days", priority: "medium";
3) getShipmentInfo("pickup", false) возвращает label: "pickup", priority: "low";
4) метка доставки не должна случайно перезаписываться из-за провала в соседнюю ветку.
*/

function getShipmentInfo(type, delayed) {
  const priority = delayed ? (type === "express" ? "high" : "medium") : type === "express" ? "medium" : "low";

  let label = "unknown";
  switch (type) {
    case "express":
      label = "today";
      break;
    case "standard":
      label = "2-3 days";
      break;
    default:
      label = "pickup";
  }

  return { priority, label };
}

console.log(getShipmentInfo("express", false));
console.log(getShipmentInfo("standard", true));
console.log(getShipmentInfo("pickup", false));
