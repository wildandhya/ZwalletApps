import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Arrow from 'react-native-vector-icons/AntDesign'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { useSelector, useDispatch } from 'react-redux'
import {editUserAction} from '../../redux/action/auth'


const ChangePin = ({navigation})=> {


    const [pin, setPin] = React.useState('')
    const [focused, setFocused] = React.useState(false)
    const dispatch = useDispatch()
    const {user, isPin} = useSelector(state => state.auth)

    if(isPin){
        alert('ok')
    }
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
                <Text style={styles.title}>Change PIN</Text>
                </View>  
            </View>
            <View style={styles.formWraper}>
                <Text style={styles.loginDesc}>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</Text>
                <View style={{alignItems:'center', marginTop:50}}>
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
            </View>    
                <TouchableOpacity style={focused? {...styles.btn, backgroundColor:primary} :styles.btn} onPress={()=>{
                     if(pin.length === 6){
                        dispatch(editUserAction(null, null, Number(pin), null, user.email))}
                    }
                }>
                                <Text style={focused?{...styles.btnText, color:white} :styles.btnText}>Change Pin</Text>
                </TouchableOpacity>   
        </View>
        
    )
}

export default ChangePin

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fafcff',
       flex:1
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
      flex:1
    },
    loginDesc:{
        textAlign:'center',
        color:subTitle,
        marginBottom:10,
        fontSize:16
    },
    input:{
        color:secondry,
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
        marginTop:10,
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
    inputWrap:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#a9a9a9',
        height:60
        
    },

})