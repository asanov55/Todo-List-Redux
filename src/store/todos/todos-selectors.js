export const allTodos = (state) => state.counter;

export const activeTodos = (state) =>
  state.todos.filter((todo) => todo.complated === false);
