import {combineReducers} from 'redux'
import authReducer from './auth'


const mainReducer = combineReducers({
    auth:authReducer
})

export default mainReducer