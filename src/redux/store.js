import {createStore, applyMiddleware} from 'redux'

import rpm from 'redux-promise-middleware'

import mainReducer from './reducer/index'
import {createLogger} from 'redux-logger'


const logger = createLogger()
const enhancer = applyMiddleware(rpm, logger)

const store = createStore(mainReducer, enhancer)


export default store