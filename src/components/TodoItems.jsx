import React from "react";
import TodoItem from "./TodoItem";

const TodoItems = ({ todoList, getData }) => {
  return (
    <div>
      {todoList.map((list) => (
        <TodoItem key={list.id} list={list} getData={getData} />
      ))}
    </div>
  );
};

export default TodoItems;
