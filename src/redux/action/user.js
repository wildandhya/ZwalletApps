import {getContact, searchContact} from './actionType'

import {getContactApi, searchContactApi} from '../../utils/api'


export const getContactAction = () => {
    return{
        type:getContact,
        payload: getContact()
    };

}

export const searchContactAction = (data) => {
    return{
        type:searchContact,
        payload: searchContactApi(data)
    };

}