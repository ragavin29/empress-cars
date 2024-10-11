import { View, Text, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import { Avatar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { profileLinks } from '../data/profileLinks';
import { getUser, logout } from '../redux/action';


export default function Profile() {
  const { user, loading } = useSelector((state) => state.auth);
 console.log("User is",user)
  const [avatar,setAvatar]=useState(user?.profile.url);
  const dispatch=useDispatch();
  const navigation = useNavigation();
  // console.log("User is", user);
  const Email=user?.email;
  console.log("Email is",Email);

const handleLogout=()=>{
dispatch(logout());
navigation.navigate("Login")
}
console.log("User Profile Picture is",user?.profile);


const handleNavigation = (key, route) => {
  console.log(`Attempting to navigate to: ${route}`);
  if (key === 'logout') {
    handleLogout();
  } else {
    navigation.navigate(route);
  }
};




useEffect(() => {
  if (user?.profile) {
    setAvatar(user.profile);
  }
}, [user]);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View  style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon name="left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        
        <View style={styles.profileContainer}>
  {avatar ? (
    <Avatar.Image 
      size={100}
      source={{ uri: avatar }}  
      style={styles.avatar}
    />
  ) : (
    <View>
   
    </View>
  )}
  <Text style={styles.nameText}>{user?.firstName } {user?.lastName}</Text>
</View>

        
        <View  style={styles.linksContainer}>
          {Object.entries(profileLinks).map(([key, { label, icon: IconComponent, color ,icons:IconComponents,route }]) => (
           <TouchableOpacity 
           key={key}
           onPress={() => handleNavigation(key, route)}
         >
              <View style={styles.profileBar}>
                <IconComponent size={30} color={color} />
                <Text style={styles.labelText}>{label}</Text>
                <View style={styles.specialIcon}>
                <IconComponents size={18} color={color} />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    padding: responsiveWidth(5),
    alignItems: 'center', 
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',  
    marginBottom: responsiveHeight(3),
    width: '100%',
  },
  profileContainer: {
    alignItems: 'center', 
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: 'yellow',
  },
  nameText: {
    color: 'white',
    fontSize: 18,  
    fontWeight: 'bold',
    marginTop: responsiveHeight(2),
  },
  linksContainer: {
    marginTop: responsiveHeight(4), 
    width: '100%',
  },
  labelText: {
    marginLeft: 15, 
    color: '#FFFFFF',
    fontSize: 16,  
  },
  fallbackAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveHeight(2), 
    paddingHorizontal: responsiveWidth(3), 
    marginBottom: responsiveHeight(1),  
    backgroundColor: '#1a1a1a', 
    borderRadius: 8, 
    justifyContent: 'space-between'
  },
  specialIcon: {
    alignItems: 'flex-end', 
  },
  initialsText: {
    color: 'white',  // Text color for initials
    fontSize: 40,  // Size of the initials
    fontWeight: 'bold',
  },
});
