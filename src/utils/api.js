import Axios from 'axios'

export const ip = 'http://3.87.168.244:7000'

// 192.168.43.107
//10.0.2.2

export const localhost = '3.87.168.244'

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

export const createPinApi = (id, pin)=>{
    return Axios.post(`${ip}/pin/${id}`, pin)
}

export const getHistoryApi = (id)=>{
    return Axios.get(`${ip}/history?sender_id=${id}&reciever_id=${id}`)

}

export const editUserApi = (username, password, pin, image, email) => {
    let data = new FormData();
    if (username !== null) {
      data.append('username', username);
    } else if (password !== null) {
      data.append('password', password);
    } else if (pin !== null) {
      data.append('pin', pin);
    } else if (image !== null) {
      data.append('image', {
        uri: `file://${image.path}`,
        type: image.type,
        name: image.fileName,
        size: image.fileSize,
      });
    }
    data.append('email', email);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        contentType: false,
        mimeType: 'multipart/form-data',
        'cache-control': 'no-cache',
        accept: 'application/json',
      },
    };
    const url = `${ip}/user/edit`;
    return Axios.patch(url, data, config);
  };

  export const checkPinApi = (pin, email)=>{
    return Axios.post(`${ip}/checkPin`, {pin:pin, email: email,} )

}

export const checkPassApi = (email, password, newPassword)=>{
  return Axios.post(`${ip}/checkPass`, {email: email, password:password, newPassword:newPassword} )

}

export const checkEmailApi = (email)=>{
  return Axios.post(`${ip}/checkEmail`, email )

}

export const resetPasswordApi = (email, password)=>{
  return Axios.patch(`${ip}/resetPassword`, {email: email, password:password} )

}

export const sendEmailApi = (email)=>{
  return Axios.get(`${ip}/sendEmail?email=${email}`)

}


export const editPinApi = (pin, email)=>{
  return Axios.patch(`${ip}/editPin`, {pin: pin, email:email} )

}

export const editImageApi = (image, email)=>{
  let data = new FormData();
  if (image !== null) {
    data.append('image', {
      uri: `file://${image.path}`,
      type: image.type,
      name: image.fileName,
      size: image.fileSize,
    });
  }
  data.append('email', email);
  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      contentType: false,
      mimeType: 'multipart/form-data',
      'cache-control': 'no-cache',
      accept: 'application/json',
    },
  };
  console.log(data)
  const url = `${ip}/editImage`;
  return Axios.patch(url, data, config);

}





