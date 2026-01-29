/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

const cart = {
  items: 0,
  add() {
    this.items += 1;
    console.log('items:', this.items);
  }
};

console.log('Старт. items =', cart.items);

const looseAdd = cart.add; // потеря this

setTimeout(() => {
  try {
    looseAdd(); // TypeError: this === undefined
  } catch (err) {
    console.error('Ошибка из-за потерянного this:', err.message);
  }
}, 0);

// TODO: исправь: bind / обертка-стрелка / метод как стрелка
setTimeout(() => cart.add(), 10);
