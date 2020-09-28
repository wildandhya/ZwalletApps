import {addToConfrim, transfer, getHistory} from './actionType'

import {transferApi, getHistoryApi} from '../../utils/api'



export const addToConfirmAction = (data) => {
    return{
        type:addToConfrim,
        payload:data
    };

}

export const transferAction = (data) => {
    console.log(data)
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