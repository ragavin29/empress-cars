import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default function EmpressLimos() {
  const navigation = useNavigation();
  const {user}=useSelector((state)=>state.auth);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image source={require('../../assets/images/left.png')} style={styles.backButton} />

       </TouchableOpacity>
        <Text style={styles.logoText}>EMPRESS LIMOS</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Image
 source={{ uri: user?.profile }}
          style={styles.profileImage}
        />
        </TouchableOpacity>
      </View>


      <View style={styles.pickupSection}>
        <Text style={styles.pickupText}>Pick Up Location</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Pickup')} style={styles.dropdown}>
          <Text style={styles.dropdownText}>Luxury hotel, city landmark</Text>
          <Icon name="chevron-down" size={16} color="#000" />
        </TouchableOpacity>
      </View>


      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About US</Text>
        <Text style={styles.aboutText}>
          - Pickup/Drop Limousines:*{'\n'}Interactive map for luxury pickup/drop-off. Customize your ride with amenities.
        </Text>
      </View>

      <View style={styles.serviceSection}>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="plane" size={40} color="#FFC107" />
          <Text style={styles.buttonText}>Flights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="ship" size={40} color="#FFC107" />
          <Text style={styles.buttonText}>Yachts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="truck" size={40} color="#FFC107" />
          <Text style={styles.buttonText}>Trucks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="anchor" size={40} color="#FFC107" />
          <Text style={styles.buttonText}>Boats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="car" size={40} color="#FFC107" />
          <Text style={styles.buttonText}>Wedding Cars</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceButton}>
          <Icon name="taxi" size={40} color="#FFC107" />
          <Text style={styles.buttonText}>Rental Cars</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity   style={styles.contactButton} >
  <Text style={styles.contactText}>Contact Us</Text>
</TouchableOpacity>

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: responsiveHeight(3),
  },
  profileImage: {
    width: responsiveWidth(9),
    height: responsiveHeight(5),
    borderRadius: responsiveHeight(4),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 20,
    color: '#FFC107',
    fontWeight: 'bold',
  },
  profileIcon: {
    padding: 10,
  },
  pickupSection: {
    marginTop: 20,
  },
  pickupText: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
  },
  aboutSection: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
  },
  aboutTitle: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#CCC',
  },
  serviceSection: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  serviceButton: {
    width: '45%',
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 22,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 14,
  },
  backButton: {
    height: responsiveHeight(4),
    width: responsiveWidth(4),
},
contactButton: {
  backgroundColor: '#FFC107',  
  borderRadius: 30,      
  paddingVertical: 12,        
  paddingHorizontal: 24,      
  alignItems: 'center',      
  marginTop: 20,
},
contactText: {
  color: 'black',             
  fontSize: 16,               
  fontWeight: 'bold',         
},
});
