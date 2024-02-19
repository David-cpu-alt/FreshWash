import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../screens/Home/Home'
import Profile from '../../../Profile/Profile'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '../../constants'

const Bottomtab = () => {
    const navigation = useNavigation();
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, colour }) => {
                let iconname;
                if (route.name = "Home") {
                    iconname = focused ? icons.Home : icons.Home
                } else if (route.name = "Profile") {
                    colour = focused ? COLORS.blue : COLORS.black
                    iconname = focused ? icons.Profile : icons.Profile
                }
                return <Image source={iconname} style={{ height: SIZES.h2, width: SIZES.h2 }} />
            }
        })} >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default Bottomtab

const styles = StyleSheet.create({})