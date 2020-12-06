import {login, register, sendEmail, editUser, checkEmail, logout, resetPassword, editImage, editPin, checkPin, clearPin, clearPassword, pinClear} from './actionType'

import {loginApi, registerApi, sendEmailApi, editUserApi, checkEmailApi, resetPasswordApi, editImageApi, editPinApi, checkPinApi } from '../../utils/api'


export const loginAction = (data) => {
    return{
        type:login,
        payload: loginApi(data)
    };

}

export const registerAction = (data) => {
    return{
        type:register,
        payload: registerApi(data)
    };

}
export const logoutAction = () => {
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
export const editImageAction = (image, email) => {
    return{
        type:editImage,
        payload: editImageApi(image, email)
    };

}


export const sendEmailAction = (email) => {
    // console.log(email)
    return{
        type:sendEmail,
        payload: sendEmailApi(email)
    };
}

export const resetPasswordAction = (email, password) => {
    return{
        type:resetPassword,
        payload: resetPasswordApi(email, password)
    };
}

export const editPinAction = (pin, email) => {
    // console.log(data)
    return{
        type:editPin,
        payload: editPinApi(pin, email)
    };
}

export const checkPinAction = (pin, email) => {
    return{
        type:checkPin,
        payload: checkPinApi(pin, email)
    };
}

export const clearPinAction = () => {
    return{
        type:clearPin,
       
    };
}

export const pinClearAction = () => {
    return{
        type:pinClear,
       
    };
}

export const clearPasswordAction = () => {
    return{
        type:clearPassword,
       
    };
}