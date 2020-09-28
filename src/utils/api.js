import Axios from 'axios'

export const ip = 'http://10.0.2.2:8000'

// 192.168.43.107

export const getContactApi = ()=>{
    return Axios.get(`${ip}/user`)
}
export const searchContactApi = (username)=>{
    return Axios.get(`${ip}/user?search=${username}`)
}

export const loginApi = (data)=>{
    return Axios.post(`${ip}/login`, data)
}

export const registerApi = (data)=>{
    return Axios.post(`${ip}/register`, data)
}

export const transferApi = (data)=>{
    return Axios.post(`${ip}/transfer`, data)
}

export const createPinApi = (id,data)=>{
    return Axios.post(`${ip}/pin/${id}`, data)
}

export const getHistoryApi = (id)=>{
    return Axios.post(`${ip}/transfer/${id}`)
}





