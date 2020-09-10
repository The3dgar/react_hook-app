const { useCounter } = require("../../hooks/useCounter");
const { renderHook, act } = require("@testing-library/react-hooks");

describe("Pruebas en useCounter", () => {
  test("Retorna valores por defecto ", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  test("Retorna valor de 100 ", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("Retorna incrementar el counter en 1 ", () => {
    const { result } = renderHook(() => useCounter(100));
    // para ejecutar acciones usar el act de testing-libray
    const { increment } = result.current;
    act(() => increment());
    expect(result.current.counter).toBe(101);
  });

  test("Retorna decrementar el counter en 1 ", () => {
    const { result } = renderHook(() => useCounter(100));
    // para ejecutar acciones usar el act de testing-libray
    const { decrement } = result.current;
    act(() => decrement());
    expect(result.current.counter).toBe(99);
  });

  test("Retorna reset el counter en default ", () => {
    const { result } = renderHook(() => useCounter(100));
    // para ejecutar acciones usar el act de testing-libray
    const { increment, reset } = result.current;
    act(() => {
      increment();
      reset()
    });
    expect(result.current.counter).toBe(100);
  });
});
