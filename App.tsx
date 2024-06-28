import React, { useReducer } from 'react';
import {
  NativeBaseProvider, StatusBar,
  Button, Box, Text
} from 'native-base';

const initialState = {
  count: 0
}

// Định nghĩa kiểu cho State
interface State {
  count: number;
}

// Định nghĩa kiểu cho Action
type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <NativeBaseProvider>
      <StatusBar hidden={false} barStyle="light-content" />
      <Box
        height={16}
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        bg="#f5f5f0"
      >
        <Text>Count: {state.count}</Text>
      </Box>
      <Button onPress={() => dispatch({ type: 'increment' })}>
        <Text color="white">Increment</Text>
      </Button>
      <Button
       onPress={() => dispatch({ type: 'decrement' })}
       style={{
        backgroundColor: '#16a34a'
       }}
       >
        <Text color="white">Decrement</Text>
      </Button>
      <Button 
      onPress={() => dispatch({ type: 'reset' })}
      style={{
        backgroundColor: '#f97316'
       }}
      >
        <Text color="white">Reset</Text>
      </Button>

    </NativeBaseProvider>

  );
}
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 }
//     case "decrement":
//       return { count: state.count - 1 }
//     case "reset":
//       return initialState
//     default:
//       return initialState
//   }
// }
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
export default App;