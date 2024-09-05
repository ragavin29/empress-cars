
import React, { Component } from 'react';
import { View, Text, StyleSheet ,StatusBar,Image, TouchableOpacity} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


    const Splash = ({navigation}) => {
        const handlePress = () => {
            navigation.navigate('Login');
        };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black"/>         
            <Image style={styles.logo} source={require('../assets/images/logo.png')} />
          <View style={styles.textcontainer}>
            <Text style={styles.text}>LuxuryRide</Text>
            <Text style={{...styles.text, fontSize:responsiveFontSize(2),marginVertical:15}}>Explore Luxury cars and Services</Text>
          </View>           
         <TouchableOpacity onPress={handlePress}  style={styles.buttoncontainer}>
            <Text style={styles.buttontext}>Discover</Text>
         </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    logo:{      
        position: 'absolute',
        top: responsiveHeight(2),
        height:responsiveHeight(40),
        width:responsiveWidth(85),
        resizeMode: 'contain',      
    },
    textcontainer:{
         alignSelf:'center',
         position:'absolute'
    },
    text:{       
        alignSelf:'center',
        color:'white',
        fontSize:responsiveFontSize(4),
        fontWeight:'bold'
    },
    buttoncontainer:{
        backgroundColor: '#ebc832',
        padding: 10,
        height: responsiveHeight(6),
        width: responsiveWidth(85),
        borderRadius: 30,
        marginTop:responsiveHeight(55), 
        justifyContent: 'center',  
        alignItems: 'center',       
    },
    buttontext:{
       textAlign:'center',
       fontWeight:'bold',
       color:'black',
      
    }
});


export default Splash;
