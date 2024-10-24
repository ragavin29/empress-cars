// Import libraries
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Switch, TouchableOpacity, FlatList, Modal, TextInput, Button } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


const upcomingTrips = [
    { id: '1', passengerName: 'Alice Johnson', pickupLocation: '456 Elm St, City Name',fare:'$600',destination:'Italy'},
    { id: '2', passengerName: 'Bob Brown', pickupLocation: '789 Pine Ave, City Name',fare:'$600',destination:'Italy'},
];

const LiveCabsHome = ({ navigation }) => {
    const [isOnline, setIsOnline] = useState(false); 
    const [isChatModalVisible, setChatModalVisible] = useState(false); 
    const [isSuccessPopupVisible, setSuccessPopupVisible] = useState(false);
    const [tripDetails, setTripDetails] = useState({}); 
    const [messages, setMessages] = useState([]); 
    const [newMessage, setNewMessage] = useState(''); 

    const toggleSwitch = () => setIsOnline(previousState => !previousState);

    const handleAcceptTrip = (trip) => {
        setTripDetails(trip); 
        setSuccessPopupVisible(true);
    };

    const renderUpcomingTrip = ({ item }) => (
        <View style={styles.tripRequestCard}>
            <Text style={styles.passengerName}>{item.passengerName}</Text>
            <Text style={styles.pickupLocation}>Pickup: {item.pickupLocation}</Text>
            <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.acceptButton} onPress={() => handleAcceptTrip(item)}>
                    <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rejectButton}>
                    <Text style={styles.buttonText}>Reject</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    return (
        <ScrollView style={styles.container}>
          
            <View style={styles.headerContainer}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/left.png')} style={styles.backButton} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Drivers Page</Text>
                </View>
                <TouchableOpacity style={styles.emailIconContainer} onPress={() => navigation.navigate('Drivermsgs')}>
                    <Image source={require('../../assets/images/email.png')} style={styles.emailicon} />
                </TouchableOpacity>
            </View>

          
            <View style={styles.profileContainer}>
                <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.profileName}>John Doe</Text>
                    <Text style={styles.ratings}>Ratings: 4.8/5</Text>
                </View>
                <View style={styles.toggleContainer}>
                    <Text style={styles.toggleText}>{isOnline ? 'Online' : 'Offline'}</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isOnline ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={toggleSwitch}
                        value={isOnline}
                    />
                </View>
            </View>

          
            <View style={styles.statsCard}>
                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>₹ 2,500</Text>
                        <Text style={styles.statLabel}>Earnings Today</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statLabel} onPress={() => navigation.navigate('PreviousTrip')}>Previous Trips</Text>
                    </View>
                </View>
                <View style={styles.statsRow}>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>45 km</Text>
                        <Text style={styles.statLabel}>Km Traveled</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statValue}>18</Text>
                        <Text style={styles.statLabel}>Total Trips</Text>
                    </View>
                </View>
            </View>

            {/* Ongoing trip card */}
            <View style={styles.tripCard}>
                <View style={styles.tripHeader}>
                    <Text style={styles.tripText}>Ongoing Trip</Text>
                </View>
                <Text style={styles.userName}>Passenger: Jane Smith</Text>
                <Text style={styles.location}>Location: 123 Main St, City Name</Text>

                {/* Map placeholder */}
                <View style={styles.mapContainer}>
                    <Image
                        source={require('../../assets/images/map.png')} // Replace with your map image or MapView
                        style={styles.mapImage}
                    />
                </View>

              
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.callButton}>
                        <Image source={require('../../assets/images/phone-call.png')} style={styles.icon} />
                        <Text style={styles.buttonText}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatButton} onPress={() => setChatModalVisible(true)}>
                        <Image source={require('../../assets/images/email.png')} style={styles.icon} />
                        <Text style={styles.buttonText}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Upcoming Trip Requests */}
            <Text style={styles.upcomingTripsHeader}>Upcoming Trip Requests</Text>
            <FlatList
                data={upcomingTrips}
                keyExtractor={item => item.id}
                renderItem={renderUpcomingTrip}
                contentContainerStyle={styles.upcomingTripsList}
            />

            {/* Chat Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isChatModalVisible}
                onRequestClose={() => setChatModalVisible(false)}
            >
                <View style={styles.modalContent}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalHeaderText}>Chat with Passenger</Text>
                        <TouchableOpacity onPress={() => setChatModalVisible(false)}>
                            <Image source={require('../../assets/images/close.png')} style={styles.closeButton} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView>
                        {messages.map((msg, index) => (
                            <Text key={index} style={styles.chatMessage}>{msg}</Text>
                        ))}
                    </ScrollView>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Type your message..."
                            value={newMessage}
                            onChangeText={setNewMessage}
                        />
                        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
                            <Text style={styles.sendButtonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* Success Popup Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={isSuccessPopupVisible}
                onRequestClose={() => setSuccessPopupVisible(false)}
            >
                <View style={styles.popupContent}>
                {/* <TouchableOpacity onPress={() => setSuccessPopupVisible(false)}>
                            <Image source={require('../../assets/images/close.png')} style={styles.endButton} />
                        </TouchableOpacity> */}
                <Image source={require('../../assets/images/tick.png')} style={styles.Tickimg} />
                    <View style={styles.popupHeader}>
                    {/* <Image source={require('../../assets/images/tick.png')} style={styles.closeButton} /> */}
                        <Text style={styles.popupHeaderText}>Success! Trip Accepted</Text>
                        
                    </View>
                  
                    <Text style={styles.popupDetails}>Passenger:  {tripDetails.passengerName}</Text>
                    <Text style={styles.popupDetails}>Pickup:    {tripDetails.pickupLocation}</Text>
                    <Text style={styles.popupDetails}>Destination:   {tripDetails.destination}</Text>
                    <Text style={styles.popupDetails}>Fare:   {tripDetails.fare}</Text>
                </View>
            </Modal>
        </ScrollView>
    );
};

