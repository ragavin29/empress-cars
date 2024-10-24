import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, Alert } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const MessageDetail = ({ navigation }) => {
    const [replyMessage, setReplyMessage] = useState('');
    const [sentReply, setSentReply] = useState(null);  // To store and display the sent reply
    const messageContent = `Hello, we wanted to inform you about an important update regarding your service.
    Please note that we have scheduled your service for tomorrow at 10 AM.
    Make sure to confirm the appointment by replying to this message.
    Additionally, check your email for detailed information and instructions. 
    If you have any questions, feel free to reach out to our support team!`;

    const handleSendReply = () => {
        if (replyMessage.trim() === '') {
            Alert.alert('Reply Error', 'Please enter a message before sending.');
            return;
        }
        // Logic to send reply (e.g., API call) can go here
        Alert.alert('Reply Sent', `Your reply: "${replyMessage}" has been sent.`);
        setSentReply(replyMessage);  // Store the sent reply to display it
        setReplyMessage('');  // Clear the input field after sending
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Messages</Text>
            </View>

            <View style={styles.card}>
                <ScrollView>
                    <Text style={styles.cardText}>{messageContent}</Text>

                    {/* Display the sent reply message */}
                    {sentReply && (
                        <View style={styles.replySection}>
                            <Text style={styles.replyHeading}>Your Reply:</Text>
                            <Text style={styles.replyText}>{sentReply}</Text>
                        </View>
                    )}
                </ScrollView>

                {/* Input for typing reply */}
                <TextInput
                    style={styles.input}
                    placeholder="Type your reply..."
                    placeholderTextColor="#999"
                    value={replyMessage}
                    onChangeText={setReplyMessage}
                    multiline
                />

                {/* Send reply button */}
                <TouchableOpacity style={styles.replyButton} onPress={handleSendReply}>
                    <Text style={styles.replyButtonText}>Send Reply</Text>
                </TouchableOpacity>
            </View>
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
    card: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 15,
        marginTop: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    cardText: {
        color: '#ffffff',
        fontSize: responsiveFontSize(2.2),
        lineHeight: 24,
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        padding: 10,
        borderRadius: 8,
        fontSize: responsiveFontSize(2),
        marginTop: 10,
    },
    replyButton: {
        backgroundColor: '#ebc832',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    replyButtonText: {
        color: 'black',
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
    },
    replySection: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#282828',
        borderRadius: 8,
    },
    replyHeading: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.2),
        marginBottom: 8,
    },
    replyText: {
        color: '#fff',
        fontSize: responsiveFontSize(2),
    },
});

export default MessageDetail;
