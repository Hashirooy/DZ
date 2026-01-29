/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

const root = document.getElementById('buttons');

for (var i = 0; i < 5; i += 1) {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${i}`;
  btn.addEventListener('click', () => {
    alert(`Номер кнопки: ${i}`);
  });
  root.appendChild(btn);
}

// TODO: исправь баг, чтобы каждая кнопка показывала свой индекс.
// Варианты: let, IIFE, data-* атрибут.
