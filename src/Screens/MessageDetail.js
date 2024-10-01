import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const MessageDetail = ({ navigation }) => {
    const messageContent = `Hello, we wanted to inform you about an important update regarding your service.Please note that we have scheduled your service for tomorrow at 10 AM.Make sure to confirm the appointment by replying to this message. 
    Additionally, check your email for detailed information and instructions. 
    
If you have any questions, feel free to reach out to our support team!!.`;

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
                </ScrollView>

                {/* Reply button placed at the bottom */}
                <TouchableOpacity style={styles.replyButton}>
                    <Text style={styles.replyButtonText}>Reply</Text>
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
});

export default MessageDetail;
