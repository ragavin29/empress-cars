import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-paper'; 
import { useDispatch, useSelector } from 'react-redux';
import { getUser, updateUser } from '../../redux/action'; 
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
export default function AccountDetails() {
  const { user, loading, error } = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState(null); 
  const dispatch = useDispatch();
  const [dataFetched, setDataFetched] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user?.email && !dataFetched) {
        try {
          await dispatch(getUser(user.email));
          setDataFetched(true);
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, [dispatch, user?.email, dataFetched]);

  useEffect(() => {
    setAvatar(user.profile || '');
    setPhoneNumber(user.mobile || '');
    setEmail(user.email || '');
    setAddress(user.address || '');
  }, [user]);

  const handleEditAvatar = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      includeBase64: false,
    };
  
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source.uri); 
      }
    });
  };

  const handleSubmit = () => {
    const userData = {
      email,
      mobile: phoneNumber,
      address,
      profile: profileImage, 
    };
  

    dispatch(updateUser(userData));
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="left" size={24} color="yellow" />
        </TouchableOpacity>
        <View style={styles.profileContainer}>
          <View style={styles.avatarContainer}>
            {avatar ? (
              <Image source={{ uri: avatar }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatar, styles.placeholderAvatar]}>
                <Icon name="user" size={50} color="gray" />
              </View>
            )}
            <TouchableOpacity style={styles.editAvatarButton} onPress={handleEditAvatar}>
              <View style={styles.editAvatarIconContainer}>
                <Icon name="edit" size={20} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
        <View style={styles.userNameContainer}>
  <Text style={styles.userNameText}> {user?.firstName} {user?.lastName}</Text>
</View>


        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              style={styles.textInput}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Address</Text>
            <TextInput
              value={address}
              onChangeText={setAddress}
              style={styles.textInput}
              multiline
            />
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Update Profile</Text>
        </TouchableOpacity>

        {/* {loading && <Text style={styles.loadingText}>Updating...</Text>} */}
        {/* {error && <Text style={styles.errorText}>Error: {error}</Text>} */}
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
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: responsiveHeight(3),
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: responsiveHeight(4),
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#FFD700',
  },
  placeholderAvatar: {
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD700',
    padding: responsiveWidth(2),
    borderRadius: 20,
  },
  inputContainer: {
    marginBottom: responsiveHeight(2),
  },
  inputWrapper: {
    marginBottom: responsiveHeight(2),  
    alignItems: 'center',            
  },
  inputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: 'white', 
    color: 'white',            
    paddingVertical: 8,         
    paddingHorizontal: 10,     
    borderRadius: 10,           
    fontSize: 16,             
    height: 40,                
    width: '90%',                     
  },
  submitButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingText: {
    color: '#FFD700',
    textAlign: 'center',
    marginTop: responsiveHeight(2),
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: responsiveHeight(2),
  },
  userNameContainer: {
    alignItems: 'center',   
    marginVertical: 10,   
  },

  userNameText: {
    color: 'white',     
    fontSize: 24,        
    fontWeight: 'bold',   
    textAlign: 'center',  
  },
});
