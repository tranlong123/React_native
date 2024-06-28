import React, { useState } from 'react';
import {
  NativeBaseProvider,
  StatusBar
} from 'native-base';
import GitHubApp from './src/chapter6-7/GitHubApp';
import { MyForm } from './src/chapter6-7/MyForm';

const App = () => {
  // const handleSearch = () =>{} 
  return (
    <NativeBaseProvider>
      <StatusBar hidden={false} barStyle="light-content" />
      {/* <GitHubApp /> */}
      <MyForm/>
    </NativeBaseProvider>
  );
}
export default App;