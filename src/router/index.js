import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {SplashScreen, Login, SignUp, CreatePin, PinSuccess, Home, TransactionHistory, SearchContact, Transfer, Confrim,
     InputPin, TransSuccess, Profile, ChangePassword, ChangePin, Notification, CheckEmail, ResetPassword, ChangePinFilled, Otp} from "../screen/index"


const Stack = createStackNavigator()

const Router = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
            <Stack.Screen name='CreatePin' component={CreatePin} options={{headerShown:false}}/>
            <Stack.Screen name='PinSuccess' component={PinSuccess} options={{headerShown:false}}/>
            <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
            <Stack.Screen name='TransactionHistory' component={TransactionHistory} options={{headerShown:false}}/>
            <Stack.Screen name='SearchContact' component={SearchContact} options={{headerShown:false}}/>
            <Stack.Screen name='Transfer' component={Transfer} options={{headerShown:false}}/>
            <Stack.Screen name='Confirm' component={Confrim} options={{headerShown:false}}/>
            <Stack.Screen name='InputPin' component={InputPin} options={{headerShown:false}}/>
            <Stack.Screen name='TransSuccess' component={TransSuccess} options={{headerShown:false}}/>
            <Stack.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
            <Stack.Screen name='ChangePassword' component={ChangePassword} options={{headerShown:false}}/>
            <Stack.Screen name='ChangePin' component={ChangePin} options={{headerShown:false}}/>
            <Stack.Screen name='Notification' component={Notification} options={{headerShown:false}}/>
            <Stack.Screen name='CheckEmail' component={CheckEmail} options={{headerShown:false}}/>
            <Stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown:false}}/>
            <Stack.Screen name='ChangePinFilled' component={ChangePinFilled} options={{headerShown:false}}/>
            <Stack.Screen name='Otp' component={Otp} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router