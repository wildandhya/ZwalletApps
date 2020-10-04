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
    data: [],
    form:[],
    error: [],
    nota:[],
    pin:[]

  };
  
  const contactReducer = (prevState = initialState, { type, payload, inputType, inputValue }) => {
    switch (type) {
      case addContact :
        return {
          ...prevState,
          data: [...prevState.data, payload]
          
        };
      case addToConfrim :
        return {
        ...prevState,
        form: [...prevState.data, payload]
            
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
          error: payload,
          isPending: false,
          
        };
      case transfer + fulfilled:
        console.log(payload.data.data)
          return {
            ...prevState,
            isFulfilled: true,
            nota: payload.data.data,
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
                isLogged:true,
                isError:false
               
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
                console.log('inipayload',payload.data.data)
        
                  return {
                    ...prevState,
                    isFulfilled: true,
                    data: payload.data.data,
                    isPending: false,
                    isLogged:true,
                    isError:false
                   
                  }
      default:
        return prevState;
    }
  };
  
  export default contactReducer;