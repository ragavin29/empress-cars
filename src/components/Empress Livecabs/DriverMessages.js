import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

// Sample data for messages
const messagesData = [
    { id: '1', message: 'Trip Delayed: Passenger: Jane Smith has reported that you were late by 5 mins' },
    { id: '2', message: 'Feedback: Passenger: Bob Brown gave you 5 stars for the trip' },
    { id: '3', message: 'Trip Closed: Passenger: Alice Johnson' },
    { id: '4', message: 'Feedback: Passenger: Tom gave you 4 stars for the trip' },
];

const DriverMessages = ({ navigation }) => {
    const renderMessage = ({ item }) => (
        <View style={styles.messageCard}>
            <Text style={styles.messageText}>{item.message}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/left.png')} style={styles.backButton} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Messages</Text>
                </View>
            </View>

            {/* List of messages */}
            <FlatList
                data={messagesData}
                keyExtractor={item => item.id}
                renderItem={renderMessage}
                contentContainerStyle={styles.messagesList}
            />
        </View>
    );
};

// Define your styles
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
    messagesList: {
        marginTop: 20,
    },
    messageCard: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    messageText: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
});

// Make this component available to the app
export default DriverMessages;
