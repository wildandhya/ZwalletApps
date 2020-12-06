import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, StatusBar, Image, FlatList} from 'react-native'
import { primary,  white, drak, success, trans, error, } from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { bell, arrowUp, plus, prof3, userIcon } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { getHistoryAction} from '../redux/action/transfer'
import {getContactAction} from '../redux/action/user'

import {localhost} from '../utils/api'





const Home = ({navigation})=> {

    const dispatch = useDispatch()

    const {user} = useSelector(state=>state.auth)
    const contact = useSelector(state => state.user.data)
    const {history} = useSelector(state => state.user)

    

    const item = contact.filter((x)=>{
        return x.id === user.id
    })

    console.log(item)

    
    
    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    
    useEffect(()=>{
        dispatch(getHistoryAction(user.id))
        dispatch(getContactAction())
    },[dispatch])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={primary}/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> handleGoTo('Profile')} style={styles.imgBg}>
                    {user.image === null?(
                        <Image source={userIcon}  style={styles.img}/>
                    ):(<Image source={{uri:user.image.replace('localhost', localhost)}} style={styles.img} />)}
                
                </TouchableOpacity>
                <View style={{flex:1, marginLeft:15}}>
                  <Text style={styles.title}>Balance</Text>
                  {user.balance === null ?(<Text style={styles.price}>Rp 0</Text>):(
                      <Text style={styles.price}>Rp {user.balance.toLocaleString("id-ID")}</Text>
                  )}
                </View>
                <TouchableOpacity onPress={()=> handleGoTo('Notification')} style={{flex:1, alignItems:'flex-end',justifyContent:'center'}}>
                    <Image source={bell} />
                </TouchableOpacity>
            </View>
            <View style={styles.btnWrap}>
                <TouchableOpacity style={styles.btnTrans} onPress={()=>handleGoTo('SearchContact')}>
                    <Image source={arrowUp}/>
                    <Text style={{fontSize:18, marginLeft:10}}>Transfer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTrans}>
                    <Image source={plus}/>
                    <Text style={{fontSize:18, marginLeft:10}}>Top Up</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.trans}>
                <Text style={{fontSize:18, fontWeight:'700'}}>Transaction History</Text>
                <TouchableOpacity onPress={()=>handleGoTo('TransactionHistory')}>
                    <Text style={{fontSize:14, fontWeight:'600', color:primary}}>See all</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginTop:10}}>
                {history.length === 0? (<Text style={{textAlign:'center', marginTop:30, fontSize:17}}>You have never done any transactions</Text>):
                    history.map((item, index) =>{
                        return(
                          
                                <View style={styles.card} key={index}>
                            {item.image === null?(
                                <Image source={userIcon}/>
                            ):(<Image source={{uri:item.image.replace('localhost',localhost)}} style={styles.img}/>)}
                            <View style={{flex:1, marginLeft:15}}>
                               <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>{item.username
                               }</Text>
                                <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
                             </View>
                             <View style={{justifyContent:'center', flex:1, alignItems:'flex-end'}}>
                                 {user.id === item.reciever_id?(<Text style={{color:success, fontSize:18, fontWeight:'700'}}>+{item.trans_amount.toLocaleString("id-ID")}</Text>):(<Text style={{color:error, fontSize:18, fontWeight:'700'}}>-{item.trans_amount.toLocaleString("id-ID")}</Text>)}
                            </View>
                        </View>
                            
                          
                        )
                    })
                } 
            </View>
        </View>
    )
}

export default Home

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    img:{
        width:58,
        height:58,
        borderRadius:7
    },
    imgBg:{
        width:58,
        height:58,
        backgroundColor:'#ebeef2',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
       
    },
    header:{
        backgroundColor:primary,
        height:'15%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:30,
        paddingTop:25,
        alignItems:'center'
    },
    title:{
        color:'#d0d0d0',
        fontSize:15
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
    btnTrans:{
        backgroundColor:trans,
        borderColor:'#eee',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:27,
        paddingVertical:16,
        flexDirection:'row',
        marginHorizontal:15,
    },
    card:{
        flexDirection:'row',
        backgroundColor:white,
        paddingVertical:20,
        paddingHorizontal:16,
        borderRadius:10,
        justifyContent:'space-between',
        marginTop:15,
        elevation:4,
    },
    imgWrapp:{
        width:90,
        height:56,
        backgroundColor:'red'
    },
    trans:{
        flexDirection:'row', 
        justifyContent:'space-between',
        alignItems:'center', 
        marginHorizontal:16,
        marginTop:25,
        paddingBottom:10
    }
    
})