import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Header from './Header'; 
import Emergency from './Emergency'; 
import Categories from './Categories';
import VIPServices from './VIPServices';
import ServiceSlider from './ServiceSlider';
import SearchBar from './SearchBar';
import ServiceCard from './ServiceCard';

export default function ServiceScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Header />
      <SearchBar/>
      <ServiceSlider/>
      <Emergency />
      <ServiceCard/>
      <VIPServices />
      <Categories />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    flexGrow: 1, 
    paddingBottom: 20, 
  },
});
