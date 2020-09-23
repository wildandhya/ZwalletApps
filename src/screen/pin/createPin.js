import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input} from 'react-native-elements';
import * as yup from 'yup'




const CreatePin = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <View style={{marginVertical:60,}}>
               <Text style={styles.title}>Zwallet</Text>
            </View>
            <View style={styles.loginWraper}>
                <Text style={styles.loginTitle}>Create Security PIN</Text>
                <Text style={styles.loginDesc}>Create a PIN that’s contain 6 digits number for </Text>
                <Text style={styles.loginDesc}>security purpose in Zwallet.</Text>
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
                                style={styles.input} 
                                value={formikProps.values.username}
                                onChange={formikProps.handleChange('username')}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                style={styles.input} 
                                placeholder=''
                                value={formikProps.values.email}
                                onChange={formikProps.handleChange('email')}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                style={styles.input} 
                                placeholder=''
                                value={formikProps.values.password}
                                onChange={formikProps.handleChange('password')}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                style={styles.input} 
                                placeholder=''
                                value={formikProps.values.password}
                                onChange={formikProps.handleChange('password')}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                style={styles.input} 
                                placeholder=''
                                value={formikProps.values.password}
                                onChange={formikProps.handleChange('password')}
                                />
                            </View>
                            <View style={styles.passwordWrapp}>
                                <Input 
                                style={styles.input} 
                                placeholder=''
                                value={formikProps.values.password}
                                onChange={formikProps.handleChange('password')}
                                />
                            </View>
                            
                           
                           </View>    
                        )}
                </Formik>
            </View>
            </View>
            <View style={styles.btnWarp}>
            <TouchableOpacity style={styles.btn} onPress={()=> handleGoTo('PinSuccess')}>
                    <Text style={styles.btnText}>Confirm</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreatePin

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:background,
        flex:1
    },
    title:{
        fontSize:29,
        fontWeight:'bold',
        textAlign:'center',
        color:primary
    },
    loginWraper:{
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:white,
        flex:1
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
    formWrapp:{
        flexDirection:'row',
        marginVertical:20,
        marginHorizontal:10,
        justifyContent:'space-evenly'
    },
    input:{
        borderWidth:1,
        borderColor:secondry,
        paddingHorizontal:25,
        paddingVertical:14,
        borderRadius:10
    },
    // pinWrapp:{
    //     paddingHorizontal:19,
    //     paddingTop:53
    // },
    // passwordWrapp:{
    //     paddingHorizontal:19,
    // },
    btnWarp:{
        backgroundColor:white,
        paddingBottom:20
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
   

})