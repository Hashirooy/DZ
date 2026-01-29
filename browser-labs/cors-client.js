/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

const output = document.getElementById('output');
const btn = document.getElementById('btn-fetch');

async function runFetch() {
  output.textContent = 'Загрузка...';
  try {
    const res = await fetch('http://localhost:3001/api/data', {
      method: 'GET',
      headers: {
        'X-Client': 'cors-lab'
      }
      // TODO: попробуй mode: 'no-cors' и посмотри, что такое opaque response
    });

    // TODO: после включения CORS заголовков на сервере, должно читаться res.json()
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    console.error(err);
    output.textContent = String(err);
  }
}

btn.addEventListener('click', runFetch);
