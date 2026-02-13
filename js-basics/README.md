# JavaScript Basics

## 1. Что почитать
- [learn.javascript.ru/structure](https://learn.javascript.ru/structure) — чтобы отделять выражения от инструкций и понимать, как читается код.
- [learn.javascript.ru/strict-mode](https://learn.javascript.ru/strict-mode) — чтобы увидеть, какие ошибки strict mode перестаёт «прощать».
- [learn.javascript.ru/variables](https://learn.javascript.ru/variables) — чтобы закрепить модели `let/const` и область видимости.
- [learn.javascript.ru/types](https://learn.javascript.ru/types) — чтобы понимать, чем примитивы отличаются от объектов.
- [learn.javascript.ru/type-conversions](https://learn.javascript.ru/type-conversions) — чтобы не теряться в неявных преобразованиях.
- [learn.javascript.ru/comparison](https://learn.javascript.ru/comparison) — чтобы разобрать `==`, `===`, `null`, `undefined`, `NaN`.
- [learn.javascript.ru/logical-operators](https://learn.javascript.ru/logical-operators) — чтобы мыслить `&&` и `||` как операторами значений.
- [learn.javascript.ru/nullish-coalescing-operator](https://learn.javascript.ru/nullish-coalescing-operator) — чтобы различать `nullish` и `falsy`.
- [learn.javascript.ru/ifelse](https://learn.javascript.ru/ifelse) — чтобы уместно выбирать `if` и `?:`.
- [learn.javascript.ru/switch](https://learn.javascript.ru/switch) — чтобы понимать, где `switch` читается лучше цепочек `if`.
- [learn.javascript.ru/while-for](https://learn.javascript.ru/while-for) — чтобы ловить граничные ошибки в циклах.
- [learn.javascript.ru/function-basics](https://learn.javascript.ru/function-basics) — чтобы контролировать параметры и `return`.
- [learn.javascript.ru/function-expressions](https://learn.javascript.ru/function-expressions) — чтобы использовать функции как значения.
- [learn.javascript.ru/arrow-functions-basics](https://learn.javascript.ru/arrow-functions-basics) — чтобы понимать синтаксис и поведение `this`.
- [MDN: `<script>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) — чтобы связать запуск JS с HTML-документом и режимом скрипта.

## 2. Что нужно понять
- Почему в JavaScript «похоже на правильный код» не гарантирует ожидаемое поведение.
- Что произойдёт, если полагаться на автоподстановку `;` и не учитывать границы инструкций.
- Почему `use strict` полезен именно там, где раньше «и так работало».
- Что произойдёт, если считать `const` «неизменяемым» для любых данных.
- Почему `typeof` и сравнения требуют контекста, а не механического применения.
- Что произойдёт, если перепутать `falsy` и `nullish`.
- Почему `&&`/`||` возвращают значения, а не только `true/false`.
- Что произойдёт, если забыть, что `switch` чувствителен к `break`, а циклы — к границам.
- Почему `function` и `=>` могут выглядеть похоже, но вести себя по-разному из-за `this`.

## 3. Задания

### 1) Структура кода
- Демонстрация: `tasks/js-basics/task-01-structure-demo.js`
- Исправление: `tasks/js-basics/task-01-structure-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 2) `use strict`
- Демонстрация: `tasks/js-basics/task-02-strict-demo.js`
- Исправление: `tasks/js-basics/task-02-strict-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 3) Переменные (`let/const`, TDZ, `const` vs mutable)
- Демонстрация: `tasks/js-basics/task-03-variables-demo.js`
- Исправление: `tasks/js-basics/task-03-variables-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 4) Типы данных
- Демонстрация: `tasks/js-basics/task-04-types-demo.js`
- Исправление: `tasks/js-basics/task-04-types-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 5) Преобразование типов
- Демонстрация: `tasks/js-basics/task-05-conversion-demo.js`
- Исправление: `tasks/js-basics/task-05-conversion-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 6) Операторы сравнения
- Демонстрация: `tasks/js-basics/task-06-comparison-demo.js`
- Исправление: `tasks/js-basics/task-06-comparison-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 7) Логические операторы
- Демонстрация: `tasks/js-basics/task-07-logical-demo.js`
- Исправление: `tasks/js-basics/task-07-logical-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 8) `??` и `??=`
- Демонстрация: `tasks/js-basics/task-08-nullish-demo.js`
- Исправление: `tasks/js-basics/task-08-nullish-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 9) Условные конструкции
- Демонстрация: `tasks/js-basics/task-09-conditionals-demo.js`
- Исправление: `tasks/js-basics/task-09-conditionals-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 10) Циклы (расширенный набор)
- Демонстрация: `tasks/js-basics/task-10-loops-demo.js`
- Исправление: `tasks/js-basics/task-10-loops-fix.js`
- Демонстрация: `tasks/js-basics/task-10-loops-2-demo.js`
- Исправление: `tasks/js-basics/task-10-loops-2-fix.js`
- Демонстрация: `tasks/js-basics/task-10-loops-3-demo.js`
- Исправление: `tasks/js-basics/task-10-loops-3-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 11) Функции (расширенный набор)
- Демонстрация: `tasks/js-basics/task-11-functions-demo.js`
- Исправление: `tasks/js-basics/task-11-functions-fix.js`
- Демонстрация: `tasks/js-basics/task-11-functions-2-demo.js`
- Исправление: `tasks/js-basics/task-11-functions-2-fix.js`
- Демонстрация: `tasks/js-basics/task-11-functions-3-demo.js`
- Исправление: `tasks/js-basics/task-11-functions-3-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 12) Arrow functions
- Демонстрация: `tasks/js-basics/task-12-arrow-demo.js`
- Исправление: `tasks/js-basics/task-12-arrow-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### 13) Реальные особенности JavaScript
- Демонстрация: `tasks/js-basics/task-13-quirks-demo.js`
- Исправление: `tasks/js-basics/task-13-quirks-fix.js`
- Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

## 4. Комментарии ученика
Скопируй блок после каждого задания и заполни:

```md
### Название задания:
- Что я ожидал?
- Что произошло на самом деле?
- Почему так произошло?
- Что было неочевидно?
```
