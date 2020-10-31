import {addToConfrim, transfer, getHistory,  pinConfirm,  deletePin} from './actionType'

import {transferApi, getHistoryApi, checkPinApi} from '../../utils/api'



export const addToConfirmAction = (data) => {
    return{
        type:addToConfrim,
        payload:data
    };

}

export const transferAction = (data) => {
    return{
        type:transfer,
        payload:transferApi(data)
    };

}

export const getHistoryAction = (id) => {
    return{
        type:getHistory,
        payload:getHistoryApi(id)
    };

}

export const pinConfirmAction = (pin, email) => {
    return{
        type:pinConfirm,
        payload:checkPinApi(pin, email)
    };

}

export const deletePinAction = () => {
    return{
        type:deletePin,       
    };
}