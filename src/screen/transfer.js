import React, {useState}from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans, shadowStyle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { userIcon } from '../assets'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Arrow from 'react-native-vector-icons/AntDesign'
import { SearchBar, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import {addToConfirmAction} from '../redux/action/transfer'
import {localhost} from '../utils/api'


const Transfer = ({navigation})=> {

    const {data} = useSelector(state => state.contact)
    const {user} = useSelector(state=>state.auth)
    const dispatch = useDispatch()

    const [form, setForm ]=useState({
        amount:'',
        notes:''
    })
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    const sendData = ()=>{
           dispatch(addToConfirmAction(form))
        }
    
    const inputChange = (value, input)=>{
        setForm({
            ...form,
            [input]: value,
        })
    }

    return (
        <View style={styles.container} >
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
                                {data.image === null?(
                                     <Image source={userIcon}/>
                                ):(
                                    <Image source={{uri:data.image.replace('localhost', localhost)}} style={styles.img}/>
                                )}
                              
                               <View style={{marginLeft:15}}>
                                 <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>{data.username}</Text>
                                 <Text style={{fontSize:14, fontFamily:'NunitoSans_Regular', marginTop:5, color:'#7a7886'}}>{data.phone_number}</Text>
                              </View>
                           </View>               
                        
                              
            </View>
            <View style={styles.content}>
            {user.balance === null?(<Text style={styles.titleFilled}>Rp.0 Available</Text>):(
                      <Text style={styles.titleFilled}>Rp {user.balance} Available</Text>
                  )}
                <TextInput
                placeholder='0.00'
                keyboardType='number-pad'
                style={{marginVertical:40, fontSize:42}}
                value={form.amount}
                onChangeText={(value)=> inputChange(value, 'amount')}
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
                value={form.notes}
                onChangeText={(value)=> inputChange(value, 'notes')}
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>{
                sendData()
                handleGoTo('Confirm')
                }}>
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
    img:{
        width:58,
        height:58,
        borderRadius:8
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