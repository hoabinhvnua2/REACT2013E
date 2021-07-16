import React, { useState } from "react";
import "./App.scss";

import Fromtest from "./compomen/Fromtest";
import TodoFrom from "./compomen/TodoFrom";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍" },
    { id: 2, title: "We love Easy Frontend! 🥰" },
    { id: 3, title: "They love Easy Frontend! 🚀" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);

    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleValue(fromValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...fromValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  }
  return (
    <div>
      <TodoFrom onSubmit={handleValue} />
      <Fromtest todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
