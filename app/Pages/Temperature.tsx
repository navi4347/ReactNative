import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card } from 'react-native-paper';
import Tirupati from '../Components/Tirupati';
import Bengaloore from '../Components/Bengaloore';

const Temperature = () => {
  return (
    <Card style={styles.card}>
      <View style={styles.container}>
        <View style={styles.column1}>
          <Tirupati />
        </View>
        <View style={styles.separator} />
        <View style={styles.column2}>
          <Bengaloore />
        </View>
      </View>
    </Card>
  );
};

export default Temperature;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'row',
    height: 300,
  },
  column1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    width: 1,
    backgroundColor: '#000',
  },
  column2: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
