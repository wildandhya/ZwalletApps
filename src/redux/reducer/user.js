import {
   
    pending,
    fulfilled,
    rejected,
    getContact,
    searchContact
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
            user: payload.data.data,
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
         
          
        
      default:
        return prevState;
    }
  };
  
  export default userReducer;