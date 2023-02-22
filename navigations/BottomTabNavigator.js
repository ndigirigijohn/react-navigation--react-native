import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home, Settings, Wallet, Notifications} from '../screens'
import { COLORS, ROUTES } from '../constants';
import SettingsNavigator from './SettingsNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={
            ({route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === ROUTES.HOME) {
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    } else if (route.name === ROUTES.WALLET) {
                        iconName = focused ? 'ios-wallet' : 'ios-wallet-outline';
                    } else if (route.name === ROUTES.NOTIFICATIONS) {
                        iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
                    } else if (route.name === ROUTES.SETTINGS_NAVIGATOR) {
                        iconName = focused ? 'ios-settings' : 'ios-settings-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                }
         
            })
        }
    >
        <Tab.Screen name={ROUTES.HOME} component={Home} />
        <Tab.Screen name={ROUTES.WALLET} component={Wallet} />
        <Tab.Screen name={ROUTES.NOTIFICATIONS} component={Notifications} />
        <Tab.Screen name={ROUTES.SETTINGS_NAVIGATOR} component={SettingsNavigator}
        options={{
           tabBarLabel: 'Settings',
        }}
         />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})