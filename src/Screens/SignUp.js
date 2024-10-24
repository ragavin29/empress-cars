import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,Image,
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
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
              <Ionicons name="chevron-back" size={24} color="#FFD700" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Sign Up Yourself!</Text>
          </View>
  <View style={styles.carContainer}>
  {/* Smoke dots */}
  <Image source={require('../assets/images/signupcar.png')} style={styles.carimg} />
  <View style={styles.dotsContainer}>
    <View style={styles.dot}></View>
    <View style={styles.dot}></View>
    <View style={styles.dot}></View>
    <View style={styles.dot}></View>
  </View>
  {/* Car image */}
 
</View>
          
          <View style={styles.horizontalLine} />
        
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
    // marginBottom: responsiveHeight(1), 
  },
  carimg: {
    width: responsiveWidth(22),
    height: responsiveHeight(5),
    marginTop:5,
    // position: 'absolute',
    // right: 0,
    // bottom: responsiveHeight(0), // Car is positioned just above the line
  },
  dotsContainer: {
    position: 'absolute',
    right: responsiveWidth(25), // Smoke behind the car
    bottom: responsiveHeight(2), // Positioned to appear behind the car
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: responsiveWidth(2),
    height: responsiveWidth(2),
    backgroundColor: '#999',
    borderRadius: responsiveWidth(1),
    marginHorizontal: responsiveWidth(1),
  },
  horizontalLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: responsiveHeight(2), // Adjusted to reduce spacing between car and line
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
export default SignUpScreen