import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary,  white, drak, btn, regular, Bold, subTitle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { prof2, bell, arrowUp, plus, prof3, spotify, netflix } from '../assets'
import Icon from 'react-native-vector-icons/AntDesign'
import { SearchBar, Input } from 'react-native-elements';




const Confirm = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
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
                    <Image source={prof3}/>
                    <View style={{marginLeft:15}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, marginTop:5, color:'#7a7886'}}>+62 813-8492-9994</Text>
                   </View>
                </View>         
                  
            </View>
            <View>      
                    <View style={styles.resiWrapp}>
                    <View style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Amount</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>Rp.100.000</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Balance left</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>Rp.20.000</Text>
                   </View>
                   </View>
                   <View style={styles.secResiWrapp}>
                    <View style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Date</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>May 11, 2020</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Time</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>12.20</Text>
                   </View>
                   </View>
                   <View style={styles.thirdResiWrapp}>
                    <View>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Notes</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>For buying some socks</Text>
                   </View>
                   </View>
                                                                     
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>handleGoTo('InputPin')}>
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