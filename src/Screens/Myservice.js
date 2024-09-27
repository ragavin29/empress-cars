import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const Myservice = ({ navigation }) => {
    const services = [
        {
            id: 1,
            title: 'Rental Cars',
            rating:4/5,
            image: require('../assets/images/event.jpg'),
            status: 'Booked'
        },
        {
            id: 2,
            title: 'Maintenance',
            rating:3/5,
            image: require('../assets/images/event.jpg'),
            status: 'Completed'
        },
        {
            id: 3,
            title: 'Sanitation',
            rating:4/5,
            image: require('../assets/images/event.jpg'),
            status: 'Booked'
        },
        {
            id: 4,
            title: 'Car washing',
            rating:4/5,
            image: require('../assets/images/event.jpg'),
            status: 'Completed'
        },
    ];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                    </TouchableOpacity>
                    <Text style={styles.headertext}>My Services</Text>
                </View>
                <View>
                    <Image source={require('../assets/images/profile.png')} style={styles.personIcon} />
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {services.map((service) => (
                    <View key={service.id} style={styles.card}>
                        <View style={styles.cardContent}>
                            <Image source={service.image} style={styles.cardImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.cardTitle}>{service.title}</Text>
                                <Text style={styles.cardTitle}>Rating: {service.rating}</Text>
                                
                            </View>
                            <View style={styles.cardStatus}>
                            <Text style={styles.statustext}>{service.status}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
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
    headertext: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: 12
    },
    personIcon: {
        height: responsiveHeight(4),
        width: responsiveWidth(8)
    },
    cardsContainer: {
        paddingVertical:45,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#323232',
        borderRadius: 10,
        marginBottom: 20,
        height: responsiveHeight(12),
        width: responsiveWidth(90),
        padding: 10,
        justifyContent: 'center',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardImage: {
        width: responsiveWidth(20),
        height: responsiveHeight(7),
        borderRadius: 10,
        marginRight: 15,
    },
    textContainer: {
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
    cardStatus: {
        backgroundColor:'green',
        borderRadius:5,
        right:0,
        padding:4,
        width:responsiveWidth(21),
        position:'absolute',
        fontSize: responsiveFontSize(1.8),
        color: '#27ae60',
    },
    statustext:{
        color:'white',
        textAlign:'center'
    }
});

export default Myservice;
