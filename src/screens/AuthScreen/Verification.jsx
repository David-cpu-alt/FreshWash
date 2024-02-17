import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const Verification = () => {
  return (
    <View>
      <Text>Verification</Text>
    </View>
  )
}

export default Verification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.04,
  }
})