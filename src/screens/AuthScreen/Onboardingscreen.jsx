import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS, SIZES, images, FONTS } from '../../constants'
import { useNavigation } from '@react-navigation/native';


const slides = [
  {
    id: "slide1",
    title: "Welcome to Fresh Wash",
    image: images.pick,
    text: "Revolutionize your laundry experience with Fresh Wash. Say goodbye to the hassle of laundry day and discover a smarter way to get your clothes cleaned."


  },
  {
    id: "slide2",
    title: " Schedule Pickup and Delivery",
    image: images.handrawn,
    text: "With Fresh Wash, you can easily schedule pickup and delivery of your laundry, saving you time and effort. Enjoy the convenience of laundry service at your fingertips."
  },
  {
    id: "slide3",
    title: "Track Your Laundry",
    image: images.track,
    text: "Track the status of your laundry in real-time with Fresh Wash. Know exactly when your clothes will be ready for pickup or delivery."
  }

]

const Onboardingscreen = () => {
  const navigation = useNavigation();
  const _renderItem = ({ item }) => {
    return (
      <View style={{}}>

        <Image source={item.image} style={{ height: SIZES.height / 1.8, width: SIZES.width, resizeMode: "contain", alignSelf: "center" }} />
        <View style={{ marginTop: SIZES.h6, paddingHorizontal: SIZES.h3, alignItems: "center" }}>
          <Text style={{ ...FONTS.body3, fontFamily: "Lato-Bold", color: COLORS.blue }}>{item.title}</Text>
          <Text style={{ ...FONTS.body4b, fontFamily: "Lato-Regular", color: COLORS.dark2 }}>{item.text}</Text>
        </View>

      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={styles.buttoncircle}>
        <Text style={{ ...FONTS.body4, color: COLORS.white, fontFamily: "Lato-Regular" }}>continue</Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View style={styles.buttoncircle}>
        <Text style={{ ...FONTS.body4, color: COLORS.white, fontFamily: "Lato-Regular" }}
        >Done</Text>

      </View>
    );
  };

  const _renderSkipButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("create")}>
        <View style={{ marginTop: SIZES.h5 * 0.98 }} >
          <Text style={{ ...FONTS.body3, fontFamily: "Lato-Bold" }}>Skip</Text>
        </View>
      </TouchableOpacity>

    );
  };

  const _onEndReached = () => {
    // Handle onDone or onSkip actions
    navigation.navigate("create")
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: SIZES.h6 }}>
      <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        renderSkipButton={_renderSkipButton}
        onDone={_onEndReached}
        onSkip={_onEndReached}
        dotClickEnabled={true}
        showNextButton={true}
        showDoneButton={true}
        showSkipButton={true}
        dotStyle={{ height: 7, width: 7, backgroundColor: COLORS.primary, borderRadius: 100, marginBottom: SIZES.height * 0.3 }}
        activeDotStyle={{ height: 7, width: 20, borderRadius: 100, marginBottom: SIZES.height * 0.3, backgroundColor: COLORS.primary }}

      />


      {/* <Text>shhshshsh</Text>
      <Text>shhshshsh</Text>
      <Text>shhshshsh</Text>
      <Text> My name is David</Text> */}
    </View>
  );
};

export default Onboardingscreen;
const styles = StyleSheet.create({
  buttoncircle: {
    height: SIZES.h2 * 1.8,
    width: SIZES.h2 * 3.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.base

  }
})
