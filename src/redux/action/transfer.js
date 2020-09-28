import {addToConfrim, addContact} from './actionType'

import {getContactApi, searchContactApi} from '../../utils/api'
import { Value } from 'react-native-reanimated';


export const addToConfirmAction = (data) => {
    return{
        type:addToConfrim,
        payload:data
    };

}