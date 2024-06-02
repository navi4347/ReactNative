import React, { useRef, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  const animation = useRef(null);

 

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={styles.lottie}
        source={require('../assets/json/water.json')}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
