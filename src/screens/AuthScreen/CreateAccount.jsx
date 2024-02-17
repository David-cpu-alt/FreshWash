import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, FONTS } from '../../constants'
import Header from '../../components/Header/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../components/Input/Input'
import Button from '../../components/Pressable/Button'
import { useNavigation } from '@react-navigation/native'




const CreateAccount = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.h5, justifyContent: "space-between" }}>
        <Header />
        <Text style={{ ...FONTS.body2, fontFamily: "Lato-Black", marginRight: SIZES.h1 * 6.45 }}>Create Account</Text>
      </View>
      <View style={{ marginTop: SIZES.h1 * 1.8, }}>
        <Input
          Title="Name"
          placeholder={"Enter your name"} />
        <Input
          Title="Password"
          placeholder={"Enter your password"} />
        <Input
          Title="E-mail"
          placeholder={"Enter your e-mail"} />
      </View>
      <TouchableOpacity style={{ marginTop: SIZES.h3 / 0.2, alignItems: "center" }} onPress={() => navigation.navigate("Verify")}>
        <Button title={"Submit"}
          onPress={() => navigation.navigate("Verify")} />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: SIZES.h3 }}>
        <Text style={{ ...FONTS.body5 }}> Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ ...FONTS.body5 }}> Log in</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>




  )
}

export default CreateAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,



  }
})