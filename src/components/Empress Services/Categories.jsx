import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CTAButton from '../Empress Limos/ui/CTAButton';

export default function Categories() {
  const categoryData = [
    { id: '1', label: 'Maintenance' },
    { id: '2', label: 'Assistance' },
    { id: '3', label: 'Upgrades' },
    { id: '4', label: 'Concierge' },
    { id: '5', label: 'Book Now' },
  ];

  const handlePress = (label) => {
    console.log("Handle Press", label);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Categories</Text>
      <View style={styles.buttonContainer}>
        {categoryData.map((item) => (
          <View key={item.id} style={styles.buttonWrapper}>
            <CTAButton
              text={item.label}
              onPress={() => handlePress(item.label)}
              style={styles.button}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    width: '48%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#D4AF37',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});