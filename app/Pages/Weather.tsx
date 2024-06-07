import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Timezone from '../Components/TimeZone';
import TimeSec from '../Components/TimeSec';
const Weather = () => {
  return (
    <View style={styles.container}>
      <Timezone />
      <TimeSec />
    </View>
  );
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 25, 
  },
});
