import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {Login, ForgotPassword, Register, Home} from '../screens'
import { COLORS, ROUTES } from '../constants'

import BottomTabNavigator from './BottomTabNavigator'


const Stack = createStackNavigator()
const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
       headerStyle: {
          backgroundColor: COLORS.primary,
       },
        headerTintColor: COLORS.white,
     
      }}
    initialRouteName={ROUTES.LOGIN}
    >
        <Stack.Screen name={ROUTES.LOGIN}
        options={{
          headerShown: false
        }}
          component={Login} />
        <Stack.Screen name={ROUTES.FORGOT_PASSWORD} component={ForgotPassword}
        options={({route})=>({
          title: route.params.userId
        })
      }
        />
        <Stack.Screen name={ROUTES.REGISTER} component={Register} />
        <Stack.Screen
        options={{
          headerShown: false
        }}
         name={ROUTES.HOME} component={BottomTabNavigator} />

    </Stack.Navigator>

  )
}

export default AuthNavigator

const styles = StyleSheet.create({})