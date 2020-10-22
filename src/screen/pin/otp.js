import React, {useEffect} from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button} from 'react-native'
import { primary, background, white, drak, secondry,success, subTitle , btn, error} from '../../assets/color/color'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { useSelector, useDispatch } from 'react-redux'





const Otp = ({navigation})=> {
    

    const dispatch = useDispatch()
    const {otp} = useSelector(state => state.auth)

    const [focused, setFocused] = React.useState(false)
    const [otpCode, setOtpCode] = React.useState('')
    const [msg, setMsg]= React.useState('')

    const checkOtp = ()=>{
        if(otp.otp === parseInt(otpCode)){
            setMsg('OTP Code Valid')
            setTimeout(()=>{
                navigation.navigate('ResetPassword')
            }, 2000)
            
        }else{
            setMsg('OTP Code Invalid')
        }
    }
    return (
        <View style={styles.container}>
            <View style={{marginVertical:60}}>
               <Text style={styles.title}>Zwallet</Text>
            </View>
            <View style={styles.Wraper}>
                <Text style={styles.pinTitle}>OTP</Text>
                <Text style={styles.pinDesc}>Input Your OTP Code</Text>
            <View style={styles.form}>
            <SmoothPinCodeInput
                codeLength={4}
                cellStyle={focused?{...styles.inputWrap, borderColor:primary, borderWidth:2}: styles.inputWrap}
                cellStyleFocused={{...styles.inputWrap, borderColor:primary, borderWidth:2}}
                keyboardType='numeric'
                value={otpCode}
                onTextChange={(x)=> setOtpCode(x)}
                onFulfill={()=> setFocused(true)}
                onBackspace={()=> setMsg(true)}
              />       
            </View>
            {otp.otp === parseInt(otpCode)?<Text style={styles.msgSuccess}>{msg}</Text>:<Text style={styles.msgError}>{msg}</Text>}
            <View style={styles.btnWarp}>
            <TouchableOpacity 
            style={focused? {...styles.btn, backgroundColor:primary} :styles.btn} onPress={checkOtp}>
                    <Text style={focused?{...styles.btnText, color:white} :styles.btnText}>Confirm</Text>
            </TouchableOpacity>
            </View>
            </View>
            
        </View>
    )
}

export default Otp

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
    msgSuccess:{
        color:success,
        textAlign:'center',
        marginTop:'10%'
    },
    msgError:{
        color:error,
        textAlign:'center',
        marginTop:'10%'
    }
   

})