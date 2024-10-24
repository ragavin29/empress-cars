import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../../styles/Colors';

const Footer = () => {
  const handlePhonePress = () => {
    Linking.openURL('tel:+18001234567');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:support@luxuryride.com');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.item} onPress={handlePhonePress}>
        <Icon name="phone" size={24} color={COLORS.yellow} />
        <Text style={styles.text}>+1 800 123 4567</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleEmailPress}>
        <Icon name="email" size={24} color={COLORS.yellow} />
        <Text style={styles.text}>support@luxuryride.com</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom:0,
    // width:100,
    alignSelf: 'center',
    backgroundColor: '#333',
    paddingVertical: 22,
    paddingHorizontal:19,
    gap:20,
    position:'absolute'
  
  },
  item: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  text: {
    color: '#3498db',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Footer;