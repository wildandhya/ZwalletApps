import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, StatusBar} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, Bold, error, success} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Email from 'react-native-vector-icons/EvilIcons';
import { Input} from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import {sendEmailAction, checkEmailAction} from '../../redux/action/auth'



const CheckEmail = ({navigation})=> {

    const handleGoTo =(screen)=>{
        navigation.navigate(screen)
    }

    const dispatch = useDispatch()
    const {isError, user,  errorMsg, otp} = useSelector(state => state.auth)


    const [show, setShow] = React.useState(false)
    const [focused, setFocused] = React.useState(false)
    const [msg, setMsg] = React.useState(false)

    const formValidation = yup.object().shape({
        email:yup.string().required().label('email').email(),
    })

   useEffect(()=>{
       if(otp.msg === 'Email Valid'){
           setMsg('Check your Email')
           setTimeout(()=>{
            handleGoTo('Otp')
           }, 2000)
           
       }
    //    if(errorMsg.msg === 'Invalid Email'){
    //      setMsg('Your Email Invalid')
    //    }
   }, [otp])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={background}/>
            <View style={{marginVertical:60}}>
               <Text style={styles.title}>Zwallet</Text>
            </View>
            <View style={styles.loginWraper}>
                <Text style={styles.loginTitle}>Reset Password</Text>
                <Text style={styles.loginDesc}>Enter your Zwallet e-mail so we can send you a OTP Code to your Email.</Text>
                
            <View style={styles.form}>
                <Formik 
                initialValues={{email:''}}
                validationSchema={formValidation}
                onSubmit={(value, action)=>{
                    action.resetForm()
                    dispatch(sendEmailAction(value.email))
                    
                }}
                >
                {(formikProps) => (                       
                     <View style={styles.formWrapp}>
                            <View style={styles.emailWrapp}>
                                <Input 
                                leftIcon={
                                    <Email
                                    name='envelope'
                                    color= {focused? primary : secondry  && isError? error : secondry}
                                    size={30}
                            
                                    />
                                }
                                inputContainerStyle={focused? 
                                    {borderBottomColor:primary, borderBottomWidth:2}:{borderBottomColor:secondry, borderBottomWidth:1} 
                                    && isError? {borderBottomColor:error, borderBottomWidth:2}:{borderBottomColor:secondry, borderBottomWidth:1}
                                } 
                                containerStyle={{height:50}}
                                placeholder='Enter your e-mail'
                                onFocus={()=> setFocused(!focused)}
                                value={formikProps.values.email}
                                onChangeText={formikProps.handleChange('email')}
                                />
                                <Text style={styles.msgError}>{formikProps.errors.email}</Text>
                            </View>
                            {isError !== true?(<Text style={styles.msgSuccess}>{msg}</Text>
                             ):(<Text style={styles.msgError}>Your Email Invalid</Text>)}
                               <TouchableOpacity style={focused? {...styles.btn, backgroundColor:primary} :styles.btn}
                               onPress={formikProps.handleSubmit}>
                                <Text style={focused?{...styles.btnText, color:white} :styles.btnText}>Confirm</Text>
                             </TouchableOpacity>
                           </View>    
                        )}
                </Formik>
            </View>
            </View>
        </View>
    )
}

export default CheckEmail

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:background,
        height
    },
    title:{
        fontSize:29,
        textAlign:'center',
        color:primary,
        fontFamily:Bold,
        // fontWeight:'bold',
    },
    loginWraper:{
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:white,
        height,
        elevation:10,
    },
    loginTitle:{
        marginTop:40,
        textAlign:'center',
        fontSize:24,
        color:drak,
        marginBottom:20,
        fontWeight:'bold'
    },
    loginDesc:{
        textAlign:'center',
        color:subTitle,
        marginBottom:10,
        fontSize:16
    },
    input:{
        color:drak,
        borderBottomWidth:1,
        borderBottomColor:secondry,

    },
    emailWrapp:{
        paddingHorizontal:19,
        paddingTop:53,
    },
    passwordWrapp:{
        paddingHorizontal:19,
    },
    btn:{
        backgroundColor:btn,
        marginHorizontal:19,
        paddingVertical:16,
        marginTop:100,
        borderRadius:12,

    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:'#88888f'

    },
    signUpWrap:{
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:20
    },
    msgError:{
        color:error,
        fontSize:16,
        fontFamily:'NunitoSans-Semi-bold',
        alignSelf:'center',
        marginTop:15
    },
    msgSuccess:{
        color:success,
        fontSize:16,
        fontFamily:'NunitoSans-Semi-bold',
        alignSelf:'center',
        marginTop:15
    }

})