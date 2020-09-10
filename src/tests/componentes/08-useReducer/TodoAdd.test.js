import React from "react";
const { shallow } = require("enzyme");
const { TodoAdd } = require("../../../components/08-useReducer/TodoAdd");

describe("Pruebas en <TodoAdd/>", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('should be display correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('No debe llamar handleAddTodo', () => {
    const formSubmit = wrapper.find("form").prop("onSubmit")
    // esto hace referencia a una funcion

    formSubmit({preventDefault(){}})
    expect(handleAddTodo).toHaveBeenCalledTimes(0)

  })

  test("should call handleAddTodo function", () => {
    const value = "Aprender React";

    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: value,
      done: false,
      id: expect.any(Number)
    })

    // se ejecuta el reset: evaluamos el efecto

    expect(wrapper.find("input").prop("value")).toBe("")
  });
});
