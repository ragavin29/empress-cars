import { View, Text, TouchableOpacity ,StyleSheet} from 'react-native'
import React from 'react'

export default function CTAButton({onPress,text}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
      backgroundColor: 'yellow',     
      paddingVertical: 12,           
      paddingHorizontal: 24,         
      borderRadius: 25,              
      alignItems: 'center',          
      justifyContent: 'center',
      marginVertical: 10,             
    },
    buttonText: {
      color: 'black',                 
      fontSize: 13,                   
      fontWeight: 'bold',   
        fontFamily: 'Source Sans Pro'
              
    },
  });