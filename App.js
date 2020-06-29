import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import DashboardScreen from './app/screens/DashboardScreen';
import HomeScreen from './app/screens/HomeScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const App = createSwitchNavigator({
  DashboardScreen:DashboardScreen,
  HomeScreen:HomeScreen
});
export default createAppContainer(App);
