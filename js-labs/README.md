# JS Labs

Запуск:
```bash
npm run js
```
Статика: `http://localhost:3002`

---

## Задача 1: Hoisting/TDZ — падение на старте

**Контекст (реальный баг):** Приложение падает до рендера, потому что конфиг еще не инициализирован.

**Шаги запуска:**
1) `node js-labs/hoisting-tdz.mjs`
2) Увидишь ошибку TDZ
3) Исправь TODO и запусти снова

**Ожидаемый результат:**
- До исправления: ReferenceError
- После исправления: выводится `apiBase`

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/const

2) TASK CODE (starter code with TODOs)
- `js-labs/hoisting-tdz.mjs`

3) STUDENT NOTES
- Что я ожидал Reference Error
- Что произошло Reference Error
- Почему это произошло ( потому что функция init всплывает и может и ее можно вызватьв то вреия еще о config не изветно)
- Где это важно в реальных проектах (везде=))

---

## Задача 2: Closure bug в обработчиках (var в цикле)

**Контекст (реальный баг):** Кнопки в списке всегда срабатывают на последний индекс.

**Шаги запуска:**
1) `npm run js`
2) Открой `http://localhost:3002/closure-loop.html`
3) Кликни разные кнопки — увидишь одинаковый индекс
4) Исправь TODO в `closure-loop.js`

**Ожидаемый результат:**
- До исправления: все кнопки показывают одно и то же значение
- После исправления: каждая кнопка показывает свой индекс

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/let

2) TASK CODE (starter code with TODOs)
- `js-labs/closure-loop.html`
- `js-labs/closure-loop.js`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло ( var поднимается и становится как внешнее значение, let остается )
- Где это важно в реальных проектах везде =)

---

## Задача 3: Потеря this в setTimeout

**Контекст (реальный баг):** Метод объекта теряет контекст, если передать его как коллбек.

**Шаги запуска:**
1) `node js-labs/this-context.mjs`
2) Увидишь ошибку про `this`
3) Исправь TODO и запусти снова

**Ожидаемый результат:**
- До исправления: ошибка из-за `this === undefined`
- После исправления: корректный инкремент

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_objects/Function/bind

2) TASK CODE (starter code with TODOs)
- `js-labs/this-context.mjs`

3) STUDENT NOTES
- Что я ожидал что исправлю всеми методами
- Что произошло исправил тока 1 через bind
- Почему это произошло (функцию присвоили в переменную и потеряли контекст)
- Где это важно в реальных проектах

---

## Задача 4: Class vs per‑instance methods (память)

**Контекст (реальный баг):** Методы создаются на каждый инстанс → лишняя память.

**Шаги запуска:**
1) `node js-labs/class-vs-instance.mjs`
2) Сравни ссылки на методы
3) Выполни TODO и добавь свои наблюдения

**Ожидаемый результат:**
- `UserFn`: методы разные (false)
- `UserClass`: методы совпадают (true)

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

2) TASK CODE (starter code with TODOs)
- `js-labs/class-vs-instance.mjs`

3) STUDENT NOTES
- Что я ожидал
- Что произошло у Фyнкций создаются новые объекты и разные ссылки на них, у классов все ссылается на прототип?
- Почему это произошло (моими словами)
- Где это важно в реальных проектах

---

## Задача 5: Иммутабельность и shallow‑compare

**Контекст (реальный баг):** UI не обновляется, потому что ссылка на объект не меняется.

**Шаги запуска:**
1) `node js-labs/immutability.mjs`
2) Посмотри, что рендер пропускается
3) Исправь TODO и добейся рендера

**Ожидаемый результат:**
- До исправления: `skip render: same reference`
- После исправления: `render: buy milk, read docs, ...`

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/spread_syntax
- https://react.dev/learn/updating-objects-in-state

2) TASK CODE (starter code with TODOs)
- `js-labs/immutability.mjs`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
