import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-paper';
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import TopBar from './ui/TopBar';

const CarItem = ({ car, isFavorite, onToggleFavorite, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.carItem}>
    <Image source={{ uri: car.vehicleImages[0] }} style={styles.carImage} />
    <View style={styles.carInfo}>
      <Text style={styles.carName}>{`${car.make} ${car.model}`}</Text>
      <Text style={styles.carType}>{`${car.cabType} - ${car.rentPerKm}$/km`}</Text>
    </View>
    <TouchableOpacity onPress={() => onToggleFavorite(car._id)} style={styles.favoriteButton}>
      <Text style={[styles.heartIcon, isFavorite && styles.heartIconFilled]}>♥</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

export default function CarList({ navigation }) {
  const [search, setSearch] = useState('');
  const [favorites, setFavorites] = useState({});
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://13.235.17.41/api/test/user/cabs/available')
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setCarData(data.availableCabs);
        }
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredCars = carData.filter(car =>
    `${car.make} ${car.model}`.toLowerCase().includes(search.toLowerCase()) ||
    car.cabType.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FFD700" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TopBar />
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
              key={car._id}
              car={car}
              isFavorite={favorites[car._id]}
              onToggleFavorite={toggleFavorite}
              onPress={() => navigation.navigate('Cars', { car })}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color:'white',
    paddingVertical: 10,
    paddingHorizontal: 32,
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
