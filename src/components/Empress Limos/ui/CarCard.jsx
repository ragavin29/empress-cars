import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
const CarCard = ({
  carImage,
  carName,
  description,
  basePrice,
  specifications,
  contactInfo,
}) => {
  const [quantity, setQuantity] = useState(1);
  const totalCost = basePrice + specifications.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={styles.card}>
      <Image source={{ uri: carImage }} style={styles.carImage} />
      <Text style={styles.carName}>{carName}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.basePrice}>${basePrice} per day</Text>

      <View style={styles.specifications}>
  <Text style={styles.specTitle}>Specifications</Text>
  {specifications.map((spec, index) => (
    <View key={index} style={styles.specItem}>
      <View style={styles.specTextContainer}>
        <Icon name="check" size={14} color="#FFC107" /> 
        <Text style={styles.specText}>{spec.name}</Text>
      </View>
      <Text style={styles.specPrice}>+${spec.price}</Text>
    </View>
  ))}
</View>


      <Text style={styles.totalCost}>Total Cost: ${totalCost}</Text>

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

  <TouchableOpacity style={styles.rentButton}>
    <Text style={styles.rentButtonText}>Rent Now</Text>
  </TouchableOpacity>
</View>


      <View style={styles.contactInfo}>
        <Text style={{color:'white',fontWeight:'bold'}}>Enquire Now?</Text>
        <View style={styles.footer}>

            <View style={{flexDirection:'row' , gap:2}}>
            <Icon name="phone" size={20} color="#FFC107" />
            <Text style={styles.phoneNumber}>{contactInfo.phone}</Text>
            </View>
            <View style={{flexDirection:'row',gap:2}}>
     <Icon name="email" size={20} color="#FFC107" />
     <Text style={styles.email}>{contactInfo.email}</Text>
     </View>
        
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1b1b1b',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  carImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
  specifications: {
    marginVertical: 10,
  },
  specTitle: {
    color: 'white',
    fontSize: 18,
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
 
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#ffc107',
    padding: 5,
    borderRadius: 5,
    color: '#1b1b1b',
  },
  quantity: {
    fontSize: 16,
    color: '#fff',
  },
  rentButton: {
    backgroundColor: '#ffc107',
    padding: 12,
    borderRadius: 24,
    marginVertical: 10,

  },
  rentButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1b1b1b',
    textAlign: 'center',
  },
  contactInfo: {
    marginTop: 10,
  },
  phoneNumber: {
    color: '#ffc107',
    fontSize: 14,
  },
  email: {
    color: '#ffc107',
    fontSize: 14,
  },
  footer:{
    flexDirection:'row',
    gap:34,
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
});

export default CarCard;
