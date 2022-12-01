import './index.css';
import { NewTodo } from './components/newTodo';
import { TodoList } from './components/todoList';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

export default App;
