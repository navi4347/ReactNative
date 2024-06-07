import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { format } from 'date-fns';

const TimeSec = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Run only once on component mount

  const formattedTime = format(currentTime, 'h:mm:ss a');

  return (
    <View>
      <Text style={{ fontSize: 18 }}>{formattedTime}</Text>
    </View>
  );
};

export default TimeSec;

const styles = StyleSheet.create({});
