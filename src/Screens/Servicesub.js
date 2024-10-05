
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';


const Lvmaintenance = ({ navigation }) => {
    const [selectedPackage, setSelectedPackage] = useState('Basic'); 
    const [selectedQuestion, setSelectedQuestion] = useState(null); 
    const features = {
        Basic: [
            { feature: 'Maintenance Scheduling', available: true },
            { feature: 'Engine Diagnostics', available: true },
            { feature: 'Interior Cleaning', available: false },
            { feature: 'Exterior Polish', available: false }
        ],
        Pro: [
            { feature: 'Maintenance Scheduling', available: true },
            { feature: 'Engine Diagnostics', available: true },
            { feature: 'Interior Cleaning', available: true },
            { feature: 'Exterior Polish', available: false }
        ],
        Premium: [
            { feature: 'Maintenance Scheduling', available: true },
            { feature: 'Engine Diagnostics', available: true },
            { feature: 'Interior Cleaning', available: true },
            { feature: 'Exterior Polish', available: true }
        ]
    };

  
    const questions = [
        "How many months is the service activated?",
        "What types of vehicles are covered?",
        "Is there a cancellation policy?",
        "Can I customize my package?",
      
    ];

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginHorizontal: 12, marginVertical: 18 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/images/left.png')} style={styles.backButton} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Luxury Car Maintenance</Text>
            </View>
            <Text style={styles.headerbelowtext}>
                Discover our exclusive pricing packages tailored for luxury vehicles
            </Text>

            <View style={styles.cardsContainer}>
                {/* Basic Package */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Basic</Text>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(3.5) }}>$12</Text>
                    <Text style={styles.cardDescription}>Complete maintenance for premium cars.</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Choose</Text>
                    </TouchableOpacity>
                </View>

                {/* Pro Package */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Pro</Text>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(3.5) }}>$18</Text>
                    <Text style={styles.cardDescription}>Affordable maintenance with quality service.</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Choose</Text>
                    </TouchableOpacity>
                </View>

                {/* Premium Package */}
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Premium</Text>
                    <Text style={{ color: 'white', fontSize: responsiveFontSize(3.5) }}>$25</Text>
                    <Text style={styles.cardDescription}>Essential maintenance for daily drivers.</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Choose</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.comparetext}>Compare Features</Text>
            <View style={styles.togglecardContainer}>
                <TouchableOpacity onPress={() => setSelectedPackage('Basic')}>
                    <View style={[styles.togglecard, selectedPackage === 'Basic' ? styles.activeCard : {}]}>
                        <Text style={selectedPackage === 'Basic' ? styles.toggletextActive : styles.toggletext}>Basic</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedPackage('Pro')}>
                    <View style={[styles.togglecard, selectedPackage === 'Pro' ? styles.activeCard : {}]}>
                        <Text style={selectedPackage === 'Pro' ? styles.toggletextActive : styles.toggletext}>Pro</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedPackage('Premium')}>
                    <View style={[styles.togglecard, selectedPackage === 'Premium' ? styles.activeCard : {}]}>
                        <Text style={selectedPackage === 'Premium' ? styles.toggletextActive : styles.toggletext}>Premium</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.featureList}>
                {features[selectedPackage].map((item, index) => (
                    <View key={index} style={styles.featureRow}>
                        <Image
                            source={item.available ? require('../assets/images/tick.png') : require('../assets/images/close.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.featureText}>{item.feature}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.horizontalLine} />
            <Text style={styles.comparetext}>Frequently Asked Questions</Text>
            {questions.map((question, index) => (
    <View key={index}>
        <TouchableOpacity
            onPress={() => setSelectedQuestion(selectedQuestion === index ? null : index)}
            style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 23, alignItems: 'center' }}
        >
            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.9) }}>{question}</Text>
            <Image source={require('../assets/images/dropdown.png')} style={styles.dropdown} />
        </TouchableOpacity>
        {selectedQuestion === index && (
            <Text style={{ color: 'white', fontSize: responsiveFontSize(1.6), marginTop: 5 ,marginHorizontal:23}}>
                This is the answer to the question.
            </Text>
        )}
      
        <View style={styles.horizontalLine} />
    </View>
))}

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
    headerbelowtext: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: 24,
        fontSize: responsiveFontSize(2),
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginVertical: 2,
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'black',
        borderRadius: 26,
        justifyContent: 'space-around',
        height: responsiveHeight(22),
        padding: 16,
        marginRight: 12,
        marginVertical: 4,
        width: responsiveWidth(27),
        alignItems: 'center',
    },
    cardTitle: {
        color: '#ebc832',
        fontSize: responsiveFontSize(2.2),
    },
    cardDescription: {
        color: 'white',
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
    comparetext: {
        fontSize: responsiveFontSize(2.6),
        marginHorizontal: 22,
        marginVertical: 8,
        fontWeight: '500',
        color: 'white',
    },
    togglecardContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginVertical: 12,
    },
    togglecard: {
        width: responsiveWidth(28),
        height: responsiveHeight(5),
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        marginHorizontal: 4,
    },
    activeCard: {
        backgroundColor: 'grey',
    },
    toggletext: {
        color: 'white',
        textAlign: 'center',
    },
    toggletextActive: {
        color: '#ebc832',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    featureList: {
        alignSelf: 'center',
        marginHorizontal: 20,
    },
    featureRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    icon: {
        height: responsiveHeight(3),
        width: responsiveWidth(6.3),
        marginRight: 10,
    },
    featureText: {
        color: 'white',
        fontSize: responsiveFontSize(2),
    },
    button: {
        marginTop: 12,
        width: responsiveWidth(22),
        height: responsiveHeight(3.8),
        backgroundColor: '#5856d6',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: responsiveFontSize(1.8),
        fontWeight: '500',
        lineHeight: 20,
    },
    horizontalLine: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    dropdown: {
        width: responsiveWidth(3),
        height: responsiveHeight(2),
        marginLeft: 2,
        marginRight:4
    },
});

export default Lvmaintenance;
