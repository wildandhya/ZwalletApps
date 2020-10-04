import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary,  white, drak, btn, regular, Bold, subTitle} from '../assets/color/color'

import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler'
import { userIcon } from '../assets'
import Icon from 'react-native-vector-icons/AntDesign'
import { DateTime } from "luxon"
import { useSelector, useDispatch } from 'react-redux'
import {transferAction} from '../redux/action/transfer'
import {localhost} from '../utils/api'




const Confirm = ({navigation})=> {

    const dispatch = useDispatch()

    const {form} = useSelector(state => state.contact)
    const auth = useSelector(state => state.auth.user)
    console.log(form)

    const datetime = DateTime.local()

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    const [data, setData] = useState({
        sender_id:'',
        reciever_id:'',
        amount:'',
        notes:'',
        transfer_date:''
    })

    const sendData = ()=>{
        // setData({
        //     sender_id:auth.id,
        //     reciever_id:form[2].id,
        //     amount:form[5].amount,
        //     notes:form[5].notes,
        //     transfer_date:datetime.toFormat('LLL dd, yyyy HH.mm')
        // })

        // // alert(JSON.stringify(data))
        // dispatch(transferAction(data))
        handleGoTo('InputPin')

    }

    

    

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <View style={{flexDirection:'row', marginTop:50, marginLeft:17}}>
                <TouchableOpacity onPress={()=> handleGoTo('Home')}>
                 <Icon 
                 name='arrowleft'
                 size={28}
                 color={white}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>Confirmation</Text>
                </View>
                        <View style={styles.card}>
                        {form[0].image === null?(<Image source={userIcon} style={styles.img}/>):(
                            <Image source={{uri:form[0].image.replace('localhost', localhost)}} style={styles.img}/>
                        )}
                        
                        <View style={{marginLeft:15}}>
                             <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>{form[0].username}</Text>
                             <Text style={{fontSize:14, marginTop:5, color:'#7a7886'}}>{form[0].phone_number}</Text>
                       </View>
                    </View>                
            </View>
            <View>      
                    <View style={styles.resiWrapp}>
                    <View style={styles.resi}>
                          <Text style={styles.textTitle}>Amount</Text>
                         <Text style={styles.textSub}>Rp.{form[1].amount}</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={styles.textTitle}>Balance left</Text>
                        <Text style={styles.textSub}>{auth.balance - form[1].amount}</Text>
                   </View>
                   </View>
                   <View style={styles.secResiWrapp}>
                    <View style={styles.resi}>
                          <Text style={styles.textTitle}>Date</Text>
                          <Text style={styles.textSub}>{datetime.toFormat('LLL dd, yyyy')}</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={styles.textTitle}>Time</Text>
                        <Text style={styles.textSub}>{datetime.toFormat('HH.mm')}</Text>
                   </View>
                   </View>
                   <View style={styles.thirdResiWrapp}>
                    <View>
                          <Text style={styles.textTitle}>Notes</Text>
                           <Text style={styles.textSub}>{form[1].notes}</Text>
                   </View>
                   </View>
                                                                     
            </View>
            <TouchableOpacity style={styles.btn} onPress={sendData}>
               
               
                <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
           
        </View>
    )
}

export default Confirm

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    header:{
        backgroundColor:primary,
        height:'28%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    img:{
        width:58, 
        height:58, 
        borderRadius:8
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
    textTitle:{
        fontSize:16,
         fontFamily:regular, 
         color:subTitle
    },
    textSub:{
        fontSize:18, 
        fontFamily:Bold,
         marginTop:5, color:drak
    },
    btnWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
        
    },
   card:{
        flexDirection:'row',
        backgroundColor:white,
        paddingVertical:15,
        paddingHorizontal:16,
        borderRadius:10,
        marginHorizontal:17,
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
        marginTop:40
    },
    resi:{
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
        shadowRadius:15,
        paddingVertical:15,
        paddingHorizontal:25,
        alignSelf:'flex-start',
        width:168,
        height:87, 
    },
    resiWrapp:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:17,
        marginTop:30
    },
    secResiWrapp:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:17,
        marginTop:20
    },
    thirdResiWrapp:{
        flexDirection:'row',
        marginHorizontal:17,
        marginTop:20,
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
        shadowRadius:15,
        paddingVertical:15,
        paddingHorizontal:25,
    },
    btn:{
        backgroundColor:primary,
        marginHorizontal:19,
        paddingVertical:16,
        marginTop:45,
        borderRadius:12
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:'white'

    },
    
    
    
   
   

})