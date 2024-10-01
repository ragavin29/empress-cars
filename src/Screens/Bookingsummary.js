// Import libraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { responsiveWidth, responsiveHeight, responsiveFontSize } from 'react-native-responsive-dimensions';

// Create a component
const BookingSummary = ({ route, navigation }) => {
    const { car } = route.params;

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Booking Summary</Text>
            </View>

            {/* Booking Summary Card */}
            <View style={styles.summaryCard}>
                <View style={styles.carInfo}>
                    <Image source={{ uri: car.vehicleImages[0] }} style={styles.carImage} />
                    <View style={styles.carDetails}>
                        <Text style={styles.title}>{`${car.make} ${car.model}`}</Text>
                        <Text style={styles.summaryText}>Model : {car.model}</Text>
                        <Text style={styles.summaryText}>Year:  {car.year}</Text>
                        {/* {/* <Text style={styles.summaryText}>Rental Period:3 Days</Text> */}
                        <Text style={styles.summaryText}>Pickup Location:Downtown</Text> 
                      
                    </View>
                 
                </View>
                <Text style={{...styles.cardDetailsTitle,marginLeft:5,marginTop:9}}>Additional Specifications</Text>
                <Text style={styles.description}>* Year: {car.year}   Color: {car.color}</Text>
                <Text style={styles.description}>* Fuel Type: {car.fuelType}</Text>
                <Text style={styles.description}>* Rent per km: ${car.rentPerKm}</Text>
                <Text style={styles.description}>* seatingCapacity: {car.seatingCapacity}</Text>
            </View>

            <Text style={styles.cardDetailsTitle}>Card Details</Text>
            <View style={styles.cardDetails}>
                <TextInput
                    style={styles.input}
                    placeholder="Card Number"
                    placeholderTextColor="#777"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Card Holder"
                    placeholderTextColor="#777"
                />
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="CVV"
                        placeholderTextColor="#777"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Expiry (MM/YY)"
                        placeholderTextColor="#777"
                    />
                </View>
            </View>
            <TouchableOpacity   style={styles.contactButton} onPress={() => navigation.navigate('Payment')} >
  <Text style={styles.contactText}>Proceed to Payment</Text>
</TouchableOpacity>
        </View>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'black',
    },
    summaryCard: {
        backgroundColor: '#323232',
        padding: 15,
        borderRadius: 22,
        marginTop: 20,
        marginBottom: 30,
    },
    carInfo: {
        flexDirection: 'row',
    },
    carImage: {
        width: responsiveWidth(32),
        height: responsiveHeight(16),
        borderRadius: 10,
        marginRight: 15,
    },
    carDetails: {
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    summaryText: {
        fontSize: 16,
        color: '#fff',
    },
    cardDetailsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ebc832',
        marginHorizontal:15,
        marginBottom: 10,
    },
    cardDetails: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 22,
    },
    input: {
        height: 48,
        borderColor: '#ebc832',
        borderWidth: 1,
        backgroundColor: '#323232',
        borderRadius: 16,
        paddingLeft: 15,
        marginBottom: 10,
        color: '#fff', 
       
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
        backgroundColor: '#323232',
    },
    backButton: {
        height: responsiveHeight(4),
        width: responsiveWidth(4),
    },
    headertext: {
        color: '#ebc832',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: 12,
    },
    description: {
        fontSize: 14,
        color: '#ccc',
        marginBottom: 10,
      },
      contactButton: {
        backgroundColor: '#ebc832',
        paddingVertical: 15,
        paddingHorizontal: 4,
        borderRadius: 30,
        alignItems: 'center',
        position: 'absolute', 
        bottom: 30,  
        left: 20,
        right: 20,
        
      },
      contactText: {
        color: 'black',             
        fontSize: 16,               
        fontWeight: 'bold',         
      },
});


export default BookingSummary;
