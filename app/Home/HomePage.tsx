import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomePage = () => {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Home Screen</Text>
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
  