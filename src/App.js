import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List with Redux</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
