import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../../constants'

const Button = ({ title, onPress }) => {
    return (
        <View>
            <View style={styles.Button}>
                <Text style={{ ...FONTS.body3, color: COLORS.white, fontFamily: "Lato-Bold" }}>{title}</Text>
                <Text>{onPress}</Text>
            </View>

        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    Button: {
        height: SIZES.height * 0.08,
        width: SIZES.width * 0.9,
        borderWidth: 0.5,
        borderRadius: SIZES.base * 0.5,
        backgroundColor: COLORS.blue,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: SIZES.h3

    }
})