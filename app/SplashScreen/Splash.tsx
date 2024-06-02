import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';


const Splash = () => {
  const [fontsLoaded, fontError] = useFonts({
    'Sacramento': require('../assets/fonts/Sacramento.ttf'),
  });

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
     
    <Text style={styles.Text}>
      Developed by{' '}
    <Text style={styles.customText}>Naveen Chowdary</Text>
  </Text>
  );

};


const styles = StyleSheet.create({
  Text:{
    color: '#000'

  },
  customText: {
    fontFamily: 'Sacramento',
    fontSize: 20,
    color: '#000'
  },
});



export default Splash;

