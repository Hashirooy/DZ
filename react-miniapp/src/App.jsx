import { useEffect, useMemo, useState } from 'react';
import CounterDemo from './labs/CounterDemo.jsx';
import EffectLoopDemo from './labs/EffectLoopDemo.jsx';
import CorsProbe from './labs/CorsProbe.jsx';

const STORAGE_KEY = 'todo-lab-v1';

const SHOW_EFFECT_LOOP = false; // TODO: включи для задачи про useEffect
const SHOW_CORS_PROBE = false; // TODO: включи для CORS через Vite proxy

/*
STUDENT NOTES (для задачи про поиск)
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

export default function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setTodos(parsed);
      }
    } catch (err) {
      console.warn('Не удалось загрузить localStorage:', err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const visibleTodos = useMemo(() => {
    const term = search.trim();
    return todos.filter((t) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'active' && !t.done) ||
        (filter === 'done' && t.done);

      // TODO: сделай поиск без учета регистра
      const matchesSearch = term === '' || t.title.includes(term);

      return matchesFilter && matchesSearch;
    });
  }, [todos, filter, search]);

  const total = todos.length;
  const doneCount = todos.filter((t) => t.done).length;
  const activeCount = total - doneCount;

  const addTodo = (e) => {
    e.preventDefault();
    const text = title.trim();
    if (!text) return;

    const newTodo = {
      id: Date.now(),
      title: text,
      done: false
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle('');
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.done));
  };

  return (
    <div className="app">
      <h1>Todo Tracker</h1>
      <div className="subtitle">
        Практика React state, hooks и иммутабельных обновлений
      </div>

      <form className="row" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Новая задача"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="primary" type="submit">
          Добавить
        </button>
      </form>

      <div className="row" style={{ marginTop: 12 }}>
        <input
          type="text"
          placeholder="Поиск"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className={filter === 'all' ? 'primary' : 'ghost'}
          onClick={() => setFilter('all')}
          type="button"
        >
          Все
        </button>
        <button
          className={filter === 'active' ? 'primary' : 'ghost'}
          onClick={() => setFilter('active')}
          type="button"
        >
          Активные
        </button>
        <button
          className={filter === 'done' ? 'primary' : 'ghost'}
          onClick={() => setFilter('done')}
          type="button"
        >
          Готовые
        </button>
        <button className="ghost" type="button" onClick={clearCompleted}>
          Очистить выполненные
        </button>
      </div>

      <div className="row" style={{ marginTop: 12 }}>
        <span className="badge">Всего: {total}</span>
        <span className="badge">Активные: {activeCount}</span>
        <span className="badge">Готовые: {doneCount}</span>
      </div>

      <div className="todo-list">
        {visibleTodos.map((t) => (
          <div key={t.id} className={`todo-item ${t.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTodo(t.id)}
            />
            <span>{t.title}</span>
            <button type="button" onClick={() => deleteTodo(t.id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>Лаб: батчинг и functional setState</h2>
        <CounterDemo />
      </div>

      {SHOW_EFFECT_LOOP && (
        <div className="section">
          <h2>Лаб: бесконечный useEffect</h2>
          <EffectLoopDemo />
        </div>
      )}

      {SHOW_CORS_PROBE && (
        <div className="section">
          <h2>Лаб: CORS через proxy</h2>
          <CorsProbe />
        </div>
      )}
    </div>
  );
}
