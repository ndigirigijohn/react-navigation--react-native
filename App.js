import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
  <AuthNavigator />
    </NavigationContainer>
  );
}