import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const VIPservices = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <View style={styles.container}>
           <View style={{ flexDirection: 'row', marginHorizontal: 12, marginVertical: 18 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Luxury Car Maintenance</Text>
            </View>
            <Text style={styles.headerbelowtext}>
                Discover our exclusive service packages tailored for luxury vehicles/Maintenace
            </Text>
            <View style={styles.horizontalLine} />
            <View style={{alignSelf:'center'}}>
            <Text style={styles.label}>Vehicle Name/Type</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Type"
                placeholderTextColor="#ccc"
                value={name}
                onChangeText={setName}
            />
              <Text style={styles.label}>Vehicle Number</Text>
            {/* Email Input */}
            <TextInput
                style={styles.input}
                placeholder="Enter your License"
                placeholderTextColor="#ccc"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
  <Text style={styles.label}>Special Request</Text>
            {/* Message Input */}
            <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Enter your Request for Maintenance"
                placeholderTextColor="#ccc"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={5}
            />
</View>
            {/* Submit Button */}
            <TouchableOpacity
                style={styles.submitButton}
                
            >
                <Text style={styles.submitButtonText}>Submit Enquiry</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
    },
    headerbelowtext: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: 24,
        fontSize: responsiveFontSize(2.3),
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
    headerbelowtext: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: 24,
        fontSize: responsiveFontSize(2.4),
    },
    label: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        marginBottom: 6,
    },
    input: {
        width: responsiveWidth(80),
        backgroundColor: '#323232',
        borderRadius: 22,
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(4),
        fontSize: responsiveFontSize(2),
        color: '#000',
        marginBottom: responsiveHeight(2),
    },
    messageInput: {
        textAlignVertical: 'top',
    },
  
    submitButton: {
        backgroundColor: '#ebc832',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: 'center',
        position: 'absolute',  
        bottom: 30,  
        left: 20,
        right: 20
    },
    submitButtonText: {
        textAlign:'center',
        color: '#000',
        fontSize: responsiveFontSize(2),
    },
    horizontalLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 18,
        marginHorizontal: 20,
    },
});

export default VIPservices;
