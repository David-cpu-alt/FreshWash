import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../../constants'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={icons.arrow} style={{ height: SIZES.h4, width: SIZES.h4 }} />
      </Pressable>

    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white
  }
})