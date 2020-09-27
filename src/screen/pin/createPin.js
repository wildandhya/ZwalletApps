import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, error} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'




const CreatePin = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    const [focused, setFocused] = React.useState(false)
    const [msg, setMsg] = React.useState(false)
    const [pin, setPin] = React.useState('')

    return (
        <View style={styles.container}>
            <View style={{marginVertical:60,}}>
               <Text style={styles.title}>Zwallet</Text>
            </View>
            <View style={styles.Wraper}>
                <Text style={styles.pinTitle}>Create Security PIN</Text>
                <Text style={styles.pinDesc}>Create a PIN that’s contain 6 digits number for </Text>
                <Text style={styles.pinDesc}>security purpose in Zwallet.</Text>
            <View style={styles.form}>
            <SmoothPinCodeInput
                codeLength={6}
                cellStyle={focused?{...styles.inputWrap, borderColor:primary, borderWidth:2}: styles.inputWrap}
                cellStyleFocused={{...styles.inputWrap, borderColor:primary, borderWidth:2}}
                keyboardType='numeric'
                value={pin.toString()}
                onTextChange={(pin)=> setPin(pin)}
                onFulfill={()=> setFocused(true)}
                onBackspace={()=> setMsg(true)}
                />       
            </View>
            {msg?(<Text style={{color:error}}>Please, Input your PIN</Text>):null}
            <View style={styles.btnWarp}>
            <TouchableOpacity 
            style={focused? {...styles.btn, backgroundColor:primary} :styles.btn} 
            onPress={()=> handleGoTo('PinSuccess')}>
                    <Text style={focused?{...styles.btnText, color:white} :styles.btnText}>Confirm</Text>
            </TouchableOpacity>
            </View>
            </View>
            
        </View>
    )
}

export default CreatePin

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:background,
        height
    },
    title:{
        fontSize:29,
        fontWeight:'bold',
        textAlign:'center',
        color:primary
    },
    Wraper:{
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:white,
        height,
        elevation:10
    },
    pinTitle:{
        marginTop:40,
        textAlign:'center',
        fontSize:24,
        color:drak,
        marginBottom:20,
        fontWeight:'bold'
    },
    pinDesc:{
        textAlign:'center',
        color:subTitle,
        marginBottom:10,
        fontSize:16
    },
    form:{
       alignSelf:'center',
       marginTop:50
    },
    inputWrap:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#a9a9a9',
        height:60
        
    },
    btnWarp:{
        backgroundColor:'#fff',
        marginTop:200
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