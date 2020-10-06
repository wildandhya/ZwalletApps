import {getContact, searchContact, addContact} from './actionType'

import {getContactApi, searchContactApi} from '../../utils/api'


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