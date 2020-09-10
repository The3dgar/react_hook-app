import React from "react";
import { act } from "@testing-library/react";
import { demoTodos } from "../../fixture/demoTodos";
const { shallow, mount } = require("enzyme");
const { TodoApp } = require("../../../components/08-useReducer/TodoApp");
import "@testing-library/jest-dom";

describe("Pruebas <TodoApp/>", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  test("should mostrar correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add a todo", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("Todo App (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(localStorage.setItem).toHaveBeenCalledWith({});
  });

  test("should delete a TODO", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    expect(wrapper.find("h1").text().trim()).toBe("Todo App (1)");
    wrapper.find("TodoAdd").prop("handleDelete")(demoTodos[0].id);
    expect(wrapper.find("h1").text().trim()).toBe("Todo App (0)");

    
  });
});
