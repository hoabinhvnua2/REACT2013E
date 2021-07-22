import React from "react";
import PropTypes from "prop-types";

Fromtest.propTypes = {
  todos: PropTypes.array,
  ontodoClick: PropTypes.func,
};

Fromtest.defaultProps = {
  todos: [],
  onTodoClick: null,
};

function handleClicj(todo) {}

function Fromtest(props) {
  const { todos, onTodoClick } = props;

  function handleClick(todo) {
    if (onTodoClick) {
      onTodoClick(todo);
    }
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} onClick={() => handleClick(todo)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default Fromtest;
