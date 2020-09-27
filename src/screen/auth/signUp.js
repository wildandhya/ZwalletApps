import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, LayoutAnimation} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';
import Email from 'react-native-vector-icons/EvilIcons';
import { Input} from 'react-native-elements';
import * as yup from 'yup'




const SignUp = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    const [show, setShow] = React.useState(false)
    const [focused, setFocused] = React.useState(false)

    const formValidation = yup.object().shape({
        username:yup.string(),
        email:yup.string().email(),
        password:yup.string().required()
    })

    return (
        <View style={styles.container}>
            <View style={{marginVertical:60}}>
               <Text style={styles.title}>Zwallet</Text>
            </View>
            <View style={styles.loginWraper}>
                <Text style={styles.loginTitle}>Sign Up</Text>
                <Text style={styles.loginDesc}>Create your account to access Zwallet</Text>
            <View style={styles.form}>
                <Formik 
                initialValues={{username:'', email:'', password:''}}
                onSubmit={(values)=>{
                    alert(JSON.stringify(values))
                }}
                >
                {(formikProps) => (
                        <View style={styles.formWrapp}>
                            <View style={styles.emailWrapp}>
                                <Input 
                                leftIcon={
                                    <Icon
                                    name='user'
                                    color= {focused? primary : secondry}
                                    size={24}
                            
                                    />
                                }
                                inputContainerStyle={focused? {borderBottomColor:primary, borderBottomWidth:2}:{borderBottomColor:secondry, borderBottomWidth:1}} 
                                placeholder='Enter your username'
                                value={formikProps.values.username}
                                onChange={formikProps.handleChange('username')}
                                onFocus={()=> setFocused(!focused)}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 

                                inputContainerStyle={focused? {borderBottomColor:primary, borderBottomWidth:2}:{borderBottomColor:secondry, borderBottomWidth:1}} 
                                placeholder='Enter your e-mail'
                                value={formikProps.values.email}
                                onChange={formikProps.handleChange('email')}
                                leftIcon={
                                    <Email
                                    name='envelope'
                                    color= {focused? primary : secondry}
                                    size={30}
                                    
                                    
                            
                                    />
                                    
                                }
                                onFocus={()=> setFocused(!focused)}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                secureTextEntry={!show}
                                inputContainerStyle={focused? {borderBottomColor:primary, borderBottomWidth:2}:{borderBottomColor:secondry, borderBottomWidth:1}} 
                                placeholder='Enter your password'
                                value={formikProps.values.password}
                                onChange={formikProps.handleChange('password')}
                                leftIcon={
                                    <Icon
                                    name='lock'
                                    color= {focused? primary : secondry}
                                    size={25}
                            
                                    />
                                 }
                                 rightIcon={
                                     <TouchableOpacity onPress={()=>{
                                        setShow(!show)
                                     }}>
                                          <Icon
                                              name={show === false? 'eye-off' : 'eye'}
                                              color= {focused? primary : secondry}
                                              size={23}
                                    />
                                     </TouchableOpacity>
                                 }
                                />
                            </View>
                            
                            <TouchableOpacity style={focused? {...styles.btn, backgroundColor:primary} : styles.btn} onPress={()=> handleGoTo('CreatePin')}>
                                <Text style={focused?{...styles.btnText, color:white} :styles.btnText}>Sign Up</Text>
                           </TouchableOpacity>
                           <View style={styles.signUpWrap}>
                                  <Text>Already have an account? Let's </Text>
                                 <TouchableOpacity onPress={()=> handleGoTo('Login')}>
                                     <Text style={{color:primary}}>Login</Text>
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

export default SignUp

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:background,
        flex:1
    },
    title:{
        fontSize:29,
        textAlign:'center',
        color:primary,
        fontWeight:'bold',
    },
    loginWraper:{
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:white,
        flex:1,
        elevation:10
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
        borderBottomColor:secondry
    },
    emailWrapp:{
        paddingHorizontal:19,
        paddingTop:53
    },
    passwordWrapp:{
        paddingHorizontal:19,
    },
    btn:{
        backgroundColor:btn,
        marginHorizontal:19,
        paddingVertical:16,
        marginTop:10,
        borderRadius:12
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
    }

})