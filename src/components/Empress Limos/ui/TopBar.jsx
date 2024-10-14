import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TopBar = ({ onBackPress }) => {
  return (
    <View style={styles.topBarContainer}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
      <Icon name="left" size={24} color="yellow" />
      </TouchableOpacity>
      <Text style={styles.title}>EMPRESS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333', 
    height: 50,
    paddingHorizontal: 10,
    borderTopLeftRadius: 15, 
    borderTopRightRadius: 15,
    
  },
  backButton: {
    padding: 10,
    paddingLeft: 0,
  },
  title: {
    color: '#ffd700', 
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, 
    textAlign: 'right', 
  },
});

export default TopBar;



