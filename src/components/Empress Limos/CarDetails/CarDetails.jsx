import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { responsiveWidth, responsiveHeight ,responsiveFontSize} from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
import { bookCab } from '../../../redux/action';
const CarDetailsScreen = ({ route ,navigation}) => {
  // const { car } = route.params;
  const { carId, car,passangersCount ,  dropoffTime, dropoffLocation, dropoffDate,pickupLocation, pickupDate, pickupTime } = route.params; 

  // Now you have `passengersCount` available in CarList
  console.log('Total Passengers of car detaiks:',passangersCount);
  const [quantity, setQuantity] = useState(1);
  const dispatch=useDispatch();


  const { bookingLoading, bookingError, bookingMessage } = useSelector((state) => state.auth);
  console.log("Booking auh",bookingMessage);
  
  const { user } = useSelector((state) => state.auth);
 console.log("User from auth is booking compo is",user);
useEffect(()=>{
  // if(bookingError){
  //   Alert.alert('Error',bookingError);
  // }
  if(bookingMessage){
    Alert.alert('success',bookingMessage);
  }
},[bookingError,bookingMessage])
  const {
    vehicleImages,
    make,
    model,
    year,
    color,
    fuelType,
    seatingCapacity,
    isWheelchairAccessible,
    isPetsAllowed,
    cabType,
    description,
    basePrice,
    licensePlate,
    specifications,
    rentPerKm,
    contactInfo
  } = car;
  const rentHandler = () => {
    const bookingData = {
      vehicle: carId, 
      quantity,
      passangersCount ,
      totalAmount: car.rentPerKm * quantity,
      pickupLocation,
      pickupDate,
      pickupTime,
      dropoffLocation,
      dropoffDate,
      dropoffTime,
    };
  
    dispatch(bookCab(bookingData));
    navigation.navigate('CarList'); 
  };
  

  const handleRentPress = () => {
    rentHandler();
    navigation.navigate('book', { car }); 
  };

  const totalCost = basePrice * quantity;
 


  return (
    <View style={styles.card}>
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image source={require('../../assets/images/left.png')} style={styles.backButton} />

       </TouchableOpacity> */}
      <Image source={{ uri: vehicleImages[0] }} style={styles.carImage} />
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View>
      <Text style={styles.carName}>{`${make} ${model}`}</Text>
      <Text style={styles.description}>ModelType: {model}</Text>
   </View>
    <View style={{marginTop:19}}>
      <Text style={styles.basePrice}>${rentPerKm} per day</Text>
      <Text style={styles.rentPerKm}>Rent per km: ${rentPerKm}</Text>
 </View>
 </View>
      <View style={styles.specifications}>
        <Text style={styles.specTitle}>Specifications</Text>
        <Text style={styles.description}>* Year: {year}   Color: {color}</Text>
      <Text style={styles.description}>* Fuel Type: {fuelType}</Text>
      <Text style={styles.description}>* Rent per km: ${rentPerKm}</Text>
      <Text style={styles.description}>* seatingCapacity: {seatingCapacity}</Text>
      <Text style={styles.description}>* CarType: {cabType}</Text>
        {/* {Array.isArray(specifications) && specifications.length > 0 ? (
          specifications.map((spec, index) => (
            <View key={index} style={styles.specItem}>
              <View style={styles.specTextContainer}>
                <Icon name="check" size={14} color="#FFC107" />
                <Text style={styles.specText}>{year}</Text>
              </View>
              <Text style={styles.specPrice}>+${spec.price}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.description}>No specifications available.</Text>
        )} */}
      </View>

      <Text style={styles.totalCost}>Total Cost: ${rentPerKm}</Text>

      <View style={styles.quantityContainer}>
        <View style={styles.quantityControl}>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => setQuantity(quantity + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.rentButton} onPress={handleRentPress}>
          <Text style={styles.rentButtonText}>Rent Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactInfo}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Enquire Now?</Text>
        <View style={styles.footer}>
          {contactInfo ? (
            <>
              <View style={{ flexDirection: 'row', gap: 2 }}>
                <Icon name="phone" size={20} color="#FFC107" />
                <Text style={styles.phoneNumber}>{contactInfo.phone || 'N/A'}</Text>
              </View>
              <View style={{ flexDirection: 'row', gap: 2 }}>
                <Icon name="email" size={20} color="#FFC107" />
                <Text style={styles.email}>{contactInfo.email || 'N/A'}</Text>
              </View>
            </>
          ) : (
            <Text style={styles.description}>Contact no: 6745232989/ Email Us: empress@mail.com</Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: '100%',
    backgroundColor: '#1b1b1b',
    padding: 20,
  },
  carImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  carName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ebc832',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 10,
  },
  basePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  rentPerKm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFC107',
    marginBottom: 10,
  },
  specifications: {
    marginVertical: 10,
  },
  specTitle: {
    color: 'white',
    fontSize: 22,
    marginBottom: 10,
  },
  specItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  specTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  specText: {
    color: 'white',
    marginLeft: 5,
  },
  specPrice: {
    color: 'white',
  },
  totalCost: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 5,
  },
  circleButton: {
    backgroundColor: '#FFC107',
    borderRadius: 25,
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 18,
    color: '#fff',
    marginHorizontal: 10,
  },
  rentButton: {
    backgroundColor: '#FFC107',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  rentButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b1b1b',
  },
  contactInfo: {
    marginTop: 10,
    position: 'absolute', 
    bottom: 30,  
    left: 20,
    right: 20,
  },
  phoneNumber: {
    color: '#ffc107',
    fontSize: 14,
  },
  email: {
    color: '#ffc107',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    gap: 34,
  
  },
  backButton: {
    height: responsiveHeight(4),
    width: responsiveWidth(4),
},
headertext: {
    color: '#ebc832',
    fontSize: responsiveFontSize(2.5),
    marginHorizontal: 12,
},
});

export default CarDetailsScreen;
