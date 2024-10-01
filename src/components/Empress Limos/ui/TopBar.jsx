import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';

const TopBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="left" size={24} color="yellow" />
      </TouchableOpacity>

      <Text style={styles.headingStyle}>EMPRESS Limos</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
    marginTop: 14,
    backgroundColor: 'black', 
    padding:6
  },
  backButton: {

  },
  headingStyle: {
    fontSize: 22,
    color: '#FFD700',   
    fontWeight: 'bold', 
    marginHorizontal:20
   
  },
});
