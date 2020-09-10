import React, { useReducer, useEffect } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => JSON.parse(localStorage.getItem("todos")) || []

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleDelete = (id) => {
    dispatch({ type: "delete", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "toggle", payload: id });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({ type: "add", payload: newTodo });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr></hr>
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          ></TodoList>
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo ={handleAddTodo}></TodoAdd>
        </div>
      </div>
    </div>
  );
};
