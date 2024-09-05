import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#FFD700" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign Up Yourself !</Text>
      </View>
      <View style={styles.carContainer}>
        <View style={styles.car} />
      </View>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#888" secureTextEntry />
        <TextInput style={styles.input} placeholder="First Name" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Last Name" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Location" placeholderTextColor="#888" />
        <TextInput style={styles.input} placeholder="Mobile" placeholderTextColor="#888" keyboardType="phone-pad" />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#FFD700',
    fontSize: 28,
    marginLeft: 10,
  },
  carContainer: {
    height: 50,
    justifyContent: 'center',
    marginBottom: 20,
  },
  car: {
    width: 50,
    height: 20,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
    color: '#FFF',
    
  },
  button: {
    backgroundColor: '#ebc832',
        padding: 10,
        height: responsiveHeight(6),
        width: responsiveWidth(85),
        borderRadius: 30,
        justifyContent: 'center',  
        alignItems: 'center',   
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;