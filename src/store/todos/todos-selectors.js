export const allTodos = (state) => state.counter;

export const activeTodos = (state) =>
  state.todos.filter((todo) => todo.complated === false);

export const selectVisibaleTodos = (state, filter) => {
  switch (filter) {
    case 'all': {
      return state.todos;
    }
    case 'active': {
      return state.todos.filter((todo) => !todo.complated);
    }
    case 'complated': {
      return state.todos.filter((todo) => todo.complated);
    }
    default: {
      return state.todos;
    }
  }
};
