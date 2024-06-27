import React from 'react';
import {
  Box, NativeBaseProvider, StatusBar, Text, ScrollView
} from 'native-base';

import ProductList from './src/ProductList';

const App = () => {
  const isValid = false;

  return (
    <NativeBaseProvider>

      <StatusBar hidden={false} barStyle="light-content" />
      <Box
        bg="#d4d4d4"
        height={16}
        justifyContent="center"
        alignItems="center"
        shadow={3}
      >
        <Text
          color="#000000"
          fontSize="xl"
          fontWeight="bold"
        >
          List of Products
        </Text>
      </Box>
      <ScrollView>
        <ProductList />
      </ScrollView>
    </NativeBaseProvider>
  );
}
export default App;