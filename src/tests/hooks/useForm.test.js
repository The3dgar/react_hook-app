import "@testing-library/jest-dom";
const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Edgar",
    email: "edgar@gmail.com",
  };

  test("Debe retornar un formulario por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });

  test("debe cambiar el valor name del formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Moises" } });
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, name: "Moises" });
  });

  test("debe reestablecer el formulario", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Moises" } });
      reset();
    })

    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
