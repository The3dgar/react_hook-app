import React from "react";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import "@testing-library/jest-dom";
import { useCounter } from "../../../hooks/useCounter";

jest.mock("../../../hooks/useFetch")
jest.mock("../../../hooks/useCounter")

describe("Pruebas en MultipleCustomHook", () => {

  useCounter.mockReturnValue({
    counter: 10
  })

  test('debe de mostrar correctamente', () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })

    const wrapper = shallow(<MultipleCustomHooks/>)
    expect(wrapper).toMatchSnapshot()
    
  })

  test('Debe de mostrar info', () => {
    useFetch.mockReturnValue({
      data: [{
        author: "Edgar",
        quote: "Hola mundo"
      }],
      loading: false,
      error: null
    })

    // Esto lo podriamos ver en el snap o podemos hacer busquedas en el hmtl

    const wrapper = shallow(<MultipleCustomHooks/>)
    expect(wrapper.find(".alert").exists()).toBe(false)
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hola mundo")

  })
  
  
});
