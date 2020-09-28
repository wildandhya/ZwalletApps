import {combineReducers} from 'redux'
import authReducer from './auth'
import userReducer from './user'
import contactReducer from './transfer'


const mainReducer = combineReducers({
    auth:authReducer,
    user:userReducer,
    contact:contactReducer
})

export default mainReducer