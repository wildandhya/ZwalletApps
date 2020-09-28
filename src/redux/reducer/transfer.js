import {
   
    pending,
    fulfilled,
    rejected,
    addContact,
    addToConfrim
  } from "../action/actionType";
  
  const initialState = {
    data: [],
    form:[],
    error: [],

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
  

        
      default:
        return prevState;
    }
  };
  
  export default contactReducer;