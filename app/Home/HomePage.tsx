import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Weather from '../Pages/Weather'
import Temperature from '../Pages/Temperature'
import Card from '../Components/Card'
const HomePage = () => {
  return (
    <View>
      <Weather />
      <Temperature />
      <Card />
    </View>
   
  ) 
}

export default HomePage

const styles = StyleSheet.create({
  
  });
  