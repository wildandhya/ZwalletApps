import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans, shadowStyle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { prof2, bell, arrowUp, plus, prof3, spotify, netflix } from '../assets'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Arrow from 'react-native-vector-icons/AntDesign'
import { SearchBar, Input } from 'react-native-elements';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'





const Transfer = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <View style={{flexDirection:'row', marginTop:50, marginLeft:17}}>
                <TouchableOpacity onPress={()=> handleGoTo('SearchContact')}>
                 <Arrow
                 name='arrowleft'
                 size={28}
                 color={drak}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>Transfer</Text>
                </View>                  
            </View>
            <View style={styles.cardWrap}>
                <View style={styles.card}>
                    <Image source={prof3}/>
                    <View style={{marginLeft:15}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontFamily:'NunitoSans_Regular', marginTop:5, color:'#7a7886'}}>+62 813-8492-9994</Text>
                   </View>
                </View>                             
            </View>
            <View style={styles.content}>
                <Text style={styles.titleFilled}>Rp.120.000 Available</Text>
                <TextInput
                placeholder='0.00'
                keyboardType='number-pad'
                style={{marginVertical:40, fontSize:42}}
                />
                <Input
                placeholder='Add some notes'
                leftIcon={
                    <Icon 
                    name='pencil-outline'
                    size={25}
                    color={subTitle}
                    />
                }
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>handleGoTo('Confirm')}>
                <Text style={styles.btnText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Transfer

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    cardWrap:{
        marginHorizontal:16,
        marginTop:20
    },
    title:{
        color:drak,
        fontSize:20,
        fontFamily:'NunitoSans-Bold',
        marginLeft:20,
    },
    price:{
        color:white,
        fontSize:24
    },
    btnWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
        
    },
    card:{
        flexDirection:'row',
        backgroundColor:white,
        paddingVertical:20,
        paddingHorizontal:16,
        borderRadius:10,
        marginTop:15,
        shadowOffset:{
            width:-5,
             height:-10
            },
        shadowColor:'#000',
        shadowOpacity:1,
        shadowRadius:20,
        elevation:3,
        shadowRadius:15,
    },
    imgWrapp:{
        width:90,
        height:56,
        backgroundColor:'red'
    },
    searchWarp:{
        backgroundColor:white,
    
    },
    content:{
        alignItems:'center',
        marginTop:25
    },
    titleFilled:{
        fontSize:16,
        fontFamily:'NunitoSans-Bold',
        color:'#7c7895'
    },
    btn:{
        backgroundColor:btn,
        marginHorizontal:19,
        paddingVertical:16,
        marginTop:25,
        borderRadius:12
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:'#88888f'

    },
})