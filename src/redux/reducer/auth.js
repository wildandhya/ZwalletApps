import {
    login,
    register,
    pending,
    fulfilled,
    rejected,
    logout,
    editUser,
    checkEmail,
    resetPassword,
    editImage,
    editPin,
    checkPin,
    clearPin
  } from "../action/actionType";
  
  const initialState = {
    user: [],
    userEdit:[],
    error: [],
    pinCheck:[],
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    isLogged:false,
    isRegister:false,
    isError:false,
    pinUpdate:false,
    pinMatch:false
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
            if(payload.data.success){
              return {
                ...prevState,
                isFulfilled: true,
                user: {
                  ...prevState.user,
                  pin:payload.data.data
                },
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
            case checkEmail + pending:
              return {
                ...prevState,
                isPending: true,
              };
        
            case checkEmail + rejected:
              return {
                ...prevState,
                isRejected: true,
                error: payload,
                isPending: false,
              };
            case checkEmail + fulfilled:
              if(payload.data.success){
                return {
                  ...prevState,
                  isFulfilled: true,
                  user: payload.data.data,
                  isPending: false,
                 
                }
              }else{
                  return {
                      ...prevState,
                      isFulfilled: true,
                      error: payload.data,
                      isPending: false,
                    }
              }
              case resetPassword + pending:
                return {
                  ...prevState,
                  isPending: true,
                };
          
              case resetPassword + rejected:
                return {
                  ...prevState,
                  isRejected: true,
                  error: payload,
                  isPending: false,
                };
              case resetPassword + fulfilled:
                if(payload.data.success){
                  return {
                    ...prevState,
                    isFulfilled: true,
                    user: {
                      ...prevState.user,
                      password:payload.data.data
                    },
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

                case editImage + pending:
                  return {
                    ...prevState,
                    isPending: true,
                  };
            
                case editImage + rejected:
                  return {
                    ...prevState,
                    isRejected: true,
                    error: payload,
                    isPending: false,
                  };
                case editImage + fulfilled:
                  if(payload.data.success){
                    return {
                      ...prevState,
                      isFulfilled: true,
                      user: {
                        ...prevState.user,
                        image:payload.data.data.image
                      },
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
                  case editPin + pending:
                    return {
                      ...prevState,
                      isPending: true,
                      pinUpdate:false
                    };
              
                  case editPin + rejected:
                    return {
                      ...prevState,
                      isRejected: true,
                      error: payload,
                      isPending: false,
                      pinUpdate:false
                    };
                  case editPin + fulfilled:
                    if(payload.data.success){
                      return {
                        ...prevState,
                        isFulfilled: true,
                        user: {
                          ...prevState.user,
                          pin:payload.data.data.pin
                        },
                        isPending: false,
                        pinUpdate:true
                       
                      }
                    }else{
                        return {
                            ...prevState,
                            isFulfilled: true,
                            error: payload.data,
                            isPending: false,
                            pinUpdate:false
                            
                           
                          }
                    }
                    case checkPin + pending:
                      return {
                        ...prevState,
                        isPending: true,
                        pinMatch:false
                        
                      };
                
                    case checkPin + rejected:
                      return {
                        ...prevState,
                        isRejected: true,
                        error: payload,
                        isPending: false,
                        pinMatch:false
                        
                      };
                    case checkPin + fulfilled:
                      if(payload.data.success){
                        return {
                          ...prevState,
                          isFulfilled: true,
                          pinCheck: payload.data.data,
                          isPending: false,
                          isError:false,
                          pinMatch:true
                         
                        }
                      }else{
                          return {
                              ...prevState,
                              isFulfilled: true,
                              error: payload.data,
                              isPending: false,
                              isError:true,
                              pinMatch:false
                             
                             
                        }
                      }
          case clearPin:
             return {
               ...prevState,
                  pinCheck: [],
                  isLogged:false,
                  isRegister:false,
                  pinMatch:false,
                  pinUpdate:false
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