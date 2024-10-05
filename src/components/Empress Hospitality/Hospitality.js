import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const Hospitality = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const services = [
        { name: 'Event Planning', image: require('../../assets/images/support.png') },
        { name: 'Sanitation', image: require('../../assets/images/sanitizer.png') },
        { name: 'Housekeeping', image: require('../../assets/images/support.png') },
        { name: 'Car Wash', image: require('../../assets/images/sanitizer.png') },
        { name: 'Landscaping', image: require('../../assets/images/support.png') },
        { name: 'Gardening', image: require('../../assets/images/sanitizer.png') },
    ];

    const exclusiveOffers = [
        { name: 'Discounted Car Wash', },
        { name: '50% Off Housekeeping', },
        { name: 'Free Garden Consultation', },
    ];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Empress Hospitality</Text>
            </View>
            <Text style={styles.label}>Hospitality and Maintenance</Text>
            
           
            <View style={styles.searchContainer}>
                <Image source={require('../../assets/images/search.png')} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Search..."
                    placeholderTextColor="#999"
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                />
            </View>

            <ScrollView>
            
                <View onPress={()=>navigation.navigate('Hospitalitysub')} style={styles.cardsContainer} >
                    {services.map((service, index) => (
                        <TouchableOpacity key={index} style={styles.card} onPress={()=>navigation.navigate('Hospitalitysub')}>
                            <Image source={service.image} style={styles.cardImage} />
                            <Text style={styles.cardText}>{service.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Exclusive Offers</Text>
                <View style={styles.offersContainer}>
                    {exclusiveOffers.map((offer, index) => (
                        <View key={index} style={styles.offerCard}>
                         
                            <Text style={styles.offerText}>{offer.name}</Text>
                            <TouchableOpacity style={styles.bookNowButton}>
                                <Text style={styles.bookNowText}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
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
        marginHorizontal: 12,
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#323232',
        borderRadius: 22,
        marginTop: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    searchIcon: {
        width: responsiveWidth(5),
        height: responsiveHeight(2.3),
        tintColor: '#999',
        marginRight: 10,
    },
    searchBar: {
        fontSize: responsiveFontSize(2),
        color: 'black',
        flex: 1,
    },
    cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderWidth: 6,
        borderColor: '#ebc832',
        borderRadius: 22,
        width: responsiveWidth(28),
        alignItems: 'center',
        paddingVertical: 15,
        marginBottom: 15,
    },
    cardImage: {
        width: responsiveWidth(5),
        height: responsiveHeight(2.9),
        marginBottom: 10,
    },
    cardText: {
        color: 'black',
        fontSize: responsiveFontSize(1.7),
        textAlign: 'center',
    },
    label: {
        color: 'white',
        marginVertical: 25,
        alignSelf: 'flex-start',
        fontSize: responsiveFontSize(2.5),
        marginBottom: 6,
    },
    sectionTitle: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        marginTop: 20,
        marginBottom: 10,
    },
    offersContainer: {
        marginTop: 10,
    },
    offerCard: {
        backgroundColor: '#323232',
        // borderWidth: 6,
        // borderColor: '#ebc832',
        flexDirection:'row',
        justifyContent:'space-around',
        borderRadius: 22,
        padding: 15,
        marginBottom: 15,
        alignItems: 'center',
        width: responsiveWidth(90),
        alignSelf: 'center',
    },

    offerText: {
        fontSize: responsiveFontSize(2),
        color: '#D3D3D3',
        marginBottom: 10,
        textAlign: 'center',
    },
    bookNowButton: {
        backgroundColor: '#5856d6',
        paddingVertical: 5,
       
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    bookNowText: {
        color: 'black',
        fontSize: responsiveFontSize(1.8),
    },
});

export default Hospitality;
