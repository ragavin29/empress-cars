import React, { useEffect,useState } from 'react';
import { View,SafeAreaView,ScrollView, Text, Image, StyleSheet, TouchableOpacity, TextInput, Platform, KeyboardAvoidingView, Alert, Modal } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import axios from 'axios';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/action';

GoogleSignin.configure({
  webClientId: '49134833476-nq1a3mragp34lpvhtubelr02f48i1fq1.apps.googleusercontent.com', // Replace with your client ID
});

const Login = ({ navigation }) => {
  const dispatch=useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  useEffect(() => {   
    GoogleSignin.configure({
      webClientId: '49134833476-nq1a3mragp34lpvhtubelr02f48i1fq1.apps.googleusercontent.com',
    });
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const idToken = userInfo.idToken;

     
      const response = await fetch('/api/auth/googlelogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        throw new Error('Backend authentication failed');
      }

      const data = await response.json();
      console.log('Backend response:', data);
    

    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Sign-In cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Sign-In in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services not available');
      } else {
        Alert.alert('Google Sign-In error', error.message);
        console.log('gooogle',error.message)
      }
    }
  };

  const handleLogin = async () => {
    console.log("Handle Login Called");
    console.log("Email:", email, "Password:", password); // Log email and password

    try {
        const response = await fetch('http://13.235.17.41/api/test/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        // Log the response for debugging
        console.log("Response status:", response.status);
        const responseData = await response.json();
        console.log("Response data:", responseData);
          navigation.navigate('Home');
        if (!response.ok) {
         
            throw new Error(responseData.message || 'Login failed');
        }

        Alert.alert('Login Success');
        dispatch(login(responseData));
        // navigation.navigate('Home');
    } catch (error) {
        console.error('Login error:', error);
        Alert.alert('Login failed', error.message);
    }
};

  const handleGenerateOtp = async () => {
    try {
      const response = await axios.get(`http://13.60.25.121/api/test/auth/generateOTP?email=${resetEmail}`);

      if (!response.data.success) {
        throw new Error('OTP generation failed');
      }

      setOtpGenerated(true);
      setOtp(response.data.OTP); // Optionally store the OTP if needed
      Alert.alert('Success', 'OTP has been sent to your email');
      console.log('OTP generated:', response.data.OTP);

    } catch (error) {
      console.error('OTP generation error:', error);
      Alert.alert('OTP generation failed', error.message);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.get(`http://13.60.25.121/api/test/auth/verifyOTP?email=${resetEmail}&OTP=${otp}`);

      if (!response.data.success) {
        throw new Error('OTP verification failed');
      }

      setOtpVerified(true);
      Alert.alert('Success', 'OTP has been verified');
      console.log('OTP verified successfully');
     

    } catch (error) {
      console.error('OTP verification error:', error);
      Alert.alert('OTP verification failed', error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      if (!otpVerified) {
        await handleGenerateOtp(); 
      } else {
        const response = await fetch('http://13.60.25.121/api/test/auth/resetPassword', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: resetEmail,
            password: newPassword, 
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Password reset failed');
        }

        const data = await response.json();
        console.log('Password reset successful:', data);
        Alert.alert('Success', 'Password has been reset successfully');
        setIsModalVisible(false); 

      }
    } catch (error) {
      console.error('Password reset error:', error);
      Alert.alert('Password reset failed', error.message);
    }
  };
if(error){
  <View> Error os coming</View>
}
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
     >
    
   
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={styles.topSection}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.signintext}>Sign in to get luxury services</Text>
      </View>

      <View style={{ alignSelf: 'center', marginTop: responsiveHeight(35) }}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder='Enter Email'
            placeholderTextColor='white'
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={{ ...styles.input, marginVertical: 25 }}>
          <TextInput
            style={styles.inputtext}
            placeholder='Enter Password'
            placeholderTextColor='white'
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>

        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.forgotpwd}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttoncontainer} onPress={handleLogin}>
          <Text style={styles.buttontext}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginVertical: 20 ,alignSelf:'center'}}>
        <View style={styles.horizontalLine} />
        <Text style={{ color: 'white', marginBottom: 10 }}>or</Text>
        <View style={styles.horizontalLine} />
      </View>

      <TouchableOpacity onPress={handleGoogleSignIn} style={styles.googleCard}>
        <Text style={{color:'white',fontSize:responsiveFontSize(2),marginHorizontal:15}}>Sign In with</Text>
        <Image style={styles.googlelogo} source={require('../assets/images/google.png')} />
      </TouchableOpacity>
      
     
        <Text style={styles.newhere}>
          New here? <Text  onPress={() => navigation.navigate('SignUp')} style={styles.underlineText}>Join the elite</Text>
        </Text>
     

      {/* Forgot Password Modal */}
      <Modal
        visible={isModalVisible}
        animationType='slide'
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Image source={require('../assets/images/close.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Reset Password</Text>
            <TextInput
              style={styles.modalInput}
              placeholder='Enter Email'
              placeholderTextColor='white'
              value={resetEmail}
              onChangeText={text => setResetEmail(text)}
            />
            {!otpGenerated && (
              <TouchableOpacity style={styles.modalButton} onPress={handleGenerateOtp}>
                <Text style={styles.modalButtonText}>Generate OTP</Text>
              </TouchableOpacity>
            )}
            {otpGenerated && (
              <>
                <TextInput
                  style={styles.modalInput}
                  placeholder='Enter OTP'
                  placeholderTextColor='white'
                  value={otp}
                  onChangeText={text => setOtp(text)}
                />
                <TouchableOpacity style={styles.modalButton} onPress={handleVerifyOtp}>
                  <Text style={styles.modalButtonText}>Verify OTP</Text>
                </TouchableOpacity>
                {otpVerified && <Text style={styles.otpStatus}>OTP Verified</Text>}
              </>
            )}
            {otpVerified && (
              <>
                <TextInput
                  style={styles.modalInput}
                  placeholder='Enter New Password'
                  placeholderTextColor='white'
                  secureTextEntry
                  value={newPassword}
                  onChangeText={text => setNewPassword(text)}
                />
                <TouchableOpacity style={styles.modalButton} onPress={handleForgotPassword}>
                  <Text style={styles.modalButtonText}>Reset Password</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
   </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  topSection: {
    alignSelf: 'center',
    top: 10,
    marginVertical: 40,
    position: 'absolute'
  },
  logo: {
    height: responsiveHeight(12),
    width: responsiveWidth(60),
    resizeMode: 'cover',
    padding: 0,
    flexShrink: 1,
  },
  signintext: {
    color: 'white',
    fontSize: responsiveFontSize(2.3),
    fontWeight: '600',
  },

  errorContainer: {
    padding: 20,
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 10,
  },
  errorText: {
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#323232',
    height: responsiveHeight(6),
    width: responsiveWidth(85),
    borderRadius: 30,
  },
  inputtext: {
    color: 'white',
    marginHorizontal: 20,
  },
  forgotpwd: {
    color: 'white',
    marginBottom: 5,
    textAlign: 'right',
    marginTop: -18,
    marginBottom: 20,
  },
  buttoncontainer: {
    backgroundColor: '#ebc832',
    padding: 10,
    height: responsiveHeight(6),
    width: responsiveWidth(85),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  horizontalLine: {
    height: 2,
    width: '40%',
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#323232',
    marginVertical: 10
  },
  googleCard: {
    flexDirection:'row',
    borderColor: '#ebc832',
    borderWidth: 2,
    width:responsiveWidth(80),
    borderRadius: 10,
    padding: 10,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  googlelogo: {
    height: responsiveHeight(3),
    width: responsiveWidth(6.2),
  },
  newhere: {
    bottom: 0,
    alignSelf:'center',
    position: 'absolute',
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
  underlineText: {
    color: '#ebc832',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: responsiveHeight(50),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: responsiveWidth(100),
    height: responsiveHeight(60),
    backgroundColor: 'black',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#ebc832',
    borderWidth: 2,
  },
  modalTitle: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalInput: {
    backgroundColor: '#323232',
    height: responsiveHeight(6),
    width: '100%',
    borderRadius: 30,
    color: 'white',
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  modalButton: {
    backgroundColor: '#ebc832',
    padding: 15,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  modalButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  closeIcon: {
    height: responsiveHeight(2),
    width: responsiveHeight(2),
  },
  otpStatus: {
    color: 'green',
    fontSize: responsiveFontSize(1.8),
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default Login;
