import {
    pending,
    fulfilled,
    rejected,
    addContact,
    addToConfrim,
    transfer,
    getHistory,
    checkPin
  } from "../action/actionType";
  
  const initialState = {
    data: {},
    error: [],
    nota:[],
    pin:[],
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
        data: {...prevState.data,
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
              case checkPin + pending:
                return {
                  ...prevState,
                  isPending: true,
                  
                };
          
              case checkPin + rejected:
                return {
                  ...prevState,
                  isRejected: true,
                  error: payload,
                  isPending: false,
                  
                };
              case checkPin + fulfilled:
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
      default:
        return prevState;
    }
  };
  
  export default contactReducer;