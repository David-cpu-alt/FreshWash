import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'

const Home = () => {
  const [storedname, setStoredName] = useState("")
  const fetchname = async () => {
    try {
      const name = await AsyncStorage.getItem("my name ");
      if (name !== null) {
        setStoredName(name)
      }
    } catch (error) {
      console.error("Failed to fetch ")
    }
  }
  return (
    <View>
      <Text> my nmae is {setStoredName}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {

  }
})