//import libraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


const previousTrips = [
    { id: '1', date: '2024-10-10', pickup: '123 Main St', destination: '456 Elm St', fare: '₹300' },
    { id: '2', date: '2024-10-09', pickup: '789 Pine Ave', destination: '321 Oak Dr', fare: '₹450' },
    { id: '3', date: '2024-10-08', pickup: '654 Maple St', destination: '987 Cedar Blvd', fare: '₹275' },
];


const PreviousTrip = ({ navigation }) => {
    const renderTrip = ({ item }) => (
        <View style={styles.tripCard}>
            <Text style={styles.tripDate}>Date: {item.date}</Text>
            <Text style={styles.tripDetail}>Pickup: {item.pickup}</Text>
            <Text style={styles.tripDetail}>Destination: {item.destination}</Text>
            <Text style={styles.tripFare}>Fare: {item.fare}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
           
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/left.png')} style={styles.backButton} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Previous Trips</Text>
                </View>
            </View>

           
            <FlatList
                data={previousTrips}
                keyExtractor={item => item.id}
                renderItem={renderTrip}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    backButton: {
        height: responsiveHeight(4),
        width: responsiveWidth(4),
    },
    headerText: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: 12,
    },
    listContainer: {
        paddingTop: responsiveHeight(2),
    },
    tripCard: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 20,
        marginBottom: responsiveHeight(2),
    },
    tripDate: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
    },
    tripDetail: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(1),
    },
    tripFare: {
        color: '#32a852',
        fontSize: responsiveFontSize(2),
        marginTop: responsiveHeight(1),
    },
});


export default PreviousTrip;
