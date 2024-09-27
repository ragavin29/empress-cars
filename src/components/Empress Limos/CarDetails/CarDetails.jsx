import React from 'react';
import { ScrollView } from 'react-native';
import CarCard from '../ui/CarCard';


const carsData = [
  {
    carImage: 'https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg',
    carName: 'Luxury Sedan Model X',
    description: 'Premium leather interior, advanced technology features.',
    basePrice: 150,
    specifications: [
      { name: 'GPS Navigation', price: 20 },
      { name: 'Bluetooth Connectivity', price: 15 },
      { name: 'Premium Sound System', price: 10 },
    ],
    contactInfo: {
      phone: '+1 800 123 4567',
      email: 'support@luxuryride.com',
    },
  },

];

const CarRentalScreen = () => {
  return (
    <ScrollView>
      {carsData.map((car, index) => (
        <CarCard key={index} {...car} />
      ))}
    </ScrollView>
  );
};

export default CarRentalScreen;
