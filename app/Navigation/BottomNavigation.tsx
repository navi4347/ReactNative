import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFocusEffect } from '@react-navigation/native';
import HomePage from '../Home/HomePage';
import SettingPage from '../Home/GamePage';
import TopStatusBar from '../Components/TopStatusBar';
import TopAppBar from '../Components/TopAppBar';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'


const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <TopStatusBar />
      <TopAppBar />
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#0296F0,',
        tabBarInactiveTintColor:'#000',
        }}>
        <Tab.Screen name="Home" component={HomePage} options={{
                    tabBarIcon: ({ color, size }) => (
                      <SimpleLineIcons name="layers" size={size} color={color} />

                    ),
        }} />
        
        <Tab.Screen name="Settings" component={SettingPage} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="game-controller" size={size} color={color} />

          ),
}} />

      </Tab.Navigator>

    </View>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({});
