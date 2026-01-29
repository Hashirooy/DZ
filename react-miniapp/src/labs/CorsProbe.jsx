import { useState } from 'react';

/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

export default function CorsProbe() {
  const [output, setOutput] = useState('Нажми кнопку');

  const run = async () => {
    setOutput('Загрузка...');
    try {
      const res = await fetch('/api/data', {
        headers: { 'X-Client': 'cors-probe' }
      });
      const data = await res.json();
      setOutput(JSON.stringify(data, null, 2));
    } catch (err) {
      setOutput(String(err));
    }
  };

  return (
    <div>
      <button onClick={run}>Проверить /api/data через proxy</button>
      <pre>{output}</pre>
    </div>
  );
}
