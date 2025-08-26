import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
    </li>
  );
};

export default TodoItem;
