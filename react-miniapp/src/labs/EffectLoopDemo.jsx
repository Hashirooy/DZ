import { useEffect, useState } from 'react';

/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

export default function EffectLoopDemo() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    // TODO: исправь бесконечный цикл
    // Подсказка: либо убери setTick, либо измени зависимости,
    // либо добавь условие остановки.
    setTick(tick + 1);
  }, [tick]);

  return (
    <div className="counter">
      <span className="badge">tick: {tick}</span>
    </div>
  );
}
