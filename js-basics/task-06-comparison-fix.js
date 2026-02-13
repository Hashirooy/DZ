/*
Контекст: классификация оценок в потоке данных.
Псевдо:
1) значение без корректного числа -> "invalid";
2) отсутствие оценки (null/undefined) -> "missing";
3) границы сравнения должны быть определены явно.
Критерии приемки:
1) classifyScore("95a") возвращает "invalid";
2) classifyScore(undefined) и classifyScore(null) возвращают "missing";
3) classifyScore(90) возвращает "ok" (граница не должна считаться "excellent");
4) classifyScore(91) возвращает "excellent".
*/

function classifyScore(score) {
  if (score == null) {   
    return "missing";
  }


  if (typeof score !== "number" || Number.isNaN(score)) {
    return "invalid";
  }

  if (score > 90) {
    return "excellent"; 
  }

  return "ok";
}

console.log(classifyScore(undefined));
console.log(classifyScore(null));
console.log(classifyScore("95a"));
console.log(classifyScore(90));
console.log(classifyScore(91));
