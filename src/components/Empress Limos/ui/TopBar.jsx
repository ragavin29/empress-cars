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

      <Text style={styles.headingStyle}>EMPRESS</Text>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: responsiveWidth(5),
    marginTop: 14,
    backgroundColor: '#71797E', 
    padding:6
  },
  backButton: {

  },
  headingStyle: {
    fontSize: 24,
    color: '#FFD700',   
    fontWeight: 'bold', 
    textAlign: 'left',
  },
});
