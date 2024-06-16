import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';

import './style.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='todo_container'>
      <Header title="TODO APP"/>
      <Counter />
      <TodoItem text="Eat" completed = {true}/>
      <TodoItem text="Work" />
      <TodoItem text="Code" />
      <TodoItem text="Eat" />
      <TodoItem text="Sleep" />
      <Button />
    </div>
  );
}

export default App;
