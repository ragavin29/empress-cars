
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


const Payment = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <Image
                source={require('../assets/images/tick.png')}
                style={styles.tickImage}
            />
            <Text style={styles.successText}>Payment Successful!</Text>
           <Text style={styles.paymenttext}>Thankyou for your Payment.Your transaction has been completed successfully.!</Text>
            
            <View style={styles.transactionCard}>
                <Text style={styles.cardTitle}>Transaction Details</Text>
                <Text style={styles.detailText}>Card Holder: John Doe</Text>
                <Text style={styles.detailText}>Card Number: **** **** **** 1234</Text>
                <Text style={styles.detailText}>Transaction ID: TXN123456789</Text>
                <Text style={styles.detailText}>Amount Paid: $350.00</Text>
                <Text style={styles.detailText}>Date: September 29, 2024</Text>
            </View>

            
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Explore More Services</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    tickImage: {
        width: responsiveWidth(26),
        height: responsiveHeight(12),
        marginBottom: 20,
    },
    successText: {
        fontSize: responsiveFontSize(3),
        fontWeight: 'bold',
        color: '#ebc832',
        marginBottom: 20,
    },
    transactionCard: {
        backgroundColor: '#323232',
        padding: 20,
        borderRadius: 16,
        marginBottom: 30,
        width: '100%',
    },
    cardTitle: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
        color: '#ebc832',
        marginBottom: 10,
    },
    detailText: {
        fontSize: responsiveFontSize(2),
        color: '#fff',
        marginBottom: 8,
    },
    paymenttext:{
        color:'white',
        fontSize:responsiveFontSize(2.2),
        textAlign:'center',
        marginBottom:28,
    },
    button: {
        backgroundColor: '#ebc832',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        alignItems: 'center',
        position: 'absolute',  
        bottom: 30,  
        left: 20,
        right: 20,
    },
    buttonText: {
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        color: '#2c3e50',
    },
});


export default Payment;
