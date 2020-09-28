import {
    login,
    register,
    pending,
    fulfilled,
    rejected,
    createPin
  } from "../action/actionType";
  
  const initialState = {
    user: [],
    error: [],
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    isLogged:false,
    isError:false
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
                isError:true
               
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
                    isError:true
                   
                  }
            }
            case createPin + pending:
            return {
              ...prevState,
              isPending: true,
            };
      
          case createPin + rejected:
            return {
              ...prevState,
              isRejected: true,
              error: payload,
              isPending: false,
            };
          case createPin + fulfilled:
              return {
                ...prevState,
                isFulfilled: true,
                user: payload.data.data,
                isPending: false,
                isLogged:true,
                isError:false
               
              }
      default:
        return prevState;
    }
  };
  
  export default authReducer;