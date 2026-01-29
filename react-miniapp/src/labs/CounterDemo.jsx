import { useState } from 'react';

/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

export default function CounterDemo() {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    // TODO: замени на функциональные апдейты, чтобы +2 работало стабильно
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div className="counter">
      <span className="badge">count: {count}</span>
      <button onClick={incrementTwice}>+2 (сейчас баг)</button>
    </div>
  );
}
