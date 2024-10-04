import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const serviceData = [
  {
    id: '1',
    label: 'Personalized Enhancements',
    text: 'Tailored Interiors and Audio Systems',
    image: 'https://images.unsplash.com/photo-1674110997072-41f11b7d4ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw1fHxDdXN0b20lMjBWZWhpY2xlJTJDJTIwVXBncmFkZXN8ZW58MXx8fHwxNzI0OTA2Mzg0fDA&ixlib=rb-4.0.3&q=80&w=1080',
    buttonText: 'Upgrade Now'
  },
  {
    id: '2',
    label: 'Luxury Vehicles Maintenance',
    text: 'Top tier packages for luxury vehicles',
    image: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXJ8ZW58MXx8fHwxNzI1MTgyNzk5fDA&ixlib=rb-4.0.3&q=80&w=1080',
    buttonText: 'Book Now'
  },
];

const CTAButton = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default function ServiceCard() {
  return (
    <View style={styles.container}>
      {serviceData.map((item) => (
        <View key={item.id} style={styles.cardContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.contentContainer}>
            <Text style={styles.labelText}>{item.label}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <CTAButton text={item.buttonText} onPress={() => console.log(`${item.buttonText} pressed`)} />
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#000',
    padding: 16,
  },
  cardContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 16,
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  labelText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});