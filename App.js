/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Router from './src/router'
import {NavigationContainer} from '@react-navigation/native'
import {Provider} from 'react-redux'
import store from './src/redux/store'

const App= () => {
  return (
    <Provider store={store}>
   <NavigationContainer>
     <Router/>
   </NavigationContainer>
   </Provider>
  );
};

export default App;
