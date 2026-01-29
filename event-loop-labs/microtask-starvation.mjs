/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

console.log('start');

let count = 0;
const LIMIT = 20000;

function floodMicrotasks() {
  if (count >= LIMIT) return;
  count += 1;
  if (count % 5000 === 0) {
    console.log('microtasks processed:', count);
  }
  queueMicrotask(floodMicrotasks);
}

queueMicrotask(floodMicrotasks);

setTimeout(() => {
  console.log('timeout fired (after microtasks)');
}, 0);

// TODO: добавь "yield" в macrotask, чтобы таймер не ждал так долго.
// Подсказка: ограничь количество микротасков и продолжай через setTimeout.
