import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary,  white, drak, btn, regular, Bold, subTitle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { successIcon , prof3} from '../assets'





const TransSuccess = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <Image source={successIcon}/>
                <Text style={styles.title}>Transfer Details</Text>   
            </View>
            <View style={{marginHorizontal:17, marginTop:10}}>    
                <Text style={{fontFamily:Bold, fontSize:18}}>Details</Text>  
                    <View style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Amount</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>Rp.100.000</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Balance left</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>Rp.20.000</Text>
                   </View>
                   
                    <View style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Date</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>May 11, 2020</Text>
                   </View>
                   <View  style={styles.resi}>
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Time</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>12.20</Text>
                   </View>
                   <View style={styles.resi}>
                   
                          <Text style={{fontSize:16, fontFamily:regular, color:subTitle}}>Notes</Text>
                          <Text style={{fontSize:18, fontFamily:Bold, marginTop:5, color:drak}}>For buying some socks</Text>
                   </View>
                                                                     
            </View>
            <View style={{marginHorizontal:17, marginTop:14}}>    
                <Text style={{fontFamily:Bold, fontSize:18}}>Transfer to</Text>  
                <View style={styles.card}>
                    <Image source={prof3}/>
                    <View style={{marginLeft:15}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontFamily:'NunitoSans-Regular', marginTop:5, color:'#7a7886'}}>+62 813-8492-9994</Text>
                   </View>
                </View>            
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>handleGoTo('Home')}>
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
    
    
    
   
   

})