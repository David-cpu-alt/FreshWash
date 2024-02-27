import { StyleSheet, Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import { SIZES, FONTS } from '../../constants'

const Input = ({ placeholder, Title, onChangeText, keyboardType, value }) => {
    return (
        < SafeAreaView  >
            <View style={{ gap: SIZES.h5 }}>
                <Text style={{ ...FONTS.body4, fontFamily: "Lato-Regular" }}>{Title}</Text>
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    style={styles.box}
                />

            </View>
        </SafeAreaView>
    )
}

export default Input

const styles = StyleSheet.create({
    box: {
        ...FONTS.body5,
        padding: SIZES.h6,
        borderWidth: 0.5,
        borderRadius: SIZES.base * 0.5,
        marginBottom: SIZES.h5,
        paddingLeft: SIZES.h3
    }
})