import './index.css';
import './App.css';
import { NewTodo } from './components/newTodo';
import { TodoList } from './components/todoList';
import Filters from './components/filters';

function App() {
  return (
    <div className="App">
      <h1>Hello Redux Todo</h1>
      <NewTodo />
      <Filters />
      <TodoList />
    </div>
  );
}

export default App;
