import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="yellow" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for a service or assistance"
        placeholderTextColor="#888"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10, 
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
});

export default SearchBar;
