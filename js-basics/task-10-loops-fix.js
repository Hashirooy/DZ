/*
Контекст: сбор корректных значений из входного массива.
Псевдо:
1) пропускаем отрицательные;
2) останавливаемся на 0 (sentinel);
3) сохраняем типы (числа остаются числами).
Критерии приемки:
1) collectPositive([5, -2, 4, 0, 7]) возвращает [5, 4];
2) отрицательные значения пропускаются;
3) после 0 обработка прекращается, и значения после 0 не попадают в результат;
4) элементы результата — числа, не строки;
5) collectPositive([]) возвращает [] без ошибок.
*/

function collectPositive(numbers) {
  const collected = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] <= 0) {
      continue;
    }

    if (numbers[i] === 0) {
      break;
    }

    collected.push(numbers[i]);
  }

  return collected;
}

const result = collectPositive([5, -2, 4, 0, 7]);
console.log(result);
console.log("type:", typeof result[0]);
console.log(collectPositive([]));
