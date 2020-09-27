import Axios from 'axios'

export const ip = 'http://192.168.1.101:8000'

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

