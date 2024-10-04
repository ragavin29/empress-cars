import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJARXBpAdqYpVKfaR457JJA5FaFV3bH91Hw&s' }} 
      style={styles.headerStyle}
    >

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="left" size={24} color="yellow" />
      </TouchableOpacity>

<View style={styles.textContainer}> 
<Text  style={{color:'white',fontWeight:'bold'}}>Welcome , Guest</Text>
      <Text style={styles.textStyle}>Explore luxury Services</Text>
</View>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    padding: 10,
  },

  textContainer:{
marginRight:50
  }
});
