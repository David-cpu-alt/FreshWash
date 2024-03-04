import { StyleSheet, Text, View, SafeAreaView, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SIZES, FONTS, icons } from '../../constants'

const Input = ({ placeholder, Title, onChangeText, keyboardType, value, eyeoff }) => {
    const [hide, sethide] = useState(false)
    return (
        < SafeAreaView  >
            <View style={{ paddingVertical: SIZES.h5, rowGap: SIZES.h5 }}>
                <Text style={{ ...FONTS.body4, fontFamily: "Lato-Regular" }}>{Title}</Text>
                <View style={styles.box}>
                    <TextInput
                        placeholder={placeholder}
                        value={value}
                        onChangeText={onChangeText}
                        keyboardType={keyboardType}
                        secureTextEntry={hide}
                    />
                    {
                        eyeoff &&
                        <TouchableOpacity onPress={() => sethide(!hide)}>
                            <Image source={hide ? icons.view : icons.view2} style={{ height: SIZES.h2, width: SIZES.h2, }} />
                        </TouchableOpacity>

                    }
                </View>



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
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.h5

    }
})