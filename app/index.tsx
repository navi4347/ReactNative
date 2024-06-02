import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import Splash from './SplashScreen/Splash';
import Lottie from './SplashScreen/Lottie';
import { useRouter } from 'expo-router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Home/HomePage');
    }, 3050); 
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Lottie />
      </View>
      <View style={styles.splashContainer}>
        <Splash />
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
