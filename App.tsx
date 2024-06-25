import React from 'react';

import ProductList from './ProductList';
import { Box, NativeBaseProvider, StatusBar } from 'native-base';

const App = () => {

  return (
    <NativeBaseProvider>
      <StatusBar hidden={false} barStyle="light-content"/>
      <Box bg="#ebebe0"  w="100%" h="60"/>
      <ProductList />
    </NativeBaseProvider>
  );
}
export default App;