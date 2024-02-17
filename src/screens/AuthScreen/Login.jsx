import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from '../../constants'
import Header from '../../components/Header/Header'

const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.h5, justifyContent: "space-between" }}>
                <Header />
                <Text style={{ ...FONTS.body2, fontFamily: "Lato-Black", marginRight: SIZES.h1 * 9.55, color: COLORS.black }}> Log in</Text>
            </View>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.width * 0.04,



    }
})