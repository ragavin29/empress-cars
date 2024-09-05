import axios from "axios";
import { registerFailure, registerRequest, registerSuccess } from "./reducer";
import Toast from "react-native-toast-message";
import { showToast } from "../utils/showToast";
const serverUrl = "http://13.60.25.121/api/";

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
