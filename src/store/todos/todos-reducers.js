import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './todos-const';

export const counter = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        { id: Date.now(), title: action.title, complated: false },
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              complated: !todo.complated,
            }
          : todo
      );
    }
    default: {
      return state;
    }
  }
};
