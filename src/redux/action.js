import axios from "axios";
import { contactFailure, contactRequest, contactSuccess, loadCabFailure, loadCabRequest, loadCabSuccess, loadUserFailure, loadUserRequest, loadUserSuccess, loginRequest, loginSuccess, logoutFailure, registerFailure, registerRequest, registerSuccess, updateUserFailure, updateUserRequest, updateUserSuccess } from "./reducer";
import { showToast } from "../utils/showToast";
const serverUrl = "http://13.60.25.121/api/";
import { BASE_URL } from "../utils/serverUrl";
export const register = (formData) => async (dispatch) => {
    try {
        dispatch(registerRequest());
        const { data } = await axios.post(
            'http://13.60.25.121/api/test/auth/register',
            formData,  
            {
                headers: {
                    "Content-Type": "application/json", 
                },
            }
        );
        console.log("Data is", data);
        dispatch(registerSuccess(data.message));
        showToast('success', data.message, 'You are now registered');
    } catch (error) {
        console.log("Error", error.response?.data || error.message);
        dispatch(registerFailure());
        showToast('error', error.message, 'Please try again');
    
    }
};
export const login = (formData) => async (dispatch) => {
    try {
      console.log("Login Called")
        dispatch(loginRequest());
      const { data } = await axios.post(
       'http://35.154.179.0/api/test/auth/login',
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Login data is", data);
      dispatch(loginSuccess(data));
      showToast('success', 'Login Successful', 'Welcome back!');
    } catch (error) {
      console.log("Login Error", error.response?.data || error.message);
      showToast('error', 'Login Failed', error.response?.data?.message || error.message);
    }
  };
  export const getUser = (email) => async (dispatch, getState) => {
    try {
      dispatch(loadUserRequest());
      console.log("Load User Called");
      const { token } = getState().auth;
  
      if (!token) {
        throw new Error('No authentication token found');
      }
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` 
        }
      };
  
      const { data } = await axios.get(`http://13.60.25.121/api/test/auth/user/${email}`, config);
      console.log("Fetched User Data: ", data);
      
      if (data.success) {
        console.log("User Data Load Successfully");
        dispatch(loadUserSuccess(data));
        console.log("Data of user",data.user)
      } else {
        throw new Error(data.message || 'Failed to fetch user data');
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Something went wrong. Please try again.';
      
      dispatch(loadUserFailure(errorMessage));
      showToast('error', errorMessage, 'Please try again');
      
      console.log("Error", error.response?.data || error.message);
    }
  };
  export const updateUser = (userData) => async (dispatch, getState) => {
    try {
      dispatch(updateUserRequest());
  console.log("Getting Request from User")
      const { token } = getState().auth;
      console.log("Getting Token from User",token)
      if (!token) {
        throw new Error('No authentication token found');
      }
  
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      };
  
      const formData = new FormData();
      for (const key in userData) {
        if (userData[key]) {
          formData.append(key, userData[key]);
        }
      }
  
      const { data } = await axios.put(
        "http://13.60.25.121/api/test/auth/updateuser", 
        formData,
        config
      );
  
      dispatch(updateUserSuccess(data));
      showToast('success', "Profile Updated", "Your profile has been updated successfully.");
    } catch (error) {
      console.log("Update User Error is",error);
      const errorMessage = error.response?.data?.message || error.message;
      dispatch(updateUserFailure(errorMessage));
      showToast('error', "Update Failed", errorMessage);
    }
  };
  
  export const logout=()=> async (dispatch)=>{
try{
  dispatch(loginRequest());
await axios.get();
dispatch(loginSuccess());


}catch(error){
  console.log("Error from Logout",error);
dispatch(logoutFailure(error.response.data.message))
}
  }


  export const getCabs = () => async (dispatch, getState) => {
    console.log("Calling aany Cabs Avialble"); // Check if this is logged
    try {
        dispatch(loadCabRequest());
        const { token } = getState().auth;
        // console.log("Token from getState: ", token);

        if (!token) {
            throw new Error('No authentication token found');
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };

        const { data } = await axios.get(`${BASE_URL}/cabs/mycabbookings/all`, config);
        console.log("Fetched Cabs Data: ", data?.bookings);

        if (data.success) {
          dispatch(loadCabSuccess({ bookings: data.bookings }));
          // Ensure this matches your API response structure
        } else {
            throw new Error(data.message || 'Failed to fetch cab data');
        }
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'Something went wrong.';
        dispatch(loadCabFailure(errorMessage));
        console.log("Error", errorMessage);
    }
};


export const sendContact = (formData) => async (dispatch) => {
  try {
    dispatch(contactRequest());
    console.log("Contact Request Get Called");

    const { data } = await axios.post('http://35.154.179.0/api/test/user/cabs/contact', formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Data is", data);
    dispatch(contactSuccess(data.message));
    showToast('success', data.message, 'Queries Sent Successfully');
  } catch (error) {
    console.log("Erro from cona0",error)
    console.log("Error", error.response?.data || error.message);
    dispatch(contactFailure(error.response?.data || error.message)); // Pass the error message properly
    showToast('error', error.message, 'Could not send Message');
  }
};
