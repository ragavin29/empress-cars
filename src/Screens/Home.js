import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';

const Home = ({navigation}) => {
  
  const {user}=useSelector((state)=>state.auth);

  console.log("User from Empress Lgo",user)
  return (
    <View style={styles.container}>
      {/* Logo at the top */}
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />

      {/* Row with Hello Text and Profile Image */}
      <View style={styles.profileContainer}>
        <View>
        <Text style={styles.helloText}>Hello {user?.firstName}</Text>
        <Text style={styles.helloText}>Explore our Services</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
        <Image 
 source={{ uri: user?.profile }}
          style={styles.profileImage}
        />
        </TouchableOpacity>
        
      </View>

      {/* Three Small Cards in a Row with Explore Button */}
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/support.png')}
            style={styles.cardImage}
          />
          <Text style={{color:'white'}}>EMPRESS LIMOS</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Limos')} style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/support.png')}
            style={styles.cardImage}
          />
          <Text style={{color:'white'}}>EMPRESS LIMOS</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/support.png')}
            style={styles.cardImage}
          />
          <Text style={{color:'white'}}>EMPRESS</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: responsiveHeight(5),
  },
  logo: {
    width: responsiveWidth(40),
    height: responsiveHeight(10),
    resizeMode: 'contain',
    marginBottom: responsiveHeight(3),
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: responsiveWidth(85),
    marginBottom: responsiveHeight(5),
  },
  helloText: {
    color: 'white',
    fontSize: responsiveFontSize(3),
  },
  profileImage: {
    width: responsiveWidth(9),
    height: responsiveHeight(5),
    borderRadius: responsiveHeight(4),
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: responsiveWidth(90),
    // marginTop: responsiveHeight(5),
  },
  card: {
    backgroundColor: '#323232',
    width: responsiveWidth(28),
    height: responsiveHeight(20),
    borderRadius: 10,
    borderColor: '#ebc832',
    borderWidth: 2,
    alignItems: 'center',
  },
  cardImage: {
    width: responsiveWidth(12),
    height: responsiveHeight(12),
    resizeMode: 'contain',
    // marginTop: responsiveHeight(1),
  },
  exploreButton: {
    backgroundColor: '#ebc832',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: responsiveHeight(1),
  },
  exploreText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
  },
});

export default Home;
