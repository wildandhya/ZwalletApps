import {
   
    pending,
    fulfilled,
    rejected,
    getContact,
    getHistory,
    searchContact,
    checkPass,
    clearUser,
    checkPin
  } from "../action/actionType";
  
  const initialState = {
    data: [],
    error: [],
    history:[],
    password:[],
    isPending: false,
    isFulfilled: false,
    isError:false,
    passMatch:false
  };
  
  const userReducer = (prevState = initialState, { type, payload }) => {
    switch (type) {
      case getContact + pending:
        return {
          ...prevState,
          isPending: true,
          
        };
  
      case getContact + rejected:
        return {
          ...prevState,
          isRejected: true,
          error: payload,
          isPending: false,
          
        };
      case getContact + fulfilled:

          return {
            ...prevState,
            isFulfilled: true,
            data: payload.data.data,
            isPending: false,
            isLogged:true,
            isError:false
           
          }
          case searchContact + pending:
            return {
              ...prevState,
              isPending: true,
              
            };
      
          case searchContact + rejected:
            return {
              ...prevState,
              isRejected: true,
              error: payload,
              isPending: false,
              
            };
          case searchContact + fulfilled:
    
              return {
                ...prevState,
                isFulfilled: true,
                user: payload.data.data,
                isPending: false,
                isLogged:true,
                isError:false
               
              }
              case getHistory + pending:
                return {
                  ...prevState,
                  isPending: true,
                  
                };
          
              case getHistory + rejected:
                return {
                  ...prevState,
                  isRejected: true,
                  error: payload,
                  isPending: false,
                  
                };
              case getHistory + fulfilled:
        
                  return {
                    ...prevState,
                    isFulfilled: true,
                    history: payload.data.data,
                    isPending: false,
                    isError:false,
                    isPinMatch:false
                   
                  }
                  case checkPass + pending:
                    return {
                      ...prevState,
                      isPending: true,
                      
                    };
              
                  case checkPass + rejected:
                    return {
                      ...prevState,
                      isRejected: true,
                      error: payload,
                      isPending: false,
                      
                    };
                  case checkPass + fulfilled:
                    if(payload.data.success){
                      return {
                        ...prevState,
                        isFulfilled: true,
                        password: payload.data.data,
                        isPending: false,
                        isError:false,
                        passMatch:true
                       
                      };
                    }else{
                      return {
                        ...prevState,
                        isFulfilled: true,
                        password: payload.data.data,
                        isPending: false,
                        isError:false,
                        passMatch:false
                       
                      };
                    }
                    case clearUser:
                        return {
                          ...prevState,
                          password: [],
                          
                    };
          
        
      default:
        return prevState;
    }
  };
  
  export default userReducer;