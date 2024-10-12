import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Calendar } from 'react-native-calendars';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const Hospitalitysub = ({ navigation }) => {
    const [selectedService, setSelectedService] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [numStaff, setNumStaff] = useState(1); 
    const [additionalStaff, setAdditionalStaff] = useState(0); 

    const services = [
        { label: 'Event Planning', value: 'event_planning' },
        { label: 'Sanitation', value: 'sanitation' },
        { label: 'Housekeeping', value: 'housekeeping' },
        { label: 'Car Wash', value: 'car_wash' },
        { label: 'Landscaping', value: 'landscaping' },
        { label: 'Gardening', value: 'gardening' },
    ];

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const incrementStaff = () => setNumStaff(numStaff + 1);
    const decrementStaff = () => numStaff > 1 && setNumStaff(numStaff - 1);
    
    const incrementAdditionalStaff = () => setAdditionalStaff(additionalStaff + 1);
    const decrementAdditionalStaff = () => additionalStaff > 0 && setAdditionalStaff(additionalStaff - 1);
    const handleSubmit = () => {   
        navigation.navigate('Payment');
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
          
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Enter Details</Text>
            </View>

           
            <Text style={styles.label}>Select Your Service</Text>
            <RNPickerSelect
                onValueChange={(value) => setSelectedService(value)}
                items={services}
                placeholder={{ label: 'Select a service...', value: null }}
                style={{
                    inputAndroid: styles.picker,
                    inputIOS: styles.picker,
                }}
            />

          
            <Text style={styles.label}>Pick a Date</Text>
            <Calendar
                onDayPress={onDayPress}
                markedDates={{
                    [selectedDate]: {
                        selected: true,
                        marked: true,
                        selectedColor: '#ebc832',
                    },
                }}
                theme={{
                    selectedDayBackgroundColor: '#ebc832',
                    todayTextColor: '#ebc832',
                    arrowColor: '#ebc832',
                }}
            />

   
            <View style={styles.card}>
                <Text style={styles.cardText}>Number of Staffs Needed</Text>
                
           
                <View style={styles.staffCounter}>
                    <Text style={styles.staffLabel}>Main Staff:</Text>
                    <View style={styles.counterButtons}>
                        <TouchableOpacity style={styles.counterButton} onPress={decrementStaff}>
                            <Text style={styles.counterButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{numStaff}</Text>
                        <TouchableOpacity style={styles.counterButton} onPress={incrementStaff}>
                            <Text style={styles.counterButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

       
                <View style={styles.staffCounter}>
                    <Text style={styles.staffLabel}>Additional Staff:</Text>
                    <View style={styles.counterButtons}>
                        <TouchableOpacity style={styles.counterButton} onPress={decrementAdditionalStaff}>
                            <Text style={styles.counterButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.counterValue}>{additionalStaff}</Text>
                        <TouchableOpacity style={styles.counterButton} onPress={incrementAdditionalStaff}>
                            <Text style={styles.counterButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
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
    label: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        marginVertical: 15,
    },
    picker: {
        fontSize: responsiveFontSize(2),
        borderWidth: 3,
        borderColor: 'red',
        color: 'white',
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 22,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 20,
        marginVertical: 15,
    },
    cardText: {
        color: 'white',
        fontSize: responsiveFontSize(2.2),
        marginBottom: 10,
        textAlign: 'center',
    },
    staffCounter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    staffLabel: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        flex: 1,
    },
    counterButtons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterButton: {
        backgroundColor: '#ebc832',
        width: responsiveWidth(6.5),
        height: responsiveHeight(3.2),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginHorizontal: 5, 
    },
    counterButtonText: {
        fontSize: responsiveFontSize(2.5),
        color: 'black',
        alignItems:'center'
    },
    counterValue: {
        color: 'white',
        fontSize: responsiveFontSize(2.5),
        marginHorizontal: 10, 
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

export default Hospitalitysub;
