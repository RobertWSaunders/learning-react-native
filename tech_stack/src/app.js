import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import {creatStore } from 'redux';
import reducers from './reducers';


const App = () => {
  return (
    <Provider store={creatStore(reducers)}>
      <View />
    </Provider>
  )
};

export default App;
