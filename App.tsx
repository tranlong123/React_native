import React from 'react';
import {
  Box, NativeBaseProvider,
  StatusBar, Text, ScrollView
} from 'native-base';

import ProductList from './src/ProductList';
import MyCard from './src/MyCard';

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
        {/* <Text
          color="#000000"
          fontSize="xl"
          fontWeight="bold"
        >
          List of Products
        </Text> */}
        <MyCard>
          This is a long sentence, and I want to insert content into the
          Card component from the outside.
        </MyCard>
      </Box>
      {/* <ScrollView>
        <ProductList />
      </ScrollView> */}
    </NativeBaseProvider>
  );
}
export default App;