import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen  options={{ headerShown: false }} name="Splash" component={Splash} />
        <Stack.Screen  options={{ headerShown: false }} name="Login" component={Login} />
      </Stack.Navigator>

     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});


export default App;
