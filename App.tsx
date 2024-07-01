import React, { useReducer, useContext, Dispatch  } from 'react';
import {
  NativeBaseProvider,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToDoDetail from './src/chapter-9/ToDoDetail';
import ToDoList from './src/chapter-9/ToDoList';

interface Todo {
  id: number;
  // define other properties of a todo
}

interface TodosState {
  todos: Todo[];
}

const todosInitialState: TodosState = {
  todos: []
};

type Action =
  | { type: 'get', payload: Todo[] }
  | { type: 'add', payload: Todo }
  | { type: 'delete', payload: { id: number } }
  | { type: 'edit', payload: Todo };

export const TodosContext = React.createContext<{ state: TodosState; dispatch: Dispatch<Action> }>({
  state: todosInitialState,
  dispatch: () => null
})

const Stack = createStackNavigator();

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case 'get':
      return { ...state, todos: action.payload }
    case 'add':
      // add new todo onto array
      const addedToDos = [...state.todos, action.payload]
      // spread our state and assign todos
      return { ...state, todos: addedToDos }
    case 'delete':
      const filteredTodoState = state.todos.filter(todo => todo.id !== action.payload.id)
      return { ...state, todos: filteredTodoState }
    case 'edit':
      const updatedToDo = { ...action.payload }
      const updatedToDoIndex = state.todos.findIndex(t => t.id === action.payload.id)
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1)
      ];
      return { ...state, todos: updatedToDos }
    default:
      return todosInitialState
  }
}


const App = () => {

  const [state, dispatch] = useReducer(todosReducer, todosInitialState)

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ToDoList">
            <Stack.Screen name="ToDoList" component={ToDoList} />
            <Stack.Screen name="ToDoDetail" component={ToDoDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </TodosContext.Provider>

  );
}
export default App;