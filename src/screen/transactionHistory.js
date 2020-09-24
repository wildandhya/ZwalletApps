import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { prof2, bell, arrowUp, plus, prof3, spotify, netflix } from '../assets'
import Icon from 'react-native-vector-icons/AntDesign'




const TransactionHistory = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    
    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> handleGoTo('Home')}>
                 <Icon 
                 name='arrowleft'
                 size={28}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>History</Text>
                  
            </View>
            <View>
                <Text style={styles.titleWeek}>This Week</Text>
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
            </View>
            <View>
                <Text style={styles.titleWeek}>This Month</Text>
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
            <View style={{flexDirection:'row', marginTop:20, marginHorizontal:15, justifyContent:'space-between'}}>
                <TouchableOpacity style={styles.btnFilter}>
                    <Icon name='arrowup' color={error} size={28} style={{alignItems:'center', justifyContent:'center'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFilter}>
                    <Icon name='arrowdown' color={success} size={28} style={{alignItems:'center', justifyContent:'center'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterWrapp}>
                    <Text style={styles.filterText}>Filter by Date</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TransactionHistory

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    header:{
        flexDirection:'row',
        marginHorizontal:19,
        paddingTop:25,
        alignItems:'center'
    },
    title:{
        color:drak,
        fontSize:20,
        fontFamily:'NunitoSans-Bold',
        marginLeft:20
    },
    titleWeek:{
        marginTop:30,
        marginLeft:19,
        fontSize:16,
        color:'#7a7886',
        fontFamily:'NunitoSans-Regular',
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
        shadowOffset:{
            width:0,
             height:4
            },
        shadowColor:'#000',
        shadowOpacity:5,
        shadowRadius:20,
        elevation:3,
        marginTop:20
    },
    imgWrapp:{
        width:90,
        height:56,
        
    },
    btnFilter:{
        backgroundColor:white,
        paddingHorizontal:18,
        paddingVertical:14,
        borderRadius:12,
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
    filterText:{
        color:primary,
        fontSize:18,
        fontFamily:'NunitoSans-Bold',
    },
    filterWrapp:{
        backgroundColor:white,
        borderRadius:12,
        paddingHorizontal:38,
        paddingVertical:16,
        shadowOffset:{width:1, height:5},
        shadowColor:'#000',
        shadowOpacity:6,
        shadowRadius:20,
        shadowOffset:{
            width:0,
             height:4
            },
        shadowColor:'#000',
        shadowOpacity:5,
        shadowRadius:20,
        elevation:3,
        marginLeft:5
    }
})