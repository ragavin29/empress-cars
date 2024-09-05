import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useDispatch } from 'react-redux';
import { register } from '../redux/action';

const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();

  const registerHandler = async () => {
    const myForm = {
      username,
      firstName,
      lastName,
      password,
      email,
      mobile
    };
    try {
      await dispatch(register(myForm)); 
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="chevron-back" size={24} color="#FFD700" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Sign Up Yourself!</Text>
          </View>
          <View style={styles.carContainer}>
            <View style={styles.car} />
          </View>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor="#888"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#888"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="#888"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="#888"
              value={lastName}
              onChangeText={setLastName}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              placeholderTextColor="#888"
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={registerHandler}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: responsiveWidth(5),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(3),
  },
  headerText: {
    color: '#FFD700',
    fontSize: responsiveFontSize(3),
    marginLeft: responsiveWidth(2),
  },
  carContainer: {
    height: responsiveHeight(7),
    justifyContent: 'center',
    marginBottom: responsiveHeight(3),
  },
  car: {
    width: responsiveWidth(10),
    height: responsiveHeight(3),
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  title: {
    color: '#FFF',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginBottom: responsiveHeight(2),
  },
  inputContainer: {
    marginBottom: responsiveHeight(2),
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 50,
    padding: responsiveWidth(3),
    marginBottom: responsiveHeight(1),
    color: '#FFF',
    fontSize: responsiveFontSize(2),
  },
  button: {
    backgroundColor: '#ebc832',
    padding: responsiveHeight(1.5),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
  },
  buttonText: {
    color: '#000',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
