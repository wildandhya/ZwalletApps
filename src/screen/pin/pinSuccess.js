import React from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn} from '../../assets/color/color'
import {Formik} from 'formik'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { successIcon } from '../../assets'
import {clearPinAction} from '../../redux/action/auth'
import { useDispatch } from 'react-redux'




const PinSuccess = ({navigation})=> {

    const dispatch = useDispatch()

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <View style={{marginVertical:125,}}>
               <Text style={styles.title}>Zwallet</Text>
            </View>
            <View style={styles.pinWraper}>
                <View style={styles.icon}>
                   <Image source={successIcon} />
                </View>
                <Text style={styles.pinTitle}>PIN Successfully Created</Text>
                <Text style={styles.pinDesc}>Your PIN was successfully created and you can</Text>
                <Text style={styles.pinDesc}>now access all the features in Zwallet. Login to</Text>
                <Text style={styles.pinDesc}> your new account and start exploring!</Text>
            <View style={styles.btnWarp}>
            <TouchableOpacity style={styles.btn} onPress={()=> {
                dispatch(clearPinAction())
                handleGoTo('Login')}}>
                    <Text style={styles.btnText}>Login Now</Text>
            </TouchableOpacity>
            </View>
            </View>
           
        </View>
    )
}

export default PinSuccess

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:background,
        height
    },
    title:{
        fontSize:29,
        fontWeight:'bold',
        textAlign:'center',
        color:primary
    },
    pinWraper:{
        borderTopLeftRadius:35,
        borderTopRightRadius:35,
        backgroundColor:white,
        height,
        elevation:10
    },
    pinTitle:{
        marginTop:30,
        textAlign:'center',
        fontSize:24,
        color:drak,
        marginBottom:20,
        fontWeight:'bold'
    },
    pinDesc:{
        textAlign:'center',
        color:subTitle,
        marginBottom:10,
        fontSize:16
    },
    icon:{
        marginTop:40,
        alignItems:'center'
    },
    btnWarp:{
        backgroundColor:white,
        marginVertical:30
    },
    btn:{
        backgroundColor:primary,
        marginHorizontal:19,
        paddingVertical:16,
        marginTop:10,
        borderRadius:12
    },
    btnText:{
        textAlign:'center',
        fontSize:18,
        color:white

    },
   

})