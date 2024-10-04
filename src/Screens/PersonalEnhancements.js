import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const PersonalizedEnhancements = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [otherNeeds, setOtherNeeds] = useState('');

    const tags = ['Fuel Pump', 'Engine Oil', 'Battery', 'Paint', 'Wash', 'Clutches', 'Tires'];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginHorizontal: 12, marginVertical: 18 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Personalized Enhancements</Text>
            </View>
            <View style={styles.tagsContainer}>
                {tags.map((tag, index) => (
                    <TouchableOpacity key={index} style={styles.tag}>
                         <Image source={require('../assets/images/car-battery.png')} style={styles.backButton} />
                        <Text style={styles.tagText}>{tag}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.horizontalLine} />

            {/* Input Fields */}
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.label}>Vehicle Name/Type</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your Type"
                    placeholderTextColor="#ccc"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={styles.label}>Vehicle Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your License"
                    placeholderTextColor="#ccc"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <Text style={styles.label}>Specify Other Needs</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Others"
                    placeholderTextColor="#ccc"
                    value={otherNeeds}
                    onChangeText={setOtherNeeds}
                />
            </View>

        
            <TouchableOpacity style={styles.submitButton}>
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
        marginBottom: 6,
    },
    input: {
        width: responsiveWidth(80),
        backgroundColor: '#323232',
        borderRadius: 22,
        paddingVertical: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(4),
        fontSize: responsiveFontSize(2),
        color: '#fff',
        marginBottom: responsiveHeight(2),
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: responsiveHeight(2),
    },
    tag: {
        backgroundColor: '#ebc832',
        borderRadius: 15,
        paddingVertical: responsiveHeight(0.90),
        paddingHorizontal: responsiveWidth(3),
        marginBottom: responsiveHeight(1),
        width: '28%',
        alignItems: 'center',
    },
    tagText: {
        color: 'black',
        fontSize: responsiveFontSize(1.8),
    },
    submitButton: {
        backgroundColor: '#ebc832',
        paddingVertical: 15,
        borderRadius: 30,
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
    },
    submitButtonText: {
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

export default PersonalizedEnhancements;
