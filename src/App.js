import React, { useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todolist, setTodoList] = useState([
    { id: 1, title: 'i love easy fontend !' },
    { id: 2, title: 'we love easy fontend !' },
    { id: 3, title: 'they love easy fontend !' },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todolist.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todolist];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }
  function handleTodoFormSubmit(formValues) {
    console.log('Form submit:', formValues);
    const newTodo = {
      id: todolist.length + 1,
      ...formValues,
    };
    const newTodoList = [...todolist];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1> welcom to react hooks</h1>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <hr />

      <TodoList todos={todolist}
        onTodoClick={handleTodoClick}
      />

    </div>
  );
}

export default App;
