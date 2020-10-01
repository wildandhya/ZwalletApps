import {createStore, applyMiddleware} from 'redux'

import rpm from 'redux-promise-middleware'

import logger from 'redux-logger'

import {persistStore, persistReducer} from 'redux-persist'
import createAsyncStorage from '@react-native-community/async-storage';

import mainReducer from './reducer/index'
const enhancer = applyMiddleware(rpm, logger)

const storage = createAsyncStorage

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export default ()=>{
    let store = createStore(persistedReducer, enhancer)
    let persistor = persistStore(store)
    return {
        store,
        persistor
    }

}