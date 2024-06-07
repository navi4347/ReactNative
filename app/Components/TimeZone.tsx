import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';

const Time = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);
  }, []); 

  const formattedDate = format(currentDate, 'EEE d MMMM');

  return (
    <View>
      <Text style={{ fontSize: 18 }}>{formattedDate}</Text>
    </View>
  );
}

export default Time;

const styles = StyleSheet.create({});
