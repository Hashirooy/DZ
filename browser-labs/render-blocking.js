/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

console.log('[render-blocking] script start');
const start = performance.now();

// Имитируем тяжелую работу в main thread
while (performance.now() - start < 700) {
  // busy loop
}

document.addEventListener('DOMContentLoaded', () => {
  const ms = Math.round(performance.now() - start);
  const status = document.getElementById('status');
  if (status) {
    status.textContent = `Статус: JS выполнился за ~${ms}ms`; 
  }
});
