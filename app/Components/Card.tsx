import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Card as PaperCard } from 'react-native-paper';

const CustomCard = () => {
  return (
    <View>
      <PaperCard style={styles.card}>
        <PaperCard.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </PaperCard>
    </View>
  );
}

export default CustomCard;

const styles = StyleSheet.create({
  
  card: {
    margin: 15,
  },
});
