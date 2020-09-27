import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image, StatusBar} from 'react-native'
import { primary, background, white, drak,  trans, regular, Bold, success, error} from '../assets/color/color'

import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler'
import { prof2, bell, arrowUp, plus, prof3, spotify, netflix } from '../assets'
import Icon from 'react-native-vector-icons/AntDesign'




const Notification = ({navigation})=> {

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
                 color={white}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>Notification</Text>
                  
            </View>
            <View style={{marginHorizontal:16}}>
                <View style={styles.todayWarpp}>    
                <Text style={styles.titleWeek}>Today</Text>
                <FlatList
                    renderItem={(item)=>{
                    }}
                    />
                 <View style={styles.card}>
                        <Icon
                        name='arrowdown'
                        size={28}
                        color={success}
                        />
                        <View style={styles.imgWrapp}>
                            <Text style={{fontSize:14, fontFamily:regular}}>Transfer from Wildan</Text>
                            <Text style={{fontSize:18, fontFamily:Bold, marginTop:5}}>Rp. 20.000</Text>
                        </View>
                </View>
                <View style={styles.card}>
                      <Icon
                        name='arrowup'
                        size={28}
                        color={error}
                        />
                    <View style={styles.imgWrapp}>
                          <Text style={{fontSize:14, fontFamily:regular}}>Transfer from Wildan</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5}}>Rp. 20.000</Text>
                   </View>
                </View>
            </View>
            <View style={styles.todayWarpp}>    
                <Text style={styles.titleWeek}>This Week</Text>
                <FlatList
                    renderItem={(item)=>{
                    }}
                    />
                <View style={styles.card}>
                        <Icon
                        name='arrowdown'
                        size={28}
                        color={success}
                        />
                        <View style={styles.imgWrapp}>
                            <Text style={{fontSize:14, fontFamily:regular}}>Transfer from Wildan</Text>
                            <Text style={{fontSize:18, fontFamily:Bold, marginTop:5}}>Rp. 20.000</Text>
                        </View>
                </View>
                <View style={styles.card}>
                      <Icon
                        name='arrowup'
                        size={28}
                        color={error}
                        />
                    <View style={styles.imgWrapp}>
                          <Text style={{fontSize:14, fontFamily:regular}}>Neflix Subcription</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5}}>Rp. 20.000</Text>
                   </View>
                </View>
            </View>
            
            
            </View>
        </View>
    )
}

export default Notification

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:primary,
        height:'15%',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        paddingHorizontal:16
    },
    title:{
        color:white,
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
        paddingVertical:15,
        paddingHorizontal:16,
        borderRadius:10,
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
        marginLeft:10
        
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