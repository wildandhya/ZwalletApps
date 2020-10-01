import {
    login,
    register,
    pending,
    fulfilled,
    rejected,
    logout,
    editUser,
    
  } from "../action/actionType";
  
  const initialState = {
    user: [],
    error: [],
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    isLogged:false,
    isRegister:false,
    isError:false,
    isPin:false
  };
  
  const authReducer = (prevState = initialState, { type, payload }) => {
    switch (type) {
      case login + pending:
        return {
          ...prevState,
          isPending: true,
          
        };
  
      case login + rejected:
        return {
          ...prevState,
          isRejected: true,
          error: payload,
          isPending: false,
          
        };
      case login + fulfilled:
        if(payload.data.success){
          console.log(payload.data.data)
          return {
            ...prevState,
            isFulfilled: true,
            user: payload.data.data,
            isPending: false,
            isLogged:true,
            isError:false
           
          }
        }else{
            return {
                ...prevState,
                isFulfilled: true,
                error: payload.data,
                isPending: false,
                isLogged:false,
                isError:true,
               
               
              }
        }
        
        case register + pending:
            return {
              ...prevState,
              isPending: true,
            };
      
          case register + rejected:
            return {
              ...prevState,
              isRejected: true,
              error: payload,
              isPending: false,
            };
          case register + fulfilled:
            if(payload.data.success){
              
              return {
                ...prevState,
                isFulfilled: true,
                user: payload.data.data,
                isPending: false,
                isRegister:true,
               
              }
            }else{
                return {
                    ...prevState,
                    isFulfilled: true,
                    error: payload.data,
                    isPending: false,
                    isRegister:false,
                   
                  }
            }
            case editUser + pending:
            return {
              ...prevState,
              isPending: true,
            };
      
          case editUser + rejected:
            return {
              ...prevState,
              isRejected: true,
              error: payload,
              isPending: false,
            };
          case editUser + fulfilled:
            console.log(payload.data.data)
            if(payload.data.success){
              return {
                ...prevState,
                isFulfilled: true,
                user: payload.data.data,
                isPending: false,
                isPin:true
               
              }
            }else{
                return {
                    ...prevState,
                    isFulfilled: true,
                    error: payload.data,
                    isPending: false,
                    isPin:false
                    
                   
                  }
            }
          case logout:
              return {
                  ...prevState,
                  user: [],
                  isLogged:false,
                  isRegister:false,
              }
      default:
        return prevState;
    }
  };
  
  export default authReducer;