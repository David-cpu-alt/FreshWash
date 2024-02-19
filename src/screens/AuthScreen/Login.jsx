import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS, images } from '../../constants'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Button from '../../components/Pressable/Button'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.h5, justifyContent: "space-between" }}>
                <Header />
                <Text style={{ ...FONTS.body2, fontFamily: "Lato-Black", marginRight: SIZES.h1 * 9.55, color: COLORS.black }}> Log in</Text>
            </View>
            <View style={{ marginTop: SIZES.h3 * 1.5 }}>
                <Image source={images.little} style={{ height: SIZES.height * 0.3, width: SIZES.width, resizeMode: "contain", }} />
                <Input
                    Title="Name"
                    placeholder={"Enter your name"} />
                <Input
                    Title="Password"
                    placeholder={"Enter your Password"} />
            </View>
            <TouchableOpacity style={{ marginTop: SIZES.h3 * 1.95 }}>
                <Button title={"Sign in"}
                    onPress={() => navigation.navigate("")} />
            </TouchableOpacity>



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