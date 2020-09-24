import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans, shadowStyle} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { prof2, bell, arrowUp, plus, prof3, spotify, netflix } from '../assets'
import Icon from 'react-native-vector-icons/AntDesign'
import { SearchBar, Input } from 'react-native-elements';




const SearchContact = ({navigation})=> {

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
                <Text style={styles.title}>Find Receiver</Text>
                </View>
                <View style={{backgroundColor:white, height:50, marginTop:20, borderRadius:12, alignItems:'center', marginHorizontal:16}}>
                    <Input 
                    style={styles.searchWarp}
                    leftIcon={
                        <Icon
                        name='search1'
                        size={24}
                        color='#a9a9a9'
                        />

                    }
                    placeholder='Search receiver here'
                    />
                </View>
                  
            </View>
            <View style={{ marginHorizontal:16, marginTop:20}}>
                <Text style={{fontSize:18, fontWeight:'700'}}>Contact</Text>
                <Text style={{fontSize:14, fontFamily:'NunitoSans-Regular', color:'#8f8f8f', paddingTop:10}}>17 Contact Founds</Text>
            </View>
            <ScrollView>
            <View style={{marginTop:10}}>
                <TouchableOpacity onPress={()=> handleGoTo('Transfer')}>
                <View style={styles.card}>
                    <Image source={prof3}/>
                    <View style={{marginLeft:15}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontFamily:'NunitoSans_Regular', marginTop:5, color:'#7a7886'}}>+62 813-8492-9994</Text>
                   </View>
                </View>  
                </TouchableOpacity>
                <View style={styles.card}>
                    <Image source={prof3}/>
                    <View style={{marginLeft:15}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontFamily:'NunitoSans_Regular', marginTop:5, color:'#7a7886'}}>+62 813-8492-9994</Text>
                   </View>
                </View>               
                <View style={styles.card}>
                    <Image source={prof3}/>
                    <View style={{marginLeft:15}}>
                          <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>Samuel Suhi</Text>
                          <Text style={{fontSize:14, fontFamily:'NunitoSans_Regular', marginTop:5, color:'#7a7886'}}>+62 813-8492-9994</Text>
                   </View>
                </View>                                                          
            </View>
            </ScrollView>
        </View>
    )
}

export default SearchContact

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    header:{
        backgroundColor:primary,
        height:'21%',
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
    
    }
    
    
   
   

})