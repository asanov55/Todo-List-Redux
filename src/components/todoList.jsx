import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, remove } from '../store/todos/todos-actions';
import { allTodos } from '../store/todos/todos-selectors';

export const TodoList = () => {
  const todos = useSelector(allTodos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.complated}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.title}{' '}
          <button onClick={() => dispatch(remove(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};
