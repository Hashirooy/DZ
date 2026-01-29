# Тренировочный репозиторий: JavaScript + Browser + Event Loop + React

Привет! Это учебный проект для практики базового JS, понимания браузера, event loop и React. Почти все задания — практические. В каждом задании есть:
- **WHAT TO READ** (ссылки)
- **TASK CODE** (стартовый код с TODO)
- **STUDENT NOTES** (шаблон заметок)

> Важно: заполняй секции **Student Notes** в каждом задании (в README и/или в коде) и выполняй команды запуска.

## Требования
- Node.js >= 18

## Быстрый старт
```bash
npm install
```

Запуск модулей:
```bash
npm run js
npm run event-loop
npm run browser
npm run react
```

## Порты
- `browser-labs`: статика `http://localhost:3000`, API `http://localhost:3001`
- `js-labs`: статика `http://localhost:3002`
- `react-miniapp`: Vite `http://localhost:5173`

## Формат сдачи
- Заполни **Student Notes** для каждого задания.
- Запусти соответствующие скрипты (минимум один раз для каждого модуля).
- В PR/архиве приложи заполненные заметки и любые доп. наблюдения.

## Чек‑лист заданий

### browser-labs
- [ ] Render‑blocking: CSS + script в head vs defer
- [ ] Layout vs Paint vs Composite (left/top vs transform/opacity)
- [ ] CORS: ошибка запроса + 3 способа исправления

### js-labs
- [ ] Hoisting/TDZ: падение на старте из-за const
- [ ] Closure bug в обработчиках (var в цикле)
- [ ] Потеря this в setTimeout
- [ ] Class vs per-instance method память и сравнение
- [ ] Иммутабельность и shallow‑compare

### event-loop-labs
- [ ] Порядок выполнения: sync / microtasks / tasks
- [ ] Microtask starvation (задержка таймеров)

### react-miniapp
- [ ] Мини‑приложение Todo (фильтры, поиск, счетчики)
- [ ] Лаб: батчинг и functional setState
- [ ] Лаб: зависимости useEffect и бесконечный цикл
- [ ] Лаб: поиск без учета регистра
- [ ] Прочитать и заполнить `react-miniapp/bugs.md`
