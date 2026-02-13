/*
Контекст: расчёт инвойса с сохранением позиций.
Псевдо:
1) сумма должна быть точной до 2 знаков;
2) ключи в словаре — это id товара;
3) значения в словаре — числа.
Критерии приемки:
1) итоговая сумма для примера равна 12.9 без артефактов вроде 12.900000000000002;
2) суммы позиций доступны по строковым id товаров: book, pen, sticker;
3) позиции не перезаписывают друг друга в словаре;
4) значения в byItem — числа, а не строки.
*/

function buildInvoice(items) {
  let total = 0;
  const byItem = {};

  for (let i = 0; i < items.length; i += 1) {
    const lineSum = items[i].price * items[i].qty;
    total += lineSum;
    byItem[items[i]] = lineSum;
  }

  return { total, byItem };
}

const invoice = buildInvoice([
  { id: "book", price: 12.1, qty: 1 },
  { id: "pen", price: 0.2, qty: 3 },
  { id: "sticker", price: 0.1, qty: 2 },
]);

console.log(invoice);
