# Browser Labs

Запуск:
```bash
npm run browser
```
Статика: `http://localhost:3000` | API: `http://localhost:3001`

---

## Задача 1: Render‑blocking (CSS + script в head vs defer)

**Контекст (реальный баг):** Белый экран и поздний First Contentful Paint из-за блокирующих ресурсов в `<head>`.

**Шаги запуска:**
1) `npm run browser`
2) Открой `http://localhost:3000/render-blocking.html`
3) В DevTools → Network включи Slow 3G, в Performance запиши профиль
4) Исправь TODO в `render-blocking.html`, перезагрузи и сравни

**Ожидаемый результат:**
- Без `defer` и при скрипте в `<head>` отрисовка заметно позже
- С `defer` (или переносом скрипта вниз) — контент появляется раньше

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/HTML/Element/script#attr-defer
- https://web.dev/render-blocking-resources/

2) TASK CODE (starter code with TODOs)
- `browser-labs/render-blocking.html`
- `browser-labs/render-blocking.js`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах

---

## Задача 2: Layout vs Paint vs Composite

**Контекст (реальный баг):** Анимации лагают, потому что триггерят layout/paint вместо композитинга.

**Шаги запуска:**
1) `npm run browser`
2) Открой `http://localhost:3000/layout-vs-composite.html`
3) Запиши Performance для разных кнопок (left/top, transform, size, opacity)
4) Выполни TODO в `layout-vs-composite.js` и сравни

**Ожидаемый результат:**
- `left/top` и `width/height` дают больше layout/paint
- `transform` и `opacity` чаще попадают в composite и работают плавнее

1) WHAT TO READ (links)
- https://web.dev/animations-guide/
- https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work

2) TASK CODE (starter code with TODOs)
- `browser-labs/layout-vs-composite.html`
- `browser-labs/layout-vs-composite.js`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах

---

## Задача 3: CORS (ошибка запроса + 3 способа исправления)

**Контекст (реальный баг):** Фронтенд не может достучаться до API из-за CORS.

**Шаги запуска:**
1) `npm run browser`
2) Открой `http://localhost:3000/cors-client.html`
3) Нажми кнопку — увидишь CORS ошибку
4) Исправь проблему тремя способами:
   - **Способ 1:** добавь CORS заголовки в `browser-labs/server/index.mjs`
   - **Способ 2:** включи Vite proxy в `react-miniapp/vite.config.js` и сделай запрос из `CorsProbe`
   - **Способ 3:** попробуй `mode: 'no-cors'` в `cors-client.js` и объясни, почему это не решение

**Ожидаемый результат:**
- Без заголовков запрос блокируется
- С заголовками запрос проходит и `res.json()` работает
- `no-cors` возвращает opaque response, данные недоступны

1) WHAT TO READ (links)
- https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
- https://developer.mozilla.org/ru/docs/Web/API/fetch
- https://vitejs.dev/config/server-options.html#server-proxy

2) TASK CODE (starter code with TODOs)
- `browser-labs/cors-client.html`
- `browser-labs/cors-client.js`
- `browser-labs/server/index.mjs`
- `react-miniapp/vite.config.js`
- `react-miniapp/src/labs/CorsProbe.jsx`

3) STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
