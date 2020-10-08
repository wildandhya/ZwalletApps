import {getContact, searchContact, addContact, checkPass, clearUser} from './actionType'

import {getContactApi, searchContactApi, checkPassApi} from '../../utils/api'


export const getContactAction = () => {
   
    return{
        type:getContact,
        payload: getContactApi()
    };

}

export const searchContactAction = (username) => {
    return{
        type:searchContact,
        payload: searchContactApi(username)
    };

}
export const addContactAction = (data) => {
    return{
        type:addContact,
        payload: data
    };

}
export const checkPassAction = (email, password, newPassword) => {
    return{
        type:checkPass,
        payload:checkPassApi(email, password, newPassword)
    };

}

export const clearUserAction = () => {
    return{
        type:clearUser,
       
    };

}