// Styles
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
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
    },
    profileImage: {
        height: responsiveHeight(5),
        width: responsiveWidth(9),
        borderRadius: 50,
    },
    profileName: {
        color: '#fff',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    ratings: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2),
    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 'auto',
    },
    toggleText: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
        marginRight: 10,
    },
    statsCard: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 20,
        marginTop: responsiveHeight(2),
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: responsiveHeight(2),
    },
    statBox: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    statValue: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    statLabel: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
    tripCard: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 20,
        marginTop: responsiveHeight(2),
    },
    tripHeader: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: responsiveHeight(2),
    },
    tripText: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.5),
    },
    userName: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
    location: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
    mapContainer: {
        height: responsiveHeight(20),
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: responsiveHeight(2),
    },
    mapImage: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    callButton: {
        flex: 1,
        backgroundColor: '#00bfff',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'center',
        paddingVertical: 8,
        alignItems: 'center',
        marginRight: 10,
    },
    chatButton: {
        flex: 1,
        backgroundColor: '#32cd32',
        borderRadius: 10,
        paddingVertical: 8, 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center', 
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5, 
    },
    buttonText: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
    upcomingTripsHeader: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.5),
        marginTop: responsiveHeight(3),
    },
    upcomingTripsList: {
        marginTop:10,
        paddingBottom: responsiveHeight(10),
    },
    tripRequestCard: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    passengerName: {
        color: '#fff',
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
    },
    pickupLocation: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    acceptButton: {
        backgroundColor: '#32cd32',
        borderRadius: 5,
        padding: 10,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
    },
    rejectButton: {
        backgroundColor: '#ff4c4c',
        borderRadius: 5,
        padding: 10,
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
    modalContent: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
        marginTop: 'auto',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    modalHeaderText: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    closeButton: {
        marginLeft:'auto',
        height: 30,
        width: 30,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailIconContainer: {
       
        marginLeft: 'auto',
    },
    
    emailicon:{
        height: 30,
        width: 30,
       
    },
    chatMessage: {
        fontSize: responsiveFontSize(2),
        marginVertical: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#ebc832',
        borderRadius: 5,
        padding: 10,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
    popupContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    popupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    popupHeaderText: {
        fontSize: responsiveFontSize(2.5),
        color: '#fff',
        fontWeight: 'bold',
    },
    popupText: {
        fontSize: responsiveFontSize(2),
        color: '#fff',
        marginBottom: 10,
    },
    popupDetails: {
        alignItems:'flex-start',
        fontSize: responsiveFontSize(2),
        color: '#fff',
    },
    endButton: {
        width: 24,
        height: 24,
    },
    Tickimg:{
        width: responsiveWidth(20),
        height: responsiveHeight(10),  
    }
});

export default LiveCabsHome;
