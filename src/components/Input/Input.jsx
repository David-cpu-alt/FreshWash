import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'
import { SIZES, FONTS } from '../../constants'

const Input = ({ placeholder, Title }) => {
    return (
        < SafeAreaView>
            <View style={{ gap: SIZES.h5 }}>
                <Text style={{ ...FONTS.body4, fontFamily: "Lato-Regular" }}>{Title}</Text>
                <View style={styles.box}>
                    <TextInput
                        placeholder={placeholder}
                        style={{ marginLeft: SIZES.h5, ...FONTS.body5 }} />
                </View>
            </View>


        </SafeAreaView>
    )
}

export default Input

const styles = StyleSheet.create({
    box: {
        padding: SIZES.h6,
        borderWidth: 0.5,
        borderRadius: SIZES.base * 0.5,
        marginBottom: SIZES.h5
    }
})