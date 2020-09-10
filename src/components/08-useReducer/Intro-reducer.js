// Estado inicial
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

// Reducer 
const todoReducer = (state = initialState, action) => {
  if (action?.type == "agregar") {
    return [...state, action.payload];
  }
  return state;
};

// Inicializacion
let todos = todoReducer();

// Data para modificar el estado
const newTodo = {
  id: 2,
  todo: "Comprar leche",
  done: false,
};

// Action
const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

// Envio de la accion con la data al reducer
todos = todoReducer(todos, agregarTodoAction);

// Resultado
console.log(todos);
