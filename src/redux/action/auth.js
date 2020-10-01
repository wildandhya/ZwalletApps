import {login, register, editUser, createPin, logout} from './actionType'

import {loginApi, registerApi, editUserApi} from '../../utils/api'


export const loginAction = (data) => {
    return{
        type:login,
        payload: loginApi(data)
    };

}

export const registerAction = (data) => {
    // console.log(data)
    return{
        type:register,
        payload: registerApi(data)
    };

}
export const logoutAction = (data) => {
    // console.log(data)
    return{
        type:logout
    };

}

export const editUserAction = (username, password, pin, image, email) => {
    return{
        type:editUser,
        payload: editUserApi(username, password, pin, image, email)
    };

}