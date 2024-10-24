import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import COLORS from '../styles/Colors';


const SelectionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <View style={styles.header}>
          <Text style={styles.carIcon}>🚕</Text>
          <Text style={styles.appName}>Empress</Text>
        </View>

        {/* Welcome Text */}
        <Text style={styles.welcomeText}>
          Welcome! Please choose your Role type.
        </Text>

        {/* Login Buttons */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>User Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('DriverLogin')}
        >
          <Text style={styles.buttonText}>Driver Login</Text>
        </TouchableOpacity>


        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Empress All rights reserved.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SelectionScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    content: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30,
    },
    carIcon: {
      fontSize: 24,
      marginRight: 8,
      color: '#FFD700',
    },
    appName: {
      fontSize: 24,
      color: 'white',
      fontWeight: '500',
    },
    welcomeText: {
      color: 'white',
      fontSize: 16,
      marginBottom: 30,
    },
    loginButton: {
      backgroundColor: COLORS.yellow,
      borderRadius: 8,
      padding: 15,
      alignItems: 'center',
      marginBottom: 16,
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
      fontWeight: '500',
    },
    footer: {
      position: 'absolute',
      bottom: 20,
      left: 0,
      right: 0,
      alignItems: 'center',
    },
    footerText: {
      color: '#666666',
      fontSize: 12,
    },
  });