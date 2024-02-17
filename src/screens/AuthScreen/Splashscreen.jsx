import { ImageBackground, StyleSheet, Text, View, SafeAreaView, useWindowDimensions, StatusBar, Image, } from 'react-native'
import React, { useEffect } from 'react'
import { SIZES, images, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/theme'

const Splashscreen = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate("introslider")
        }, 2000)
        return () => clearTimeout(timer)
    }, [navigation])
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