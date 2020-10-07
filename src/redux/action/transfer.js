import {addToConfrim, transfer, getHistory, checkPin} from './actionType'

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

export const checkPinAction = (email, pin) => {
    return{
        type:checkPin,
        payload:checkPinApi(email, pin)
    };

}