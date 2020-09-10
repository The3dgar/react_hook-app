const { shallow } = require("enzyme");
import React from "react";
import "@testing-library/jest-dom";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";

import { demoTodos } from "../../fixture/demoTodos";

describe("test in <TodoListItem/>", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test("should show component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call function handleDelete", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should call function handleToggle", () => {
    wrapper.find("p").simulate("click");
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should show text correctly", () => {
    expect(wrapper.find("p").text().trim().split(" . ")[1]).toBe(demoTodos[0].desc)
  });

  test("should to have complete class", () => {
    const todo = demoTodos[0]
    todo.done = true
    const wrapper = shallow(
      <TodoListItem
        todo={todo}
      />
    );
    expect(wrapper.find("p").hasClass("complete")).toBe(true)
  });
});
