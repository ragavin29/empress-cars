import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import CTAButton from '../Empress Limos/ui/CTAButton';

export default function Emergency() {
  return (
    <View style={styles.emergencyContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.headText}>Emergency Assistance</Text>
        <Text style={styles.paraText}>Premium Roadside 24/7 Assistance</Text>
      </View>
      <CTAButton text="Book Now" onPress={() => alert('Button Pressed!')} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  emergencyContainer: {
    marginTop: 20,
    width: '100%',
    height: 90,
    backgroundColor: '#d71b1b',
    borderWidth: 2,
    borderColor: '#e2dbdb',
    borderStyle: 'dotted',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',  
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
  },
  textContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  headText: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    lineHeight: 22,
  },
  paraText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Open Sans',
    lineHeight: 20,
    marginTop: 5, 
  },
  button: {
    width: 80,
    paddingVertical: 5,
    
  },
});
