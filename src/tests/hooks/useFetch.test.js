const { useFetch } = require("../../hooks/useFetch");
const { renderHook } = require("@testing-library/react-hooks");
import "@testing-library/jest-dom";


describe("Pruebas en el useFetch", () => {
  test("valores por defecto", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    const { data, loading, error } = result.current;

    expect(data).toBe(null)
    expect(loading).toBe(true)
    expect(error).toBe(null)
  });
  test("valores deseados", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );

    await waitForNextUpdate()

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1)
    expect(loading).toBe(false)
    expect(error).toBe(null)
  });
  test("valores para manejar de errores", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`https://www.reqres.in/apid/useres?page=2`)
    );

    await waitForNextUpdate()

    const { data, loading, error } = result.current;

    expect(data).toBe(null)
    expect(loading).toBe(false)
    expect(error).toBe("No se pudo cargar la info")
  });
});
