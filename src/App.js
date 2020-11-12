import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import './App.scss';
import ColorBox from './components/ColorBox';
import Pagination from './components/Pagination';
import PostList from './components/PostList';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import PostFiltersForm from './components/PostFiltersForm';
import Clock from './components/Clock';
import Count from './components/Count';
import MagicBox from './components/MagicBox';

function App() {
  const [todolist, setTodoList] = useState([
    { id: 1, title: 'i love easy fontend !' },
    { id: 2, title: 'we love easy fontend !' },
    { id: 3, title: 'they love easy fontend !' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });


  useEffect(() => {
    async function fetchPostList() {
      try {
        const paramString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("fails to fetch post list", error.message);
      }
    }
    fetchPostList();

  }, [filters]);
  function handlePageChange(newPage) {
    console.log("newPage", newPage);
    setFilters({
      ...filters,
      _page: newPage,


    });
  }


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
  function handleFiltersChange(newFilters) {
    console.log('new filters:', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }
  const [showClock, setShowClock] = useState(true);
  return (
    <div className="app">
      <h1> welcom to react hooks</h1>
      {/* <TodoForm onSubmit={handleTodoFormSubmit} /> */}
      <hr />
      <MagicBox />
      {/*<TodoList todos={todolist}
        onTodoClick={handleTodoClick}
      />*/}
      {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination}
        onPageChange={handlePageChange}
      /> */}
      {/* {showClock && < Clock />}

      <button onClick={() => setShowClock(false)} >hide clock</button>
      <button onClick={() => setShowClock(true)} >show clock</button>
      <hr />
      <Count /> */}
    </div>
  );
}

export default App;
