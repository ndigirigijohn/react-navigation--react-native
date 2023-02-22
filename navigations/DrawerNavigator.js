import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import {Home, Settings, Wallet, Notifications} from '../screens'
import { COLORS, ROUTES } from '../constants'
import BottomTabNavigator from './BottomTabNavigator'

import Ionicons from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator()


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
  }
    }
    >
        <Drawer.Screen
        options={{
            drawerIcon: ({focused, color, size}) => (
                <Ionicons name="ios-home" size={size} color={color} />
            )
        }}
         name={ROUTES.HOME_TAB} component={BottomTabNavigator} />
        <Drawer.Screen 
        options={{
            drawerIcon: ({focused, color, size}) => (
                <Ionicons name="ios-wallet" size={size} color={color} />
            )
        }}

        name={ROUTES.WALLET_DRAWER} component={Wallet} />
        <Drawer.Screen
        options={{
            drawerIcon: ({focused, color, size}) => (
                <Ionicons name="ios-notifications" size={size} color={color} />
            )
        }}
         name={ROUTES.NOTIFICATIONS_DRAWER} component={Notifications} />
        <Drawer.Screen
        options={{
            drawerIcon: ({focused, color, size}) => (
                <Ionicons name="ios-settings" size={size} color={color} />
            )
        }}
        
         name={ROUTES.SETTINGS} component={Settings} />

    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})