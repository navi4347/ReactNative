import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font';

const Name = () => {
    const [fontsLoaded, fontError] = useFonts({
        'Audiowide': require('../assets/fonts/Audiowide.ttf'),
      });
    
     
      if (!fontsLoaded && !fontError) {
        return null;
      }
  return (
    <View>
      <Text style={styles.customText}>SWASTHA</Text>
    </View>
  )
}

export default Name

const styles = StyleSheet.create({
  customText: {
    fontSize: 35,
    color: '#0296F0',
    fontFamily: 'Audiowide',
  },
});
