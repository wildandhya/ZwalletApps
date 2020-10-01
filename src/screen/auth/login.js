import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, StatusBar} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, Bold, error} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';
import Email from 'react-native-vector-icons/EvilIcons';
import { Input} from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'

import {loginAction} from '../../redux/action/auth'



const Login = ({navigation})=> {

    const handleGoTo =(screen)=>{
        navigation.navigate(screen)
    }

    const dispatch = useDispatch()
    const {isError, user, isLogged} = useSelector(state => state.auth)
    console.log(isLogged)

    const [show, setShow] = React.useState(false)
    const [focused, setFocused] = React.useState(false)
    const [showError, setShowError] = React.useState(false)

    const formValidation = yup.object().shape({
        email:yup.string().required().label('email').email(),
        password:yup.string().required().label('password').min(5, 'too short').max(15)
    })

   useEffect(()=>{
       if(isLogged){
           setShowError(false)
           navigation.navigate('Home')
       }else{
           setShowError(true)
       }
   }, [isLogged])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={background}/>
            <View style={{marginVertical:60}}>
               <Text style={styles.title}>Zwallet</Text>
            </View>
            <View style={styles.loginWraper}>
                <Text style={styles.loginTitle}>Login</Text>
                <Text style={styles.loginDesc}>Login to your existing account to access</Text>
                <Text style={styles.loginDesc}>all the features in Zwallet.</Text>
            <View style={styles.form}>
                <Formik 
                initialValues={{email:'', password:''}}
                validationSchema={formValidation}
                onSubmit={(values, action)=>{
                    action.resetForm()
                    dispatch(loginAction(values))
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
                            <View style={styles.passwordWrapp}>
                                <Input 
                                secureTextEntry={!show}
                                 leftIcon={
                                    <Icon
                                    name='lock'
                                    color= {focused? primary : secondry && isError? error : secondry}
                                    size={25}
                            
                                    />
                                 }
                                 rightIcon={
                                     <TouchableOpacity onPress={()=>{
                                        setShow(!show)
                                        
                                     }}>
                                          <Icon
                                              name={show === false? 'eye-off' : 'eye'}
                                              color= {focused? primary : secondry && isError? error : secondry}
                                              size={23}
                                    />
                                     </TouchableOpacity>
                                 }
                                 inputContainerStyle={focused? 
                                    {borderBottomColor:primary, borderBottomWidth:2}:{borderBottomColor:secondry, borderBottomWidth:1}
                                    && isError? {borderBottomColor:error, borderBottomWidth:2}:{borderBottomColor:secondry, borderBottomWidth:1}
                                }
                                containerStyle={{height:50, marginTop:10}}
                                placeholder='Enter your password'
                                value={formikProps.values.password}
                                onChangeText={formikProps.handleChange('password')}
                                />
                                <Text style={styles.msgError}>{formikProps.errors.email}</Text>
                            </View>
                              <TouchableOpacity style={{alignItems:'flex-end', paddingRight:19, }}>
                                <Text>Forgot password?</Text>
                              </TouchableOpacity >
                              {isError?(<Text style={styles.textError}>Email or Password Invalid</Text>
                             ):null}
                               <TouchableOpacity style={focused? {...styles.btn, backgroundColor:primary} :styles.btn}
                               onPress={formikProps.handleSubmit}>
                                <Text style={focused?{...styles.btnText, color:white} :styles.btnText}>Login</Text>
                             </TouchableOpacity>
                             <View style={styles.signUpWrap}>
                                  <Text>Don't have an account? Let's </Text>
                                 <TouchableOpacity onPress={()=> navigation.navigate('SignUp')} >
                                     <Text style={{color:primary}}>Sign Up</Text>
                                 </TouchableOpacity>
                             </View>
                           </View>    
                        )}
                </Formik>
            </View>
            </View>
        </View>
    )
}

export default Login

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
        marginTop:25,
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
    textError:{
        color:error,
        fontSize:16,
        fontFamily:'NunitoSans-Semi-bold',
        alignSelf:'center',
        marginTop:15
    },
    msgError:{
        color:error,
        marginHorizontal:19,
        marginTop:5,
        paddingTop:0
    }

})