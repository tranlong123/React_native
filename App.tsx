import React, { useReducer, useContext } from 'react';
import {
  NativeBaseProvider, StatusBar,
  Button, Box, Text
} from 'native-base';

import ToDoList from './src/chapter8/ToDoList';

// Định nghĩa kiểu dữ liệu cho đối tượng Todo
interface Todo {
  id: number;
  text: string;
}

// Định nghĩa kiểu dữ liệu cho state
interface TodosState {
  todos: Todo[];
}
// Định nghĩa kiểu dữ liệu cho các action
type Action =
  | { type: 'add'; payload: Todo }
  | { type: 'delete'; payload: { id: number } }
  | { type: 'edit'; payload: { id: number; text: string } };

// Initial State
const todosInitialState: TodosState = {
  todos: [
    { id: 1, text: "finishing writing hooks chapter" },
    { id: 2, text: "play with kids" },
    { id: 3, text: "read bible" }
  ]
};

// Cập nhật TodosContext để chấp nhận kiểu dữ liệu cụ thể
const TodosContext = React.createContext<{
  state: TodosState;
  dispatch: React.Dispatch<Action>;
}>({ state: todosInitialState, dispatch: () => null });

// Định nghĩa reducer //với kiểu dữ liệu cụ thể
function todosReducer(state: TodosState, action: Action) {
  switch (action.type) {
    case 'add':
      // add new todo onto array
      const addedToDos = [...state.todos, action.payload]
      // spread our state and assign todos
      return { ...state, todos: addedToDos }
    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos }
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      return { ...state, todos: filteredTodoState }
    default:
      return todosInitialState
  }
}

const App = () => {

  const [state, dispatch] = useReducer(todosReducer, todosInitialState)

  return (
    <TodosContext.Provider value={{ state, dispatch }}>

      <NativeBaseProvider>
        <StatusBar hidden={false} barStyle="light-content" />
        <ToDoList />

      </NativeBaseProvider>
    </TodosContext.Provider>

  );
}

export { TodosContext }
export default App;