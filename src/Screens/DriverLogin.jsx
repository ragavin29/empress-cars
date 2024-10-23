import React, { useState } from 'react';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image
} from 'react-native';
import { useDispatch } from 'react-redux';
import { cablogin } from '../redux/action';
import COLORS from '../styles/Colors';

const DriverLoginScreen = ({navigation}) => {

    const dispatch=useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Hanlde Login Called");
    dispatch(cablogin({ email, password }));
    navigation.navigate('Home')
    console.log('Login attempted with:', email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
          <View style={styles.topSection}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
      </View>
      <View style={styles.content}>

        <View style={styles.headerContainer}>
          <Text style={styles.carIcon}>🚗</Text>
          <Text style={styles.headerText}>Driver's</Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />


        <TouchableOpacity 
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    topSection: {
        alignSelf: 'center',
        top: 10,
        marginVertical: 40,
        position: 'absolute'
      },
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logo: {
    height: responsiveHeight(12),
    width: responsiveWidth(60),
    resizeMode: 'cover',
    padding: 0,
    flexShrink: 1,
  },
  carIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',


  },
  input: {
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    padding: 15,
    marginBottom: 16,
    color: 'white',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: COLORS.yellow,
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 8,
  },
  loginButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default DriverLoginScreen;