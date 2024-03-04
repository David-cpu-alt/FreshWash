import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Pressable/Button';
import { COLORS, SIZES, FONTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CreateAccount = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const navigation = useNavigation();
  console.log("the name is", name)
  console.log("the password is", password)


  const handleCreateAccount = async () => {
    try {
      //saving the name to Async storage

      await AsyncStorage.setItem("myname", name);

      // determining whether the user has created an account 
      await AsyncStorage.setItem("hascreatedAccount", "true")

      //
      navigation.navigate("Verify")
    }
    catch (error) {
      console.log("failed to create account ", error)
    }
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container} isEnabled
      >
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: SIZES.h5, justifyContent: "space-between" }}>
          <Header />
          <Text style={{ ...FONTS.body2, fontFamily: "Lato-Black", marginRight: SIZES.h1 * 6.45 }}>Create Account</Text>
        </View>
        <View style={{ marginTop: SIZES.h5 }}>
          <Input Title="Name" placeholder={"Enter your name"}
            value={name}

            onChangeText={setName} />
          <Input
            Title="Password"
            placeholder={"Enter your password"}
            value={password}
            eyeoff={true}
            onChangeText={setPassword}
            keyboardType=""

          />
          <Input Title="E-mail" placeholder={"Enter your e-mail"}
            keyboardType="email-address" />
        </View>
        <TouchableOpacity style={{ marginTop: SIZES.h5, alignItems: "center" }} onPress={handleCreateAccount}>
          <Button title={"Submit"} onPress={handleCreateAccount} />
        </TouchableOpacity>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: SIZES.h5 }}>
          <Text style={{ ...FONTS.body5, }}> Already have an account ? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ ...FONTS.body5, textDecorationLine: "underline", color: COLORS.blue, fontWeight: "bold" }}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
  }
});
