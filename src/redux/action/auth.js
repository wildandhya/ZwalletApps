import {login, register, form} from './actionType'

import {loginApi, registerApi} from '../../utils/api'


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