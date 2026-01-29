/*
STUDENT NOTES
- Что я ожидал
- Что произошло
- Почему это произошло (моими словами)
- Где это важно в реальных проектах
*/

let state = {
  todos: [{ id: 1, title: 'buy milk' }]
};

function shallowEqual(a, b) {
  return a === b;
}

function render() {
  console.log('render:', state.todos.map((t) => t.title).join(', '));
}

function setState(next) {
  if (shallowEqual(state, next)) {
    console.log('skip render: same reference');
    return;
  }
  state = next;
  render();
}

render();

// ПЛОХО: мутация
state.todos.push({ id: 2, title: 'read docs' });
setState(state);

// TODO: исправь иммутабельно (создай новый объект и новый массив)
// setState({
//   todos: [...state.todos, { id: 3, title: 'write code' }]
// });
