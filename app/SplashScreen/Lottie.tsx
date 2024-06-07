import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Name from './Name';

export default function App() {
  const animation = useRef(null);
  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={styles.lottie}
        source={require('../assets/json/water.json')}
        autoPlay
        loop
      />
      <View>
        <Name />
      </View>
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
