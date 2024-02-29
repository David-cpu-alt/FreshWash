import { StyleSheet, Text, View, SafeAreaView, Image, PermissionsAndroid, Alert } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState, useEffect } from 'react'
import { FONTS, icons, COLORS, SIZES, images } from '../../constants'
import Geolocation from '@react-native-community/geolocation';



const Home = () => {
  const [storedName, setStoredName] = useState("")
  useEffect(() => {
    fetchName();
    requestCameraPermission();
    getCurrentLocation();
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

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App location Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const [currentLocation, setCurrentLocation] = useState(null)

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude })
        console.log(latitude, longitude)
      },
      error => Alert.alert("Error", error.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* parent container for profile and notification  */}
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        {/* profile view */}
        <View style={styles.profile}>
          <Image source={images.nike} style={{ height: SIZES.h2 * 1.8, width: SIZES.h2 * 1.8, resizeMode: "cover", borderRadius: SIZES.base * 2.5 }} />
        </View>
        {/* profile view ends  */}
        <Image source={icons.notification} style={{ height: SIZES.h2, width: SIZES.h2, alignSelf: "auto", resizeMode: "contain" }} />
      </View>
      {/* parent container ends here  */}
      <View style={{ marginTop: SIZES.h5 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ ...FONTS.body4, color: COLORS.dark, marginRight: SIZES.h1 * 4.5 }}>  Hey  {storedName}</Text>
          <Image source={images.wavinghand} style={{ height: SIZES.h2, width: SIZES.h2, resizeMode: "contain", right: SIZES.h3 * 7 }} />
        </View>

        <Text>Get smart experience </Text>
        <Text>in washing</Text>
      </View>


      <Text> categories</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: SIZES.h3
  },
  profile: {
    height: SIZES.h3 * 2.5,
    width: SIZES.h3 * 2.5,
    borderRadius: SIZES.h3 * 1.2,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderColor: COLORS.blue
  }
})