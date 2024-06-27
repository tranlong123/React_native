import React from 'react';
import {
  NativeBaseProvider,
  StatusBar,
} from 'native-base';

import { MyForm } from './src/chapter6/MyForm';

const App = () => {
  
  return (
    <NativeBaseProvider>
      <StatusBar hidden={false} barStyle="light-content" />
        <MyForm />
    </NativeBaseProvider>
  );
}
export default App;