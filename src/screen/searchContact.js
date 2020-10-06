import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans, shadowStyle} from '../assets/color/color'

import { TouchableOpacity, ScrollView, FlatList } from 'react-native-gesture-handler'
import { userIcon} from '../assets'
import Icon from 'react-native-vector-icons/AntDesign'
import { SearchBar, Input } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux'
import {getContactAction, searchContactAction, addContactAction} from '../redux/action/user'

import {localhost} from '../utils/api'



const SearchContact = ({navigation})=> {


    const handleGoto = (screen)=>{
        navigation.navigate(screen)
    }

    const dispatch = useDispatch()

    const user = useSelector(state => state.user.user)
   
    useEffect(()=>{
        dispatch(getContactAction())
    }, [])
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <View style={{flexDirection:'row', marginTop:50, marginLeft:17}}>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                 <Icon 
                 name='arrowleft'
                 size={28}
                 color={white}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>Find Reciever</Text>
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
                    onChangeText={(text)=> dispatch(searchContactAction(text, 'username'))}
                    />
                </View>
                  
            </View>
            <View style={{ marginHorizontal:16, marginTop:20, paddingBottom:10}}>
                <Text style={{fontSize:18, fontWeight:'700'}}>Contact</Text>
                <Text style={{fontSize:14, fontFamily:'NunitoSans-Regular', color:'#8f8f8f', paddingTop:5}}>{user.length} Contact Founds</Text>
            </View>
            <ScrollView>
                {user.map((item, index)=>{
                    return(
                        <TouchableOpacity onPress={()=>{
                            dispatch(addContactAction({id:item.id, username:item.username, phone_number:item.phone_number, image:item.image}))
                             navigation.navigate('Transfer')
                        }} style={styles.card} key={index}>
                            {item.image === null?(
                                <Image source={userIcon}/>
                            ):(<Image source={{uri:item.image.replace('localhost',localhost)}} style={styles.img}/>)}
                         <View style={{marginLeft:15}}>
                           <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>{item.username}</Text>
                           {item.phone_number === null?(<Text style={{fontSize:14, fontFamily:'NunitoSans_Regular', marginTop:5, color:'#7a7886'}}>Phone Number not Found</Text>):(
                               <Text style={{fontSize:14, fontFamily:'NunitoSans_Regular', marginTop:5, color:'#7a7886'}}>{item.phone_number}</Text>
                           )}
                         
                          </View>  
                           </TouchableOpacity>      
                    )
                })}
                          
            
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
    img:{
        width:58,
        height:58,
        borderRadius:7
    },
    btnWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
        
    },
    card:{
        flexDirection:'row',
        backgroundColor:white,
        paddingVertical:18,
        paddingHorizontal:16,
        borderRadius:10,
        marginTop:15,
        elevation:5,
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