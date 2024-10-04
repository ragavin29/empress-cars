import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import CTAButton from '../Empress Limos/ui/CTAButton';

export default function Categories() {
  const categoryData = [
    { id: '1', label: 'Maintenance' },
    { id: '2', label: 'Assistance' },
    { id: '3', label: 'Upgrades' },
    { id: '4', label: 'Book Now' },
    { id: '5', label: 'Concierge' },
  ];

  const handlePress = (label) => {
    console.log("Handle Press", label);
  };

  return (
    <View style={styles.container}>
          <Text style={styles.textHead}>Categories</Text>
      <View style={styles.buttonContainer}>
        {categoryData.map((item) => (
          <View key={item.id} style={styles.buttonWrapper}>
            <CTAButton 
              text={item.label} 
              onPress={() => handlePress(item.label)}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textHead: {
    color: '#ffffff',
    fontSize: 20,             
    fontFamily: 'Source Sans Pro',
    fontWeight: '700',      
    lineHeight: 26,   
    padding:2        
},
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: '40%', 
    marginBottom: 10,
  },
});