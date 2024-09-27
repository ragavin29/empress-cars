import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/Screens/SignUp';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Toast from 'react-native-toast-message';
import Profile from './src/Screens/Profile';
import AccountDetails from './src/components/Profile/AccountDetails';
import EmpressLimos from './src/components/Empress Limos/EmpressLimos';
import RideBookingScreen from './src/components/Empress Limos/PickUp';
import CarRentalScreen from './src/components/Empress Limos/CarDetails/CarDetails';
import CarList from './src/components/Empress Limos/CarList';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen  options={{ headerShown: false }} name="Splash" component={Splash} />

        <Stack.Screen  options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
        <Stack.Screen  options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen  options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen  options={{ headerShown: false }} name="Profile" component={Profile} />
        <Stack.Screen  options={{ headerShown: false }} name="AccountDetails" component={AccountDetails} />
        <Stack.Screen  options={{ headerShown: false }} name="Limos" component={EmpressLimos} />
        <Stack.Screen  options={{ headerShown: false }} name="Cars" component={CarRentalScreen} />
        <Stack.Screen  options={{ headerShown: false }} name="Pickup" component={RideBookingScreen} />
        <Stack.Screen  options={{ headerShown: false }} name="CarList" component={CarList} />
        {/* <Stack.Screen name='camera' component={CameraComponent} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
      <Toast />
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});


export default App;
