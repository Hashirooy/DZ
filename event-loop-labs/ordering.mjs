/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

console.log('A: sync start');

setTimeout(() => {
  console.log('D: setTimeout 0');
}, 0);

Promise.resolve()
  .then(() => {
    console.log('C: promise then');
  });

queueMicrotask(() => {
  console.log('B: queueMicrotask');
});

console.log('E: sync end');

// TODO: добавь второй пример с вложенными микротасками и таймерами
// Пример идеи: внутри Promise.then поставить setTimeout и queueMicrotask.
