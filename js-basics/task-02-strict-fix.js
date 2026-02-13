/*
Контекст: подсчет суммы заказа.
Псевдо:
1) сумма — это сумма всех price, включая 0;
2) если элемент не содержит price, это ошибка;
3) никаких случайных глобальных переменных.
Критерии приемки:
1) файл работает в strict-режиме для всего скрипта;
2) calculateTotal([{ price: 100 }, { price: 0 }]) возвращает 100;
3) calculateTotal([{ price: 100 }, {}]) выбрасывает ошибку (в консоли есть "error: TypeError");
4) значение в глобальном total не появляется (globalThis.total === undefined).
*/

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i += 1) {
    if (!items[i].price) {
      throw new Error("Invalid item: missing price");
    }
    total += items[i].price;
  }

  return total;
}

const order = [{ price: 100 }, {}];
const validOrder = [{ price: 100 }, { price: 0 }];

try {
  console.log("total:", calculateTotal(order));
} catch (error) {
  console.log("error:", error.name);
}

console.log("valid total:", calculateTotal(validOrder));
console.log("global total leak:", globalThis.total);
