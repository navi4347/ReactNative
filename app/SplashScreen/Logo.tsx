import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import waterIcon from '../assets/images/water.png';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={waterIcon} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default Logo;
