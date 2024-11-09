import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image,StyleSheet, ScrollView, Modal, Button } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { useDispatch, useSelector } from 'react-redux';
const RideBookingScreen= () => {
  const pickupLocation = '123 Main St, Cityville';
  const dropoffLocation = '123 Main St, Cityville';
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [dropoffTime, setDropoffTime] = useState(null);
  // const [dropoffLocation, setDropoffLocation] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isDropoffDatePickerVisible, setDropoffDatePickerVisibility] = useState(false);
  const [isDropoffTimePickerVisible, setDropoffTimePickerVisibility] = useState(false);
  const [guestModalVisible, setGuestModalVisible] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(1);
  const dispatch=useDispatch();
//Calling functions//






const navigation=useNavigation();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (selectedTime) => {
    setTime(selectedTime);
    hideTimePicker();
  };
  //drop
  const showDropoffDatePicker = () => {
    setDropoffDatePickerVisibility(true);
  };

  const hideDropoffDatePicker = () => {
    setDropoffDatePickerVisibility(false);
  };

  const handleConfirmDropoffDate = (selectedDate) => {
    setDropoffDate(selectedDate);
    hideDropoffDatePicker();
  };

  const showDropoffTimePicker = () => {
    setDropoffTimePickerVisibility(true);
  };

  const hideDropoffTimePicker = () => {
    setDropoffTimePickerVisibility(false);
  };

  const handleConfirmDropoffTime = (selectedTime) => {
    setDropoffTime(selectedTime);
    hideDropoffTimePicker();
  };

  const toggleGuestModal = () => {
    setGuestModalVisible(!guestModalVisible);
  };
  const handlePress = () => {
    toggleGuestModal(); // Closes the modal
    const  passangersCount = adults + children + pets; // Calculate total passengers
    console.log('Total Passengers: from handle press',passangersCount); 
    navigation.navigate('CarList', {
      pickupLocation,
      pickupDate: date,
      pickupTime: time,
      dropoffLocation,
      dropoffDate,
      dropoffTime,
      passangersCount, // Pass total passengers count
    });
  };
  
  // console.log('Total Passengers: Afterhandle press',passangersCount); 


  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Map Icon & Pickup Section */}
      <View style={styles.pickupSection}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
         <Image source={require('../../assets/images/left.png')} style={styles.backButton} />

       </TouchableOpacity>
       <View style={{marginHorizontal:18}}>
        <Text style={styles.label}>Select your pick-up</Text>
        <Text style={styles.subLabel}>Luxury hotel or address</Text>
      </View>
       </View>
        {/* Place Map Icon Component */}
        {/* <View style={styles.mapMock} />
          <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
        <Marker coordinate={{ latitude: 37.78325, longitude: -122.4294 }} />
        <Marker coordinate={{ latitude: 37.78885, longitude: -122.4394 }} />
      </MapView> */}
      </View>
      <Image source={require('../../assets/images/map.png')} style={styles.map} />
      <TouchableOpacity onPress={showDatePicker} style={styles.dateButton}>
        <Text style={styles.label}>Pick-up</Text>
        <Text style={styles.subLabel}>{date ? date.toDateString() : "Select Date"}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={hideDatePicker}
      />


      <TouchableOpacity onPress={showTimePicker} style={styles.dateButton}>
        <Text style={styles.label}>Pick-up Time</Text>
        <Text style={styles.subLabel}>{time ? time.toLocaleTimeString() : "Select Time"}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmTime}
        onCancel={hideTimePicker}
      />
{/* //Drop location// */}
<TouchableOpacity onPress={showDropoffDatePicker} style={styles.dateButton}>
        <Text style={styles.label}>Drop-off Date</Text>
        <Text style={styles.subLabel}>{dropoffDate ? dropoffDate.toDateString() : "Select Date"}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDropoffDatePickerVisible}
        mode="date"
        onConfirm={handleConfirmDropoffDate}
        onCancel={hideDropoffDatePicker}
      />

      <TouchableOpacity onPress={showDropoffTimePicker} style={styles.dateButton}>
        <Text style={styles.label}>Drop-off Time</Text>
        <Text style={styles.subLabel}>{dropoffTime ? dropoffTime.toLocaleTimeString() : "Select Time"}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDropoffTimePickerVisible}
        mode="time"
        onConfirm={handleConfirmDropoffTime}
        onCancel={hideDropoffTimePicker}
      />

      <TouchableOpacity onPress={toggleGuestModal} style={styles.guestButton}>
        <Text style={styles.label}>Guests</Text>
        <Text style={styles.subLabel}>Adults: {adults}, Children: {children}, Pets: {pets}</Text>
      </TouchableOpacity>

      <Modal
  transparent={true}
  visible={guestModalVisible}
  onRequestClose={toggleGuestModal}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Guests</Text>

      <View style={styles.guestRow}>
        <Text style={styles.modalText}>Adults</Text>
        <View style={styles.counter}>
          <TouchableOpacity style={styles.minusButton} onPress={() => setAdults(Math.max(0, adults - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{adults}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={() => setAdults(adults + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.guestRow}>
        <Text style={styles.modalText}>Children</Text>
        <View style={styles.counter}>
          <TouchableOpacity style={styles.minusButton} onPress={() => setChildren(Math.max(0, children - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{children}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={() => setChildren(children + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.guestRow}>
        <Text style={styles.modalText}>Pets</Text>
        <View style={styles.counter}>
          <TouchableOpacity style={styles.minusButton} onPress={() => setPets(Math.max(0, pets - 1))}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.countText}>{pets}</Text>
          <TouchableOpacity style={styles.plusButton} onPress={() => setPets(pets + 1)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity   style={styles.confirmButton} onPress={handlePress}>
  <Text style={styles.confirmText}>Confirm</Text>
</TouchableOpacity>

    </View>
  </View>
</Modal>



      <TouchableOpacity style={styles.confirmButton} >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    paddingHorizontal: 20,
  },
  pickupSection: {
    marginVertical: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff', 
  },
  subLabel: {
    fontSize: 14,
    color: '#fff', 
  },
  mapMock: {
    height: 150,
    backgroundColor: '#ddd', 
    marginTop: 10,
  },
  dateButton: {
    marginVertical: 10,
    backgroundColor: '#222', 
    padding: 15,
    borderRadius: 10,
  },
  guestButton: {
    marginVertical: 10,
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
  },
 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    borderColor: '#ebc832',
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: 'black',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    color: 'white',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontSize: 16,
  },
  countText: {
    color: 'white',
    fontSize: 16,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  plusButton: {
    backgroundColor: 'yellow',
    borderRadius: 50,
    width: 40,       
    height: 40,       
    justifyContent: 'center', 
    alignItems: 'center',
  },
  minusButton: {
    backgroundColor: 'grey',
    borderRadius: 50, 
    width: 40,       
    height: 40,
    justifyContent: 'center', 
    alignItems: 'center',
  },

  confirmButton: {
    backgroundColor: '#FFC107',  
    borderRadius: 30,      
    paddingVertical: 12,        
    paddingHorizontal: 24,      
    alignItems: 'center',      
    marginTop: 20,
    
   
  },
  confirmText: {
    color: 'black',             
    fontSize: 16,               
    fontWeight: 'bold',         
  },
  backButton: {
    height: responsiveHeight(4),
    width: responsiveWidth(4),
   
},
map:{
 height: responsiveHeight(28),
 width:responsiveWidth(80),
 alignSelf:'center',
 borderRadius:12
}
});

export default RideBookingScreen;
