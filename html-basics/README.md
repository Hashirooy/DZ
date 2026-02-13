# HTML Basics

## 1. Что почитать
- [learn.javascript.ru/structure](https://learn.javascript.ru/structure) — чтобы понять, как браузер читает инструкции и почему порядок/структура в коде влияют на результат.
- [learn.javascript.ru/browser-environment](https://learn.javascript.ru/browser-environment) — чтобы связать HTML-разметку с тем, как страница живёт в браузере.
- [MDN: Structuring the web with HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content) — чтобы увидеть, как документ делят на смысловые части.
- [MDN: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements) — чтобы выбирать теги по смыслу, а не по привычке.
- [MDN: Document and website structure](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_layout) — чтобы понять роль `header/main/nav/section/article/footer`.
- [MDN: The label element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label) — чтобы понять, как правильно связывать подпись и поле ввода.
- [MDN: The button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) — чтобы разобраться, почему `button` лучше кликабельного `div`.
- [MDN: Headings and sections](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) — чтобы воспринимать заголовки как структуру документа, а не как размер текста.
- [MDN: The img element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) — чтобы корректно задавать `alt` и не ломать доступность.

## 2. Что нужно понять
- Почему HTML — это структура смысла, а не «обёртки под стили».
- Что произойдёт, если заменить смысловые теги на универсальные `div`.
- Почему `meta charset` и `meta viewport` влияют не на «красоту», а на корректность отображения.
- Что произойдёт, если заголовки использовать только ради визуального размера.
- Почему `button` по умолчанию уже умеет клавиатуру/фокус, а `div` — нет.
- Что произойдёт, если у `input` нет связанного `label`.
- Почему `alt` у изображения может быть как обязательным, так и пустым (`alt=""`) в зависимости от роли картинки.

## 3. Задания

### Тема 1. Скелет документа и семантические блоки
- Демонстрация (не менять код): `tasks/html-basics/task-01-document-demo.html`
  - Изучи, как документ разбит на смысловые зоны.
  - Объясни, почему здесь важны `charset`, `viewport`, `header/main/nav/section/article/footer`.
- Исправление поведения: `tasks/html-basics/task-01-document-fix.html`
  - Сделай так, чтобы страница имела корректный HTML-скелет, валидную семантику и доступные изображения/ссылки.
  - Ограничение: не переписывай контент с нуля, исправляй текущую структуру.

### Тема 2. Заголовки как иерархия (отдельное обязательное задание)
- Демонстрация (не менять код): `tasks/html-basics/task-02-headings-demo.html`
  - Объясни, почему визуально большой текст не делает элемент «главным заголовком».
- Исправление поведения: `tasks/html-basics/task-02-headings-fix.html`
  - Сделай так, чтобы структура заголовков отражала реальную иерархию страницы.
  - Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### Тема 3. Базовая доступность: `button`, `label`, фокус и клавиатура
- Демонстрация (не менять код): `tasks/html-basics/task-03-controls-demo.html`
  - Сравни поведение настоящей кнопки и «кнопки» на `div`.
  - Объясни, что реально работает с клавиатуры и фокусом.
- Исправление поведения: `tasks/html-basics/task-03-controls-fix.html`
  - Сделай так, чтобы форма и действия были доступны без мыши.
  - Критерий проверки: используй конкретные критерии приемки из шапки соответствующего fix-файла.

### Тема 4. Списки, ссылки и изображения в реальном контенте
- Демонстрация (не менять код): `tasks/html-basics/task-04-content-demo.html`
  - Объясни, зачем одним данным нужен `ol`, а другим `ul`.
  - Объясни, как `a` и `img alt` влияют на понятность контента.
- Исправление поведения: `tasks/html-basics/task-04-content-fix.html`
  - Сделай так, чтобы навигация, шаги и изображения передавали правильный смысл.
  - Ограничение: не менять текст задач, только HTML-структуру и атрибуты.

## 4. Комментарии ученика
Скопируй блок после каждого задания и заполни:

```md
### Название задания:
- Что я ожидал?
- Что произошло на самом деле?
- Почему так произошло?
- Что было неочевидно?
```
