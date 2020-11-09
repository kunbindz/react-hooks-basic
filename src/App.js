import React, { useEffect, useState } from 'react';
import './App.scss';
import ColorBox from './components/ColorBox';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todolist, setTodoList] = useState([
    { id: 1, title: 'i love easy fontend !' },
    { id: 2, title: 'we love easy fontend !' },
    { id: 3, title: 'they love easy fontend !' },
  ]);

  const [postList, setPostList] = useState([]);
  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data } = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log("fails to fetch post list", error.message);
      }
    }
    fetchPostList();

  }, []);



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
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      <hr />

      {/*<TodoList todos={todolist}
        onTodoClick={handleTodoClick}
      />*/}

      <PostList posts={postList} />
    </div>
  );
}

export default App;
