import React from 'react';
import { View,FlatList, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';

const servicesData = [
  {
    id: '1',
    name: 'Luxury Cars',
    image: require('../assets/images/event.jpg'),
    description: 'Premium luxury cars for hire',
  },
  {
    id: '2',
    name: '24/7 Support',
    image: require('../assets/images/event.jpg'),
    description: 'Round-the-clock support services',
  },
  {
    id: '3',
    name: 'Car Repair',
    image: require('../assets/images/event.jpg'),
    description: 'Quick and reliable car repair services',
  },
];

const renderServiceItem = ({ item }) => (

  <View style={styles.newServiceCard}>
    <Image source={item.image} style={styles.newServiceImage} />
    <Text style={styles.newServiceName}>{item.name}</Text>
    <Text style={styles.newServiceDescription}>{item.description}</Text>
  </View>

);

const Home = ({navigation}) => {
  const { user, loading } = useSelector((state) => state.auth);
  console.log("Use ros",user);
  return (
    <View style={styles.container}>     
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}/>      
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

      
      <View style={styles.cardRow}>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/car.png')}
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
            source={require('../assets/images/wrench.png')}
            style={styles.cardImage} />
          <Text style={{color:'white'}}>EMPRESS</Text>
          <TouchableOpacity style={styles.exploreButton}>
            <Text style={styles.exploreText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.exclusivecard}>
      <Image
            source={require('../assets/images/10-percent.png')}
            style={styles.offerimg}/>
         
          <View style={{flexDirection:'row'}}>  
          <Image
                  source={require('../assets/images/gift.png')}
                  style={styles.giftimg} />
          <Text style={styles.exclusivetext}>EXCLUSIVE OFFERS!!!</Text>
         </View> 
       </View>
       <View style={styles.newlyadded}>
         <Text style={styles.newaddtext}>Newly added Service</Text>
       </View>
       
       <FlatList
        data={servicesData}
        renderItem={renderServiceItem}
        keyExtractor={(item) => item.id}
        vertical
        contentContainerStyle={styles.newServicesList}
      />
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
    color: '#ebc832',
    fontSize: responsiveFontSize(2.5),
  },
  profileImage: {
    width: 33,
    height: 32,
    borderRadius: responsiveHeight(4),
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight:10
    // marginTop: responsiveHeight(5),
  },
  card: {
    backgroundColor: '#323232',
    width: responsiveWidth(29),
    height: responsiveHeight(16),
    borderRadius: 35,
    borderColor: '#ebc832',
    borderWidth: 2,
    marginHorizontal:5,
    alignItems: 'center',
  },
  cardImage: {
    width: responsiveWidth(8),
    height: responsiveHeight(7),
    resizeMode: 'contain',
    // marginTop: responsiveHeight(1),
  },
  exploreButton: {
    backgroundColor: '#ebc832',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: responsiveHeight(1),
  },
  exploreText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.8),
  },
  exclusivecard:{
    backgroundColor: '#ADD8E6',
    width: responsiveWidth(95),
    height: responsiveHeight(12),
    borderRadius: 35,
    borderColor: '#ebc832',
    borderStyle: 'dashed',
    borderWidth: 3,
    marginVertical:15,   
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  },
  giftimg:{
       width:responsiveWidth(14),
       height:responsiveHeight(7),
     
  },
  exclusivetext:{
  fontSize:responsiveFontSize(3),
  color:'black',
  marginVertical:12,
  marginHorizontal:10
  },
  offerimg:{
    position: 'absolute',
    top:0,
    right: 0,
    width:responsiveWidth(10),
    height:responsiveHeight(5)

  },
  newlyadded:{
    marginBottom:20,
    height:responsiveHeight(1)
  },
  newaddtext:{
    color:'#ebc832',
    right:0,
    fontSize:responsiveFontSize(2.5),
    position:'absolute',
   
  },
  newServiceCard: {
    backgroundColor: '#323232',
    width: responsiveWidth(77),
    height: responsiveHeight(15),
    borderRadius: 15,
    marginVertical:10,
    marginRight: responsiveWidth(3),
    alignItems: 'center',
  },
  newServiceImage: {
    width: responsiveWidth(77),
    height: responsiveHeight(8),
    // resizeMode: 'contain',
  },
  newServiceName: {
    color: '#ebc832',
    fontSize: responsiveFontSize(2.5),
    marginVertical: 5,
  },
  newServiceDescription: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    textAlign: 'center',
  },
  newServicesList: {
    paddingVertical: responsiveHeight(2),
  },
});

export default Home;
