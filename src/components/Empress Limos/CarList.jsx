import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import TopBar from './ui/TopBar';

const carData = [
  { id: 1, name: 'Mercedes-Benz S-Class', type: 'Sedan', price: '$200/day', image: 'https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg' },
  { id: 2, name: 'Range Rover Velar', type: 'SUV', price: '$250/day', image: 'https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg' },
  { id: 3, name: 'Ferrari 488 Spider', type: 'Luxury', price: '$500/day', image:  'https://cdn.pixabay.com/photo/2023/02/07/17/49/supercar-7774683_640.jpg'},
];

const CarItem = ({ car, isFavorite, onToggleFavorite }) => (
  <View style={styles.carItem}>
<Image source={{uri: car.image}} style={styles.carImage} />
    <View style={styles.carInfo}>
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.carType}>{`${car.type} - ${car.price}`}</Text>
    </View>
    <TouchableOpacity onPress={() => onToggleFavorite(car.id)} style={styles.favoriteButton}>
      <Text style={[styles.heartIcon, isFavorite && styles.heartIconFilled]}>♥</Text>
    </TouchableOpacity>
  </View>
);

export default function CarList() {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCars = carData.filter(car => 
    car.name.toLowerCase().includes(search.toLowerCase()) ||
    car.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TopBar/>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <TextInput
            style={styles.input}
            value={search}
            placeholder="Search for luxury cars"
            placeholderTextColor="white"
            onChangeText={setSearch}
          />
          <View style={styles.filterButtons}>
            {['Sedan', 'SUV', 'Luxury'].map((type) => (
              <TouchableOpacity 
                key={type} 
                style={styles.filterButton}
                onPress={() => setSearch(type)}
              >
                <Text style={styles.filterButtonText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {filteredCars.map(car => (
            <CarItem 
              key={car.id} 
              car={car} 
              isFavorite={favorites[car.id]} 
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollContainer: {
    padding: responsiveWidth(5),
  },
  input: {
    backgroundColor: '#333',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    width: '100%',
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  filterButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  carItem: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
  },
  carImage: {
    width: responsiveWidth(30),
    height: responsiveHeight(10),
    resizeMode: 'cover',
  },
  carInfo: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  carName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carType: {
    color: 'lightgrey',
    fontSize: 14,
  },
  favoriteButton: {
    padding: 10,
    justifyContent: 'center',
  },
  heartIcon: {
    fontSize: 24,
    color: 'white',
  },
  heartIconFilled: {
    color: 'red',
  },
});