import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary,  white, drak, btn, regular, Bold, subTitle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'

import Icon from 'react-native-vector-icons/AntDesign'

import SmoothPinCodeInput from 'react-native-smooth-pincode-input'





const InputPin = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <View style={{flexDirection:'row', marginTop:80, marginLeft:17}}>
                <TouchableOpacity onPress={()=> handleGoTo('Confirm')}>
                 <Icon 
                 name='arrowleft'
                 size={28}
                 color={white}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>Enter Your PIN</Text>
                </View>
            </View>
            <View style={styles.contentWrap}>
                <Text style={styles.textTitle}>Enter PIN to Transfer</Text> 
                <Text style={styles.textDesc}>Enter your 6 digits PIN for confirmation to continue transfering money</Text>       
                <View style={{marginTop:60}}>
                <SmoothPinCodeInput
                codeLength={6}
                cellStyle={styles.inputWrap}
                keyboardType='numeric'
                />       
                </View>                                          
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>handleGoTo('TransSuccess')}>
                <Text style={styles.btnText}>Transfer Now</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default InputPin

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        flex:1
    },
    header:{
        backgroundColor:primary,
        height:'18%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    title:{
        color:white,
        fontSize:20,
        fontFamily:'NunitoSans-Bold',
        marginLeft:20,
    },
    price:{
        color:white,
        fontSize:24
    },

    btn:{
        backgroundColor:btn,
        marginHorizontal:19,
        paddingVertical:16,
        marginBottom:45,
        borderRadius:12
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:'#88888f'

    },
    textTitle:{
        fontFamily:Bold,
        fontSize:22,
        marginTop:40
    },
    textDesc:{
        fontSize:16,
        fontFamily:regular,
        color:subTitle,
        textAlign:'center',
        marginTop:20,
        paddingHorizontal:15
    },
    contentWrap:{
        flex:1,
        alignItems:'center'
    },
    inputWrap:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#a9a9a9',
        backgroundColor:'white',
    }
    
    
    
   
   

})