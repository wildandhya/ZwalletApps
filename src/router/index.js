import React from 'react'

import {createStackNavigator} from '@react-navigation/stack'
import {SplashScreen, Login, SignUp} from "../screen/index"

const Stack = createStackNavigator()

const Router = ()=>{
    return(
        <Stack.Navigator >
            <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router