import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function VIPServices({ navigation }) {
  const vipdata = [
    {
      id: '1',
      label: '24/7 Emergency Support',
      para: 'Diagnosis and Towing Service',
      footerText: 'Available',
      image: 'https://assets.api.uizard.io/api/cdn/stream/b83670c5-b880-4bbc-85fc-ae0a28d35095.png'
    },
    {
      id: '2',
      label: 'Exclusive Interior',
      para: 'Performance Boosts',
      footerText: 'Available',
      image: 'https://assets.api.uizard.io/api/cdn/stream/7e9777ac-643a-49b3-9965-3334d0ebbe0e.png',
    },
    {
      id: '3',
      label: 'Dedicated VIP Service',
      para: 'Luxury Rentals and Transfers',
      footerText: 'Available',
      image: 'https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxMdXh1cnklMkMlMjBWZWhpY2xlJTJDJTIwVXBncmFkZXN8ZW58MXx8fHwxNzI0OTA2Mzg0fDA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      id: '4',
      label: 'Premium',
      para: 'Scheduled Services',
      footerText: 'Optimal Performance',
      image: 'https://assets.api.uizard.io/api/cdn/stream/53e27b0a-9adb-48fd-ae84-ed73d5ebf448.png',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textHead}>VIP Concierge Services</Text>
      {vipdata.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate('vip', { serviceId: item.id })} // Navigate to ServiceDetails screen with item ID
          style={styles.card}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.para}>{item.para}</Text>
            <Text style={styles.footerText}>{item.footerText}</Text>
          </View>
        </TouchableOpacity>
      ))}
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
    padding: 20,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    width: '49%',
    position: 'relative',
    marginBottom: 15,
  },
  image: {
    width: '90%',
    height: 150,
    borderRadius: 10,
  },
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  para: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  footerText: {
    color: 'lightgreen',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
