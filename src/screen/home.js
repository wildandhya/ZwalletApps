import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans, shadowStyle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { prof2, bell, arrowUp, plus, prof3, spotify, netflix } from '../assets'





const Home = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> handleGoTo('Profile')}>
                <Image source={prof2} />
                </TouchableOpacity>
                <View style={{marginRight:90}}>
                  <Text style={styles.title}>Balance</Text>
                   <Text style={styles.price}>Rp120.000</Text>
                </View>
                <Image source={bell} />
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
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
                   </View>
                   <View style={{justifyContent:'center'}}>
                       <Text style={{color:success, fontSize:18, fontWeight:'700'}}>+Rp50.000</Text>
                   </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.imgWarpp}>
                      <Image source={spotify}/>
                    </View>
                    <View style={{marginRight:70}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Spotify</Text>
                          <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Subcription</Text>
                   </View>
                   <View style={{justifyContent:'center'}}>
                       <Text style={{color:error, fontSize:18, fontWeight:'700'}}>-Rp50.000</Text>
                   </View>
                </View>
                <View style={styles.card}>
                    <Image source={netflix} style={{backgroundColor:background}}/>
                    <View style={{marginRight:70}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
                   </View>
                   <View style={{justifyContent:'center'}}>
                       <Text style={{color:success, fontSize:18, fontWeight:'700'}}>+Rp50.000</Text>
                   </View>
                </View>
                <View style={styles.card}>
                    <Image source={prof3}/>
                    <View style={{marginRight:70}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
                   </View>
                   <View style={{justifyContent:'center'}}>
                       <Text style={{color:success, fontSize:18, fontWeight:'700'}}>+Rp50.000</Text>
                   </View>
                </View>
                
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
        height:'18%',
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
        paddingVertical:23,
        paddingHorizontal:16,
        borderRadius:10,
        justifyContent:'space-between',
        marginTop:15,
        shadowOffset:{
            width:0,
             height:5
            },
        shadowColor:'#000',
        shadowOpacity:5,
        shadowRadius:20,
        elevation:3,
        shadowRadius:10,
    },
    imgWrapp:{
        width:90,
        height:56,
        backgroundColor:'red'
    }
    
})