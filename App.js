import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import SignUpScreen from './src/Screens/SignUp';
import Splash from './src/Screens/Splash';
import Login from './src/Screens/Login';
import Home from './src/Screens/Home';
import Myservice from './src/Screens/Myservice';
import Messages from './src/Screens/Messages';
import MsgDetail from './src/Screens/MessageDetail';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#323232',
          height: responsiveHeight(7),
        },
        tabBarLabelStyle: {
          color: 'white',
          fontSize: responsiveFontSize(1.6),
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./src/assets/images/homepage.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Myservice"
        component={Myservice}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./src/assets/images/list.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: () => (
            <Image
              source={require('./src/assets/images/email.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        {/* The home now has a tab navigator inside */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={MyTabs}
        />
        {/* Any specific screen within the Home tab navigator */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="MsgDetail"
          component={MsgDetail}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Add custom styles if needed
});

export default App;
