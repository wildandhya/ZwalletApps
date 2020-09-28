import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, StatusBar, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans, shadowStyle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { prof2, bell, arrowUp, plus, prof3, spotify, netflix } from '../assets'
import { useDispatch, useSelector } from 'react-redux'
import { getHistoryAction} from '../redux/action/transfer'





const Home = ({navigation})=> {

    const dispatch = useDispatch()

    const {user} = useSelector(state=>state.auth)
    const {history} = useSelector(state => state.contact)
    console.log(history)
    console.log(user)

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }
    
    useEffect(()=>{
        const {id} = user
        dispatch(getHistoryAction(user.id))
    })

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={primary}/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> handleGoTo('Profile')}>
                <Image source={prof2} />
                </TouchableOpacity>
                <View style={{marginRight:90}}>
                  <Text style={styles.title}>Balance</Text>
                   <Text style={styles.price}>Rp120.000</Text>
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

                {
                    history.map(item =>{
                        return(
                        <View style={styles.card}>
                            <Image source={prof3}/>
                                <View style={{marginRight:70}}>
                                   <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>{item.reciever_id}</Text>
                                <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
                             </View>
                             <View style={{justifyContent:'center'}}>
                                <Text style={{color:success, fontSize:18, fontWeight:'700'}}>+{item.amount}</Text>
                            </View>
                        </View>
                        )
                    })
                }
                
                
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