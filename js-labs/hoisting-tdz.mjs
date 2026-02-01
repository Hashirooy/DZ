/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

console.log('Запуск приложения...');

const config = {
  apiBase: 'https://api.example.com',
  retry: 3
};

init();


function init() {
  // TODO: исправь TDZ, чтобы init использовал config после инициализации.
  console.log('Config apiBase:', config.apiBase);
}
