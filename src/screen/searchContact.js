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
    },
    searchWarp:{
        backgroundColor:white,
    
    }
    
    
   
   

})