# Event Loop Labs

Запуск:
```bash
npm run event-loop
```

---

## Задача 1: Порядок выполнения (sync / microtasks / tasks)

**Контекст (реальный баг):** Логи и коллбеки приходят в неожиданном порядке, что ломает логику UI.

**Шаги запуска:**
1) `node event-loop-labs/ordering.mjs`
2) Сначала предскажи порядок, затем сравни
3) Выполни TODO и добавь второй пример

**Ожидаемый результат:**
- Sync выполняется первым
- Затем microtasks (Promise/queueMicrotask)
- Затем macrotasks (setTimeout)

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Event_loop
- https://developer.mozilla.org/ru/docs/Web/API/HTML_DOM_API/Microtask_guide

2) TASK CODE (starter code with TODOs)
- `event-loop-labs/ordering.mjs`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах

---

## Задача 2: Microtask starvation

**Контекст (реальный баг):** Таймеры и UI задерживаются из-за бесконечных микротасков.

**Шаги запуска:**
1) `node event-loop-labs/microtask-starvation.mjs`
2) Заметь, когда срабатывает таймер
3) Исправь TODO так, чтобы таймер срабатывал быстрее

**Ожидаемый результат:**
- Без исправления: setTimeout ждёт, пока микротаски закончатся
- После исправления: таймер срабатывает быстрее

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/API/queueMicrotask
- https://web.dev/optimize-long-tasks/

2) TASK CODE (starter code with TODOs)
- `event-loop-labs/microtask-starvation.mjs`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
