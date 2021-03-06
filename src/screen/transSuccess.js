import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, StatusBar, TextInput, Button, Image} from 'react-native'
import { primary,  white, drak, btn, regular, Bold, subTitle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { successIcon , prof3} from '../assets'
import { DateTime } from "luxon"

import { useSelector, useDispatch} from 'react-redux'
import {deletePinAction} from '../redux/action/transfer'

import {localhost} from '../utils/api'
import PushNotification from 'react-native-push-notification';
import {showLocalNotification} from '../notif/handleNotification'
import {getContactAction} from '../redux/action/user'
import { getHistoryAction} from '../redux/action/transfer'




const TransSuccess = ({navigation})=> {

    const dispatch = useDispatch()

    const {data} = useSelector(state => state.contact)
    const {nota} = useSelector(state => state.contact)
    const {user} = useSelector(state=>state.auth)

    const datetime = DateTime.local()

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    const channelId = 'transaction';

    const handleBackHome = ()=>{
        dispatch(getContactAction())
        dispatch(deletePinAction())
        dispatch(getHistoryAction(user.id))
        handleGoTo('Home')
    }

   useEffect(()=>{
    PushNotification.createChannel(
        {
          channelId,
          channelName: 'transaction',
        },
      );
    showLocalNotification('Zwallet', 'You have made the transfer', channelId)
   }, [])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fafcff"/>
             <View style={styles.header}>
                 <Image source={successIcon}/>
                <Text style={styles.title}>Transfer Details</Text>   
            </View>
            <View style={{marginHorizontal:17, marginTop:10}}>    
                <Text style={{fontFamily:Bold, fontSize:18}}>Details</Text>  
                    <View style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Amount</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>Rp.{data.amount}</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Balance left</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>Rp.20.000</Text>
                   </View>
                   
                    <View style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Date</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>{datetime.toFormat('LLL dd, yyyy')}</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Time</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>{datetime.toFormat('HH.mm')}</Text>
                   </View>
                   <View style={styles.resi}>
                   
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Notes</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>{data.notes}</Text>
                   </View>
                                                                     
            </View>
            <View style={{marginHorizontal:17, marginTop:14}}>    
                <Text style={{fontFamily:Bold, fontSize:18}}>Transfer to</Text>  
                <View style={styles.card}>
                       {data.image === null?(<Image source={userIcon} style={styles.img}/>):(
                            <Image source={{uri:data.image.replace('localhost', localhost)}} style={styles.img}/>
                        )}
                        
                    <View style={{marginLeft:15}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>{data.username}</Text>
                          <Text style={{fontSize:14, fontFamily:'NunitoSans-Regular', marginTop:5, color:'#7a7886'}}>{data.phone_number === null?'No Phone Number':data.phone_number}</Text>
                   </View>
                </View>            
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleBackHome}>
                <Text style={styles.btnText}>Back to Home</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default TransSuccess

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    header:{
        alignItems:'center',
        marginTop:16
    },
    title:{
        color:drak,
        fontSize:20,
        fontFamily:'NunitoSans-Bold',
        marginLeft:20,
        textAlign:'center',
        marginTop:10
    },
    btnWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
        
    },
    resi:{
        
        marginTop:10,
        backgroundColor:white,
        borderRadius:10,
        shadowOffset:{
            width:-5,
             height:-10
            },
        shadowColor:'#000',
        shadowOpacity:1,
        shadowRadius:20,
        elevation:3,
        paddingVertical:6,
        paddingHorizontal:25,
    },
    btn:{
        backgroundColor:primary,
        marginHorizontal:19,
        paddingVertical:16,
        marginTop:19,
        borderRadius:12
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:'white'

    },
    card:{
        flexDirection:'row',
        backgroundColor:white,
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:10,
        marginTop:5,
        shadowOffset:{
            width:-5,
             height:-10
            },
        shadowColor:'#000',
        shadowOpacity:1,
        shadowRadius:20,
        elevation:3,
    },
    img:{
        width:58, 
        height:58, 
        borderRadius:8
    },
    
    
    
   
   

})