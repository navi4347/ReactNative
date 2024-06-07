import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

const Tirupati = () => {
  const [temperature, setTemperature] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState<string | null>(null);
  const [main, setMain] = useState<string | null>(null);
  const [humidity, setHumidity] = useState<number | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?id=1254360&appid=6c0adc969ab345c8fef852e714f998b8'
        );
        const tempInKelvin = response.data.main.temp;
        const tempInCelsius = tempInKelvin - 273.15;
        setTemperature(Math.round(tempInCelsius).toString());
        setIcon(response.data.weather[0].icon);
        setMain(response.data.weather[0].main);
        setHumidity(response.data.main.humidity);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tirupati</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <Text style={styles.temperature}>{temperature} °C</Text>
          {icon && (
            <Image
              style={styles.icon}
              source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
            />
          )}
          <Text style={styles.main}>{main}</Text>
          <Text style={styles.humidity}>Humidity: {humidity}%</Text>
        </>
      )}
    </View>
  );
};

export default Tirupati;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  temperature: {
    fontSize: 40,
  },
  icon: {
    width: 100,
    height: 100,
  },
  main: {
    fontSize: 24,
    marginTop: 10,
  },
  humidity: {
    fontSize: 18,
    marginTop: 10,
  },
});
