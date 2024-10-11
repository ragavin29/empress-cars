import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCabs } from '../../redux/action';
import Stars from 'react-native-stars';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../styles/Colors';
export default function BookingScreen() {
  const dispatch = useDispatch();
  const { cabs, loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("Dispatching getCabs...");
    dispatch(getCabs());
  }, [dispatch]);

  console.log("Cabs Data in Booking Screen:", cabs);

  const renderCabItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.mainHeading}>My Bookings</Text>
        
        {/* Vehicle Details Section */}
        <View style={styles.detailsCard}>
          <Text style={styles.heading}>Vehicle Details</Text>
          <Image
            source={{ uri: item?.vehicle?.vehicleImages?.[0] || 'https://via.placeholder.com/150' }}
            style={styles.vehicleImage}
          />
          <Text style={styles.itemText}>Make: {item?.vehicle?.make || 'N/A'} {item?.vehicle?.model || 'N/A'}</Text>
          <Text style={styles.itemText}>Pickup: {item?.pickupLocation || 'N/A'}</Text>
          <Text style={styles.itemText}>Dropoff: {item?.dropoffLocation || 'N/A'}</Text>
          <Text style={styles.itemText}>Date: {item?.pickupDate ? new Date(item?.pickupDate).toLocaleDateString() : 'N/A'}</Text>
          <Text style={styles.itemText}>Time: {item?.pickupTime || 'N/A'}</Text>
          <Text style={styles.itemText}>Status: {item?.bookingStatus || 'N/A'}</Text>
          <Text style={styles.itemText}>Total Amount: ₹{item?.totalAmount || 'N/A'}</Text>
        </View>
        
        {/* Driver Details Section */}
        <View style={styles.detailsCard}>
          <Text style={styles.heading}>Driver Details</Text>
          <Image
            source={{ uri: item?.driver?.profile || 'https://via.placeholder.com/150' }}
            style={styles.driverImage}
          />
          <Text style={styles.itemText}>Name: {item?.driver?.salutation || 'N/A'} {item?.driver?.firstName || 'N/A'}</Text>
          <Text style={styles.itemText}>Duty Status: {item?.driver?.dutyStatus || 'N/A'}</Text>
          <Text style={styles.itemText}>Duty Timing: {item?.driver?.dutyTimings || 'N/A'}</Text>
          
          {/* Star Rating for Driver */}
          <View style={styles.ratingContainer}>
            <Text style={styles.itemText}>Rating:</Text>
            <Stars
              default={item?.driver?.ratings || 0}
              count={5}
              half={true}
              starSize={20}
              fullStar={<Icon name={'star'} size={20} style={styles.starStyle} />}
              emptyStar={<Icon name={'star-outline'} size={20} style={styles.starStyle} />}
              halfStar={<Icon name={'star-half-full'} size={20} style={styles.starStyle} />}
            />
          </View>
        </View>
      </View>
    );
  };
  
  
  
  if (loading) {
    return <View style={styles.centered}><Text>Loading...</Text></View>;
  }
  
  if (error) {
    return <View style={styles.centered}><Text>Error: {error}</Text></View>;
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Bookings</Text>
      </View>
      {cabs?.length === 0 ? (
        <View style={styles.centered}>
          <Text>You have no bookings yet.</Text>
        </View>
      ) : (
        <FlatList
          data={cabs}
          keyExtractor={(item) => item._id}
          renderItem={renderCabItem}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    margin: 10,
    backgroundColor: '#000',
    borderRadius: 15,
    shadowColor: COLORS.yellow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsCard: {
    backgroundColor: '#1A1A1A',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#FFD700',
    textAlign: 'center',
  },
  vehicleImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15,
  },
  driverImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  itemText: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  starStyle: {
    color: '#FFD700',
  },
});

