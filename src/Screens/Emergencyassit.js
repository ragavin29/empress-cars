import React, { useState } from 'react';
import { View,Image, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { Picker } from '@react-native-picker/picker';

const EmergencyAssist = ({ navigation }) => {
    const [vehicleType, setVehicleType] = useState('');
    const [licensePlate, setLicensePlate] = useState('');
    const [issueDescription, setIssueDescription] = useState('');
    const [issueType, setIssueType] = useState('');

    const issueOptions = [
        { label: 'Flat Tyre', value: 'flat_tyre' },
        { label: 'Battery Change', value: 'battery_change' },
        { label: 'Towing', value: 'towing' },
    ];
    const handleSubmit = () => {
      
        console.log('Form submitted', { vehicleType, licensePlate, issueDescription, issueType });

     
        navigation.navigate('Payment');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ flexDirection: 'row', marginHorizontal: 12, marginVertical: 18 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Emergency Service Booking</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Vehicle Type</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={vehicleType}
                        onValueChange={(itemValue) => setVehicleType(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Vehicle Type" value="" />
                        <Picker.Item label="Truck" value="truck" />
                        <Picker.Item label="Car" value="car" />
                        <Picker.Item label="Van" value="van" />
                    </Picker>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>License Plate</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter License Plate"
                    placeholderTextColor="#ccc"
                    value={licensePlate}
                    onChangeText={setLicensePlate}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>What is the Issue?</Text>
                <TextInput
                    style={[styles.textInput, styles.issueInput]}
                    placeholder="Describe the issue..."
                    placeholderTextColor="#ccc"
                    value={issueDescription}
                    onChangeText={setIssueDescription}
                    multiline
                    numberOfLines={5}
                />
            </View>

          
            <Text style={styles.label}>Select Issue Type</Text>
            <View style={styles.issueOptionsContainer}>
                {issueOptions.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        style={styles.optionContainer}
                        onPress={() => setIssueType(option.value)}
                    >
                        <View
                            style={[
                                styles.circle,
                                issueType === option.value && styles.selectedCircle,
                            ]}
                        />
                        <Text style={styles.circleLabel}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <Text style={styles.label}>Select Your Location</Text>
            <Image source={require('../assets/images/map.png')} style={styles.map} />
           
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
            >
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
           
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'black',
        paddingHorizontal: 12,
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
    inputContainer: {
        marginVertical: 10,
    },
    label: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        marginBottom: 6,
    },
    textInput: {
        backgroundColor: '#333',
        color: '#fff',
        fontSize: responsiveFontSize(2),
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: 12,
        borderRadius: 22,
    },
    map:{
     alignSelf:'center'
    },
    issueInput: {
        textAlignVertical: 'top',
    },
    pickerContainer: {
        backgroundColor: '#333',
        borderRadius: 22,
    },
    picker: {
        color: '#fff',
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: 12,
    },
    issueOptionsContainer: {
        marginVertical: 20,
        flexDirection:'row'
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    circle: {
        height: responsiveWidth(6),
        width: responsiveWidth(6),
        borderRadius: responsiveWidth(3),
        backgroundColor: '#333',
        marginRight: 12,
    },
    selectedCircle: {
        marginHorizontal:6,
        backgroundColor: '#ebc832',
    },
    circleLabel: {
        color: 'white',
        fontSize: responsiveFontSize(2),
    },
    submitButton: {
        backgroundColor: '#ebc832',
        paddingVertical: responsiveHeight(1.5),
        borderRadius: 22,
        alignItems: 'center',
        marginTop: 20,
    },
    submitButtonText: {
        color: '#000',
        fontSize: responsiveFontSize(2),
    },
});

export default EmergencyAssist;
