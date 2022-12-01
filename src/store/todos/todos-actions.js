import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './todos-const';

export const addTodo = (title) => ({
  type: ADD_TODO,
  title,
});
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
export const remove = (id) => ({
  type: REMOVE_TODO,
  id,
});