import { ImageBackground, StyleSheet, Text, View, SafeAreaView, useWindowDimensions, StatusBar, Image, } from 'react-native'
import React, { useEffect } from 'react'
import { SIZES, images, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splashscreen = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            checkAccountStatus();
        }, 2000)


        return () => clearTimeout(timer)
    }, [navigation])

    const checkAccountStatus = async () => {
        try {
            const hasCreatedAccount = await AsyncStorage.getItem("hascreatedAccount");

            console.log('ssssssssss', hasCreatedAccount)
            // if the user already has an account 
            if (hasCreatedAccount === "true") {
                navigation.navigate("Login")
            } else {
                navigation.navigate("introslider")
            }

        } catch (error) {
            console.log("failed to check account status", error)
        }
    };
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.page}>
            <StatusBar backgroundColor={"green"} />
            <Text style={{ ...FONTS.body1, fontFamily: "Lato-Black", color: COLORS.green }}> Fresh Wash</Text>
            {/* image background */}
            <ImageBackground source={images.David} style={styles.ImageBackground}>
            </ImageBackground>
            {/* Image background ends  */}

        </SafeAreaView>
    )
}

export default Splashscreen

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: SIZES.h1 * 3.5
    },
    ImageBackground: {
        height: SCREEN_HEIGHT / 3,
        width: SCREEN_WIDTH,
        resizeMode: "contain",
        alignItems: "center",
        marginTop: SIZES.h1 * 4
    }

})