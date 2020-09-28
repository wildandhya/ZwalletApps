import {login, register, form, createPin, logout} from './actionType'

import {loginApi, registerApi, createPinApi} from '../../utils/api'


export const loginAction = (data) => {
    return{
        type:login,
        payload: loginApi(data)
    };

}

export const registerAction = (data) => {
    console.log(data)
    return{
        type:register,
        payload: registerApi(data)
    };

}
export const logoutAction = (data) => {
    console.log(data)
    return{
        type:logout
    };

}

export const createPinAction = (id, data) => {
    console.log(data)
    return{
        type:createPin,
        payload: createPinApi(id, data)
    };

}