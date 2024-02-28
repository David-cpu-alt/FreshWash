import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './src/screens/AuthScreen/Splashscreen';
import AuthStack from './src/navigator/AuthStack/AuthStack';
import BottomTab from './src/navigator/TabStack/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';



const App = () => {
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="bottomtab" component={BottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})