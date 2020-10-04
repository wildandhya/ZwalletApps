import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';
import { Input} from 'react-native-elements';
import Arrow from 'react-native-vector-icons/AntDesign'

import {editUserAction} from '../../redux/action/auth'
import { useDispatch } from 'react-redux'


const ChangePassword = ({navigation})=> {

    const dispatch = useDispatch()

    const [msgError, setMsgError] = useState(false)
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <View style={{flexDirection:'row', marginTop:50, marginLeft:17}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
                 <Arrow 
                 name='arrowleft'
                 size={28}
                 color={white}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>Change Password</Text>
                </View>  
            </View>
            <View style={styles.formWraper}>
                <Text style={styles.loginDesc}>You must enter your current password and then type your new password twice</Text>
            <View style={styles.form}>
                <Formik 
                initialValues={{currentPassword:'', newPassword:'', repeatPassword:''}}
                onSubmit={(values, action)=>{
                    action.resetForm()
                    if(values.newPassword === values.repeatPassword){
                        alert('ok')
                        dispatch(editUserAction(values))
                    }else{
                        setMsgError(true)
                    }
                }}
                >
                {(formikProps) => (
                        <View style={styles.formWrapp}>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                 leftIcon={
                                    <Icon
                                    name='lock'
                                    color= {secondry}
                                    size={23}
                            
                                    />
                                 }
                                 rightIcon={
                                    <Icon
                                    name='eye-off'
                                    color= {secondry}
                                    size={20}
                            
                                    />

                                 }
                                style={styles.input} 
                                placeholder='Current Password'
                                value={formikProps.values.currentPassword}
                                onChangeText={formikProps.handleChange('currentPassword')}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                 leftIcon={
                                    <Icon
                                    name='lock'
                                    color= {secondry}
                                    size={23}
                            
                                    />
                                 }
                                 rightIcon={
                                    <Icon
                                    name='eye-off'
                                    color= {secondry}
                                    size={20}
                            
                                    />

                                 }
                                style={styles.input} 
                                placeholder='New Password'
                                value={formikProps.values.newPassword}
                                onChangeText={formikProps.handleChange('newPassword')}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                 leftIcon={
                                    <Icon
                                    name='lock'
                                    color= {secondry}
                                    size={23}
                                    />
                                 }
                                 rightIcon={
                                    <Icon
                                    name='eye-off'
                                    color= {secondry}
                                    size={20}
                            
                                    />

                                 }
                                style={styles.input} 
                                placeholder='Repeat Password'
                                value={formikProps.values.repeatPassword}
                                onChangeText={formikProps.handleChange('repeatPassword')}
                                />

                                {msgError?(<Text style={{color:'red'}}>password no match</Text>):null}
                            </View>
                            <TouchableOpacity style={styles.btn} onPress={formikProps.handleSubmit}>
                                <Text style={styles.btnText}>Change Password</Text>
                           </TouchableOpacity>
                           </View>    
                        )}
                </Formik>
            </View>
            </View>
        </View>
    )
}

export default ChangePassword

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fafcff',
        height
    },
    title:{
        fontSize:29,
        textAlign:'center',
        color:primary,
        fontWeight:'bold',
    },
    formWraper:{
      marginTop:40,
      paddingHorizontal:16,
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
        marginLeft:5
    },
    passwordWrapp:{
        marginTop:30
    },
    btn:{
        backgroundColor:btn,
        marginHorizontal:19,
        paddingVertical:16,
        marginTop:70,
        borderRadius:12
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:'#88888f'

    },
    header:{
        backgroundColor:primary,
        height:'13%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    title:{
        color:white,
        fontSize:20,
        fontFamily:'NunitoSans-Bold',
        marginLeft:20,
    },

})