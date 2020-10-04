import React, { useState } from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image, Switch} from 'react-native'
import { primary,  white, drak, Bold, regular, background} from '../assets/color/color'

import { TouchableOpacity, FlatList} from 'react-native-gesture-handler'
import { userIcon } from '../assets'
import Icon from 'react-native-vector-icons/AntDesign'
import Pencil from 'react-native-vector-icons/MaterialCommunityIcons'
import { ListItem } from 'react-native-elements'

import {loginAction, logoutAction, editUserAction} from '../redux/action/auth'
import { useDispatch, useSelector } from 'react-redux'

import ImagePicker from 'react-native-image-picker'
import {localhost} from '../utils/api'






const Profile = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    const dispatch = useDispatch()
    const [image, setImage] = useState(null)
    const {user} = useSelector(state=>state.auth)
    console.log(user)

    const [isSwitchEnable, setSwitch] = React.useState(false)

    const logoutProfile = ()=>{
        dispatch(logoutAction())
    }

    const list = [
        {
            title:'Personal Information',
            goTo: ()=> navigation.navigate('Home')
        },
        {
            title:'Change Password',
            goTo: ()=> navigation.navigate('ChangePassword')
        },
        {
            title:'Change PIN',
            goTo: ()=> navigation.navigate('ChangePin')
        },
        {
            title:'Notification',
            // goTo: handleGoTo('Notif')
        },
        {
            title:'Logout',
             goTo: ()=>{
                dispatch(logoutAction())
                handleGoTo('Login')
            }
        }
    ]
    const handleChoosePhoto = ()=>{
        const options ={
            title:'Choose Images',
            storageOptions:{
                skipBackup:true,
                path:'images'
            },
            noData:true
            
        }
        ImagePicker.showImagePicker(options, Response =>{
            console.log('respon', Response)
            if(Response.didCancel){
                console.log('Cancel')
               
            }else if(Response.error){
                console.log('ImagePicker Error', Response.error)
            }else if(Response.customButton){
                console.log('User Tapped Custom Button', Response.customButton)

            }else{
                const source = Response
                setImage( source)
            }
        })
    }
    return (
        <View style={styles.container}>
             <View style={styles.header}>
                 <View style={{flexDirection:'row', marginTop:50, marginLeft:17}}>
                <TouchableOpacity onPress={()=> handleGoTo('Home') }>
                 <Icon 
                 name='arrowleft'
                 size={28}
                 color={drak}
                  />
                  </TouchableOpacity>
                </View>
                  
            </View>
            <View style={{alignItems:'center', marginTop:15}}>
                 <View style={styles.imgBg}>
                 {user.image === undefined?(
                        <Image source={userIcon}  style={styles.img}/>
                    ):(<Image source={{uri:user.image.replace('localhost', localhost)}} style={styles.img} />)}
                
                </View>
               
                    <TouchableOpacity  style={{flexDirection:'row', marginTop:10}} onPress={()=> handleChoosePhoto()}>
                       <Pencil
                       name='pencil-outline'
                       size={20}
                       />
                       <Text style={{fontFamily:regular, fontSize:16, marginLeft:6}}>Edit</Text>
                    </TouchableOpacity>
               
                 <Text style={{fontFamily:Bold, fontSize:24,marginTop:16}}>{user.username}</Text>
                <Text style={{fontSize:16, fontFamily:regular, marginTop:10}}>+62 813-9387-7946</Text>
            </View>
            <View style={{marginTop:10, marginHorizontal:16}}>     
                 {
                     list.map((item, i)=>{
                         return(
                            <ListItem key={i} bottomDivider containerStyle={styles.listWrapp} onPress={item.goTo}>
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                            {item.title === 'Notification'? (
                            <Switch
                            value={isSwitchEnable}
                            onValueChange={(value)=>setSwitch(value)}
                            trackColor={{true:primary, false:'#a9a9a9'}}
                            thumbColor={isSwitchEnable? '#fff': '#fff'}
                            />
                            ) :(item.title === 'Logout'? null : (
                                <ListItem.Chevron size={30} color='#7e7d84'/>
                            )
                                
                            )}
                          </ListItem>  
                         )
                     })
                 }
            </View>
        </View>
    )
}

export default Profile

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        height
    },
    img:{
        width:80,
        height:80,
        borderRadius:7,
    },
    header:{
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
    imgBg:{
        width:80,
        height:80,
        backgroundColor:'#ebeef2',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center'
       
    },
    warp:{
       textAlign:'center',
       backgroundColor:'red'
    
    },
    listWrapp:{
        backgroundColor:'#e5e8ed',
        marginTop:15,
        borderRadius:10
    }
    
})