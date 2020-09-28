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

import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/redux/store';

const { persistor, store } = configureStore();

const App= () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <NavigationContainer>
            <Router/>
         </NavigationContainer>
      </PersistGate>
   </Provider>
  );
};

export default App;
