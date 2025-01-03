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
import MessageDetail from './src/Screens/MessageDetail';
import Toast from 'react-native-toast-message';
import Profile from './src/Screens/Profile';
import AccountDetails from './src/components/Profile/AccountDetails';
import EmpressLimos from './src/components/Empress Limos/EmpressLimos';
import RideBookingScreen from './src/components/Empress Limos/PickUp';
import CarRentalScreen from './src/components/Empress Limos/CarDetails/CarDetails';
import CarList from './src/components/Empress Limos/CarList';
import Bookingsummary from './src/Screens/Bookingsummary';
import Payment from './src/Screens/PaymentScreen';
import ServiceScreen from './src/components/Empress Services/ServiceScreen';
import Lvmaintenance from './src/Screens/Servicesub';
import Emergengyassit from './src/Screens/Emergencyassit';
import VIPservices from './src/Screens/VIPconcierge';
import PersonalizedEnhancements from './src/Screens/PersonalEnhancements';
import Hospitality from './src/components/Empress Hospitality/Hospitality';
import Hospitalitysub from './src/components/Empress Hospitality/Hospitalitysub';
import BookingScreen from './src/components/Profile/BookingScreen';
import ContactForm from './src/Screens/Contact';
import DriverLoginScreen from './src/Screens/DriverLogin';
import SelectionScreen from './src/Screens/RoleScreen';
import DriverMessages from './src/components/Empress DriverSection/DriverMessages';
import PreviousTrip from './src/components/Empress DriverSection/PreviousTrip';
import LiveCabsHome from './src/components/Empress DriverSection/LiveCabsHome';

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
    
      <Stack.Navigator initialRouteName='Splash'>

      <Stack.Screen  options={{ headerShown: false }} name="Service" component={ServiceScreen} />
      <Stack.Screen  options={{ headerShown: false }} name="Contact" component={ContactForm} />
        <Stack.Screen  options={{ headerShown: false }} name="Splash" component={Splash} />

        <Stack.Screen  options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
        {/* <Stack.Screen  options={{ headerShown: false }} name="EmpressScreen" component={Home} /> */}
       
  
   <Stack.Screen  options={{ headerShown: false }} name="Login" component={Login} />
   <Stack.Screen  options={{ headerShown: false }} name="Profile" component={Profile} />
        <Stack.Screen  options={{ headerShown: false }} name="AccountDetails" component={AccountDetails} />
        <Stack.Screen  options={{ headerShown: false }} name="Limos" component={EmpressLimos} />
        {/* <Stack.Screen  options={{ headerShown: false }} name="Limos" component={EmpressLimos} /> */}
        <Stack.Screen  options={{ headerShown: false }} name="Cars" component={CarRentalScreen} />
        <Stack.Screen  options={{ headerShown: false }} name="Pickup" component={RideBookingScreen} />
        <Stack.Screen  options={{ headerShown: false }} name="CarList" component={CarList} />
        <Stack.Screen  options={{ headerShown: false }} name="MsgDetail" component={MessageDetail} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={MyTabs} />
        <Stack.Screen options={{ headerShown: false }} name="book" component={Bookingsummary} />
        <Stack.Screen options={{ headerShown: false }} name="Payment" component={Payment} />
        <Stack.Screen options={{ headerShown: false }} name="lvm" component={Lvmaintenance} />
        <Stack.Screen options={{ headerShown: false }} name="assit" component={Emergengyassit} />
        <Stack.Screen options={{ headerShown: false }} name="vip" component={VIPservices} />
        <Stack.Screen options={{ headerShown: false }} name="personal" component={PersonalizedEnhancements} />
        <Stack.Screen options={{ headerShown: false }} name="service" component={ServiceScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Hospitality" component={Hospitality} />
        <Stack.Screen options={{ headerShown: false }} name="Hospitalitysub" component={Hospitalitysub} />
        <Stack.Screen options={{ headerShown: false }} name="contact" component={ContactForm} />
        <Stack.Screen options={{ headerShown: false }} name="LiveHome" component={LiveCabsHome} />
        <Stack.Screen options={{ headerShown: false }} name="PreviousTrip" component={PreviousTrip} />
        <Stack.Screen options={{ headerShown: false }} name="Drivermsgs" component={DriverMessages} />


        {/* //Driver Login */}
        <Stack.Screen  options={{ headerShown: false }} name="DriverLogin" component={DriverLoginScreen} />
        <Stack.Screen  options={{ headerShown: false }} name="RoleScreen" component={SelectionScreen} />
{/* <-----Booking Screen-----> */}
<Stack.Screen options={{ headerShown: false }} name="Bookings" component={BookingScreen} />

      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // Add custom styles if needed
});

export default App;
