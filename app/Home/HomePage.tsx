import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Weather from '../Pages/Weather'
import Temperature from '../Pages/Temperature'
import Map from '../Components/Map'
const HomePage = () => {
  return (
    <View>
      <Weather />
      <Temperature />
    </View>
   
  ) 
}

export default HomePage

const styles = StyleSheet.create({
    home: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
    },
  });
  