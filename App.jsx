import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splashscreen from './src/screens/AuthScreen/Splashscreen';
import AuthStack from './src/navigator/AuthStack/AuthStack';
import BottomTab from './src/navigator/TabStack/BottomTab';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const App = () => {
  const Stack = createNativeStackNavigator();


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AuthStack" component={AuthStack} />
          <Stack.Screen name="bottomtab" component={BottomTab} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>



  )
}

export default App

const styles = StyleSheet.create({})