import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, StatusBar, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans, shadowStyle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { bell, arrowUp, plus, prof3, userIcon } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { getHistoryAction} from '../redux/action/transfer'

import {localhost} from '../utils/api'





const Home = ({navigation})=> {

    const dispatch = useDispatch()

    const {user} = useSelector(state=>state.auth)
    const {history} = useSelector(state => state.contact)
    console.log(history)
    console.log('iniuser',user)

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    
    // useEffect(()=>{
    //     dispatch(getHistoryAction(user.id))
    // })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={primary}/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> handleGoTo('Profile')}>
                    {user.image === undefined?(
                        <Image source={userIcon}  style={styles.img}/>
                    ):(<Image source={{uri:user.image.replace('localhost', localhost)}} style={styles.img} />)}
                
                </TouchableOpacity>
                <View style={{marginRight:100}}>
                  <Text style={styles.title}>Balance</Text>
                  {user.balance === null?(<Text style={styles.price}>Rp.0</Text>):(
                      <Text style={styles.price}>Rp{user.balance}</Text>
                  )}
                </View>
                <TouchableOpacity onPress={()=> handleGoTo('Notification')}>
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
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginHorizontal:16, marginTop:25}}>
                <Text style={{fontSize:18, fontWeight:'700'}}>Transaction History</Text>
                <TouchableOpacity onPress={()=>handleGoTo('TransactionHistory')}>
                    <Text style={{fontSize:14, fontWeight:'600', color:primary}}>See all</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
            <View style={{marginTop:10}}>
            <View style={styles.card}>
                            <Image source={prof3}/>
                                <View style={{marginRight:70}}>
                                   <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>susi</Text>
                                <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
                             </View>
                             <View style={{justifyContent:'center'}}>
                                <Text style={{color:success, fontSize:18, fontWeight:'700'}}>+40000</Text>
                            </View>
                        </View>

                {/* {
                    history.map(item =>{
                        return(
                        
                        )
                    })
                }
                 */}
                
            </View>
            </ScrollView>
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
        borderRadius:8,
        backgroundColor:background
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
    }
    
})