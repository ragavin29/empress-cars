import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const Messages = ({ navigation }) => {
    const notifications = [
        { id: 1, text: 'New service request available' },
        { id: 2, text: 'Your service is completed' },
        { id: 3, text: 'Payment pending' },
        { id: 4, text: 'Exclusive offers click to know' },
        { id: 5, text: 'Check your upcoming services' },
        { id: 6, text: 'Booking was successful Thanks' },
        { id: 7, text: 'Check your upcoming services' },
    ];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Notifications</Text>
            </View>

            <ScrollView contentContainerStyle={styles.cardsContainer}>
                {notifications.map((notification) => (
                    <View key={notification.id} style={styles.card} >
                        <Image source={require('../assets/images/bell.png')} style={styles.bellIcon} />
                        <Text onPress={() => navigation.navigate('MsgDetail')} style={styles.cardText}>{notification.text}</Text>
                        <Image source={require('../assets/images/right-arrow.png')} style={styles.arrowIcon} />
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
        marginHorizontal: 12,
    },
    cardsContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#1c1c1c', 
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 15,
        width: responsiveWidth(90),
        height: responsiveHeight(10),
    },
    bellIcon: {
        width: responsiveWidth(6),
        height: responsiveHeight(3),
        marginRight: 15,
    },
    cardText: {
        color: '#ffffff',
        fontSize: responsiveFontSize(2),
        flex: 1,
    },
    arrowIcon: {
        width: responsiveWidth(2),
        height: responsiveHeight(2),
    },
});

export default Messages;
