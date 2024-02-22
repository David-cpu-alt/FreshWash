import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './src/screens/AuthScreen/Splashscreen';
import AuthStack from './src/navigator/AuthStack/AuthStack';
import BottomTab from './src/navigator/TabStack/BottomTab';



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