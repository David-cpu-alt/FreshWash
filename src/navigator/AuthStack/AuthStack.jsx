import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splashscreen from '../../screens/AuthScreen/Splashscreen';
import Onboardingscreen from '../../screens/AuthScreen/Onboardingscreen';
import CreateAccount from '../../screens/AuthScreen/CreateAccount';
import Verification from '../../screens/AuthScreen/Verification';
import Login from '../../screens/AuthScreen/Login';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="splash" component={Splashscreen} />
            <Stack.Screen name="introslider" component={Onboardingscreen} />
            <Stack.Screen name="create" component={CreateAccount} />
            <Stack.Screen name="Verify" component={Verification} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})