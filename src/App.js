import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoTitle from './components/TodoTitle';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let url = `http://localhost:4001/todo`;
    let response = await fetch(url);
    let data = await response.json();
    setTodoList(data);
    // axios
    //   .get(`http://localhost:4001/todo`)
    //   .then((res) => setTodoList(res.data))
    //   .catch((err) => console.log(err));
  };

  return (
    <Body>
      <TodoTitle />
      <TodoInput getData={getData} />
      <TodoItems getData={getData} todoList={todoList} />
    </Body>
  );
};

const Body = styled.div`
  background-color: #f3f4ed;
  height: 100vh;
`;
export default App;
