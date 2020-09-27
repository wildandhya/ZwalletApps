import React, { useEffect } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import { primary, white, regular, Bold } from '../assets/color/color'
import { Dimensions } from 'react-native'

const SplashScreen = ({navigation})=>{
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Login')
        }, 2000)
    })
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={primary}/>
            <Text style={styles.title}>Zwallet</Text>
        </View>
    )
}

export default SplashScreen

const {width, height} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:primary,
        height,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:32,
        color:white,
        fontFamily:Bold
    }
})