
import React, { Component } from 'react';
import { View, Text, Image,StyleSheet, TouchableOpacity,TextInput ,Platform,KeyboardAvoidingView} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import axios from 'axios';

const Login = ({navigation}) => {
  
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >

            <View style={styles.topSection}>
             <Image style={styles.logo} source={require('../assets/images/logo.png')} />
             <Text style={styles.signintext}>Sign in to get luxury services</Text>
          </View>

             <View style={{alignSelf:'center',marginTop:responsiveHeight(20)}}>
                <View style={styles.input}>
                <TextInput
                 style={styles.inputtext}
                 placeholder='Enter Email'
                 placeholderTextColor='white'></TextInput>
                </View>
                <View style={{...styles.input,marginVertical:25}}>
                <TextInput
                 style={styles.inputtext}
                 placeholder='Enter Password'
                 placeholderTextColor='white'></TextInput>
                </View>
                <Text style={styles.forgotpwd}>Forgot Passwrod.?</Text>
                 <TouchableOpacity  style={styles.buttoncontainer}>
                     <Text style={styles.buttontext}>Sign In</Text>
                 </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row',marginVertical:20,}}>
                <View style={styles.horizontalLine} />
                <Text style={{color:'white',marginBottom:10}}>or</Text>
                <View style={styles.horizontalLine} />
            </View>

            <View  style={{flexDirection:'row',justifyContent: 'center',alignItems:'flex-end'}}>
                <Image style={styles.googlelogo} source={require('../assets/images/facebook.png')} />
                <Image style={{...styles.googlelogo,width:responsiveWidth(11),height:responsiveHeight(5.6)}} source={require('../assets/images/google.png')} />
            </View>

            <Text style={styles.newhere}>
                    New here? <Text style={styles.underlineText}>Join the elite</Text>
            </Text>
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
        alignItems: 'center',
        top:10,
        marginVertical:40,
        position:'absolute'
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
        fontSize: responsiveFontSize(1.8),
        fontWeight: '600',   
     
      },
    input:{
        backgroundColor: '#323232',      
        height: responsiveHeight(6),
        width: responsiveWidth(85),
        borderRadius: 30,
    },
    inputtext:{
      color:'white',
      marginHorizontal:20,
    },
    forgotpwd:{
        color:'white',       
        marginBottom:5,
        textAlign:'right',
        marginTop: -18,
        marginBottom: 20,
       
    },
    buttoncontainer:{
        backgroundColor: '#ebc832',
        padding: 10,
        height: responsiveHeight(6),
        width: responsiveWidth(85),
        borderRadius: 30,
        justifyContent: 'center',  // Center content vertically
        alignItems: 'center',   
      
    },
    buttontext:{
      textAlign: 'center',
       fontWeight:'bold',
       color:'black',
     
    },
    horizontalLine: {        
        height: 2,
        width: '40%', 
        marginLeft:5,
        marginRight:5,
        backgroundColor: '#323232', 
        marginVertical:10
      },
      googlelogo:{
        height:responsiveHeight(7),
        width:responsiveWidth(15),
        marginHorizontal:50
      },
      newhere:{
        bottom:0,
        position:'absolute',
        color:'white',
        fontSize:responsiveFontSize(2),
      },
      underlineText: {
        color: '#ebc832',
        textDecorationLine: 'underline',
      },
});


export default Login;
