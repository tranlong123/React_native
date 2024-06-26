import React from 'react';
import {
  Box, NativeBaseProvider, StatusBar
} from 'native-base';
import Rating from './src/Rating';

const App = () => {
  const isValid = false;

  return (
    <NativeBaseProvider>

      <StatusBar hidden={false} barStyle="light-content" />
      <Box
        bg="#f5f5f0" w="100%" h="60"
        borderBottomWidth="1"
        borderColor="coolGray.200"
      />

      <Rating rating='1' />
      <Rating rating='2' />
      <Rating rating='3' />
      <Rating rating='4' />
      <Rating rating='5' />

    </NativeBaseProvider>
  );
}
export default App;