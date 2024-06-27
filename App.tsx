import React, { useState } from 'react';
import {
  NativeBaseProvider,
  StatusBar
} from 'native-base';
import GitHubApp from './src/chapter6-7/GitHubApp';


const App = () => {
  // const handleSearch = () =>{} 
  return (
    <NativeBaseProvider>
      <StatusBar hidden={false} barStyle="light-content" />
      <GitHubApp />
    </NativeBaseProvider>
  );
}
export default App;