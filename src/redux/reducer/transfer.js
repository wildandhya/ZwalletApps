import {
    pending,
    fulfilled,
    rejected,
    addContact,
    addToConfrim,
    transfer,
    checkPin,
    pinConfirm,
    deletePin
  } from "../action/actionType";
  
  const initialState = {
    data: {},
    error: [],
    nota:[],
    pin:[],
    history:[],
    isPending:false,
    isRejected:false,
    isFulfilled:false,
    isPinMatch:false

  };
  
  const contactReducer = (prevState = initialState, { type, payload, inputType, inputValue }) => {
    switch (type) {
      case addContact :
        return {
          ...prevState,
          data: {...prevState.data,
            id:payload.id,
            username:payload.username,
            phone_number:payload.phone_number,
            image:payload.image
          }
          
        };
      case addToConfrim :
        return {
        ...prevState,
        data: {
          ...prevState.data,
                amount: payload.amount,
                notes:payload.notes

              }
            
      };
      case transfer + pending:
        return {
          ...prevState,
          isPending: true,
          
        };
  
      case transfer + rejected:
        return {
          ...prevState,
          isRejected: true,
          error: payload.data,
          isPending: false,
          
        };
      case transfer + fulfilled:
          return {
            ...prevState,
            isFulfilled: true,
            nota:payload.data.data,
            isPending: false,
            isError:false
           
          }
              case pinConfirm + pending:
                return {
                  ...prevState,
                  isPending: true,
                  
                };
          
              case pinConfirm + rejected:
                return {
                  ...prevState,
                  isRejected: true,
                  error: payload,
                  isPending: false,
                  
                };
              case pinConfirm + fulfilled:
                if(payload.data.success === true){
                  return {
                    ...prevState,
                    isFulfilled: true,
                    pin: payload.data.data,
                    isPending: false,
                    isError:false,
                    isPinMatch:true
                   
                  }
                }else{
                    return {
                        ...prevState,
                        isFulfilled: true,
                        error: payload.data,
                        isPending: false,
                        isError:true,
                        isPinMatch:false
                       
                       
                  }
                }
                case deletePin:
                  return {
                    ...prevState,
                    pin: [],
                    
                  };
      default:
        return prevState;
    }
  };
  
  export default contactReducer;