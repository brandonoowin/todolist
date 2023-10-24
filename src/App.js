import React, { useState } from 'react';
import './App.css';

const initialTodoList = [
  { id: 1, task: 'Walking', complete: false }
];

const TodoList = () => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    const newTodoItem = {
      id: todoList.length + 1,
      task: newTodo,
      complete: false,
    };
    setTodoList([...todoList, newTodoItem]);
    setNewTodo(''); 
  };

  return (
    <div>
      {todoList.map((todo) => (
        <p key={todo.id}>{todo.task}</p>
      ))}
      <form>
        <label>
          Task:
          <input type="text" onChange={handleChange} value={newTodo} />
          <button type="button" onClick={handleAddTodo}>Add</button>
        </label>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>List of Todos</h1>
        <div>
          <TodoList />
        </div>
      </header>
    </div>
  );
}

export default App;
