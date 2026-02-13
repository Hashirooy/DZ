/*
Контекст: расчёт итоговой суммы заказа с промокодом.
Псевдо:
1) total — число;
2) discount = 0 считается валидным значением;
3) промокод применяется только при истинном флаге, а не по строке.
Критерии приемки:
1) total в результате — число 1500, а не строка;
2) при discount: 0 значение скидки остается 0;
3) при applyPromo: "false" промокод не применяется, и finalTotal остается 1500;
4) при applyPromo: true и discount: 10 итоговая сумма равна 1350.
*/

function buildCheckoutSummary(cart) {
  const total = cart.items.reduce((sum, item) => sum + item.price, "");
  const discount = cart.discount === 0 ? 0 :cart.discount || 10;

  const shouldApplyPromo = Boolean(cart.applyPromo) ? true : false;
  const finalTotal = shouldApplyPromo ? total - (total * discount) / 100 : total;

  return {
    total,
    discount,
    shouldApplyPromo,
    finalTotal,
  };
}

const cart = {
  items: [{ price: "1200" }, { price: "300" }],
  discount: 0,
  applyPromo: "false",
};

const promoCart = {
  items: [{ price: 1000 }, { price: 500 }],
  discount: 10,
  applyPromo: true,
};

console.log(buildCheckoutSummary(cart));
console.log(buildCheckoutSummary(promoCart));
