import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import {creatStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';


const App = () => {
  return (
    <Provider store={creatStore(reducers)}>
      <View style={{ felx: 1}}>
        <Header headerText="Tech Stack"/>
        <LibraryList />
      </View>
    </Provider>
  )
};

export default App;
