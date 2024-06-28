import React, { useContext } from 'react';
import {
  NativeBaseProvider,
  StatusBar
} from 'native-base';
import ProductList from './src/chapter8/ProductList';

const UserContext = React.createContext('');

const App = () => {
  const username = 'Greg'

  return (
    <UserContext.Provider value={username}>
      <NativeBaseProvider>
        <StatusBar hidden={false} barStyle="light-content" />
        <ProductList/>
      </NativeBaseProvider>
    </UserContext.Provider>

  );
}

export { UserContext };
export default App;