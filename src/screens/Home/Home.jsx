import { StyleSheet, Text, View, SafeAreaView, Image, } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { FONTS, icons, COLORS, SIZES } from '../../constants'


const Home = () => {
  const [storedName, setStoredName] = useState("")
  useEffect(() => {
    fetchName();
  }, []);
  const fetchName = async () => {
    try {

      const name = await AsyncStorage.getItem("myname");

      console.log('ddddkd', name)

      if (name !== null) {
        setStoredName(name)
      }
    } catch (error) {
      console.error("Failed to fetch ")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* parent container for profile and stored name  */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>

        {/* profile view */}
        <View style={styles.profile}>

        </View>
        {/* profile view ends  */}
        <Text style={{ ...FONTS.body4, color: COLORS.dark, marginRight: SIZES.h1 * 4.5 }}>  welcome {storedName}</Text>
        <Image source={icons.notification} style={{ height: SIZES.h2, width: SIZES.h2, alignSelf: "auto", resizeMode: "contain" }} />
      </View>
      {/* parent container ends here  */}


      <Text></Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.h5
  },
  profile: {
    height: SIZES.h3 * 2.5,
    width: SIZES.h3 * 2.5,
    borderRadius: SIZES.h3 * 1.2,
    borderWidth: 0.5
  }
})