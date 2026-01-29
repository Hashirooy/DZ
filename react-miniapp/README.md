# React Miniapp

Запуск:
```bash
npm run react
```
Открой `http://localhost:5173`.

---

## Задача 1: Батчинг и functional setState

**Контекст (реальный баг):** В проде счетчик увеличивается на 1 вместо 2 из-за батчинга и устаревшего значения.

**Шаги запуска:**
1) `npm run react`
2) Открой приложение и нажми кнопку `+2 (сейчас баг)`
3) Исправь TODO в `CounterDemo.jsx` так, чтобы было +2

**Ожидаемый результат:**
- До исправления: +1
- После исправления: +2

1) WHAT TO READ (links)
- https://react.dev/reference/react/useState
- https://react.dev/learn/state-as-a-snapshot

2) TASK CODE (starter code with TODOs)
- `react-miniapp/src/labs/CounterDemo.jsx`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах

---

## Задача 2: Зависимости useEffect и бесконечный цикл

**Контекст (реальный баг):** Компонент ререндерится бесконечно из-за неправильных зависимостей.

**Шаги запуска:**
1) В `App.jsx` включи `SHOW_EFFECT_LOOP = true`
2) `npm run react`
3) Увидишь бесконечный рост `tick`
4) Исправь TODO в `EffectLoopDemo.jsx`

**Ожидаемый результат:**
- До исправления: бесконечный ререндер
- После исправления: контролируемое обновление

1) WHAT TO READ (links)
- https://react.dev/reference/react/useEffect
- https://react.dev/learn/synchronizing-with-effects

2) TASK CODE (starter code with TODOs)
- `react-miniapp/src/App.jsx`
- `react-miniapp/src/labs/EffectLoopDemo.jsx`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах

---

## Задача 3: Поиск без учета регистра

**Контекст (реальный баг):** Пользователь вводит `todo`, а список ничего не показывает, хотя есть `TODO`.

**Шаги запуска:**
1) `npm run react`
2) Создай задачу `Read Docs`
3) Введи в поиск `read` — ничего не находится
4) Исправь TODO в `App.jsx`

**Ожидаемый результат:**
- До исправления: поиск чувствителен к регистру
- После исправления: поиск нечувствителен к регистру

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
- https://react.dev/learn/sharing-state-between-components

2) TASK CODE (starter code with TODOs)
- `react-miniapp/src/App.jsx`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
