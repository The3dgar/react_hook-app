import "@testing-library/jest-dom";
import { demoTodos } from "../../fixture/demoTodos";
const {
  todoReducer,
} = require("../../../components/08-useReducer/todoReducer");
describe("Pruebas en todoReducer", () => {
  test("should return default state", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test('should add a TODO', () => {
    const newTodo = "aprender testing"
    const newState = todoReducer(demoTodos, {type: "add", payload: newTodo})

    expect(newState.length).toBe(3)
    expect(newState[2]).toEqual(newTodo)
    expect(newState).toEqual([...demoTodos, newTodo])
  })
  
  test('should delete a TODO', () => {
    const action = {
      type: "delete",
      payload: 1
    }

    const state = todoReducer(demoTodos, action)

    expect(state.length).toBe(1)
    expect(state).toEqual([demoTodos[1]])


  })

  test('should do toggle', () => {
    const action = {
      type: "toggle",
      payload: 1
    }  

    const state = todoReducer(demoTodos, action)
    expect(state[0].done).toBe(true)
    expect(state[1]).toEqual(demoTodos[1])
  })
  
});
