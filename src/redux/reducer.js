import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:false,
        user:null,
        loading:null,
        error:null,
        message:null,
        token:null,
        bookings: [],
       bookingLoading: false,
       bookingError: null,
      bookingMessage: null,
        cabs: [], 
    },
    reducers:{
        registerRequest: (state) => {
            state.loading = true;
          },
        registerSuccess:(state,action)=>{
            state.loading=false,
            state.isAuthenticated=true,
            state.user=action.payload.user;
            state.message=action.payload.message;
        },
        registerFailure:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.error=action.payload;
        },
       
          loginRequest:(state)=>{
            state.loading=true;

          },
          loginSuccess:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=true;
            state.user=action.payload.user;
            state.message=action.payload.message;
            state.token=action.payload.token;
          },
          loginFailure:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.error=action.payload;
          },
          clearError: (state) => {
            state.error = null;
          },
          clearMessage: (state) => {
            state.message = null;
          },
          loadUserRequest:(state)=>{
state.loading=true;
          },
          loadUserSuccess:(state,action)=>{
            state.loading=false;
            state.user = action.payload.user;  
            state.message = "User loaded successfully";
          },
          loadUserFailure:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=false;
            state.error=action.payload;
          },
          // **Update User**
    updateUserRequest: (state) => {
      state.loading = true;
    },
    updateUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = "User updated successfully!";
    },
    updateUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logoutRequest:(state)=>{
state.loading=true;
    },
    logoutSuccess:(state)=>{
      state.loading=false;
      state.isAuthenticated=false;
      state.user=null;
    },
    logoutFailure:(state,action)=>{
      state.loading=false;
      state.isAuthenticated=true;
      state.error=action.payload;
    },
    loadCabRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loadCabSuccess: (state, action) => {
      state.loading = false;
      state.cabs = action.payload.bookings || [];
      state.message = "Cabs loaded successfully";
      console.log("Cabs loaded in reducer:", state.cabs);
    },
    loadCabFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.cabs = [];
      console.error("Cab loading failed:", action.payload);
    },
    contactRequest: (state) => {
      state.loading = true;
    },
    contactSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
    },
    contactFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    driverloginRequest:(state)=>{
      state.loading=true;

    },
    driverloginSuccess:(state,action)=>{
      state.loading=false;
      state.isAuthenticated=true;
      state.user=action.payload.user;
      state.message=action.payload.message;
      state.token=action.payload.token;
    },
    driverloginFailure:(state,action)=>{
      state.loading=false;
      state.isAuthenticated=false;
      state.error=action.payload;
    },
      // Booking reducers
      bookCabRequest: (state) => {
        state.bookingLoading = true;
        state.bookingError = null;
      },
      bookCabSuccess: (state, action) => {
        state.bookingLoading = false;
        state.bookings.push(action.payload.booking);
        state.bookingMessage = "Booking successful!";
      },
      bookCabFailure: (state, action) => {
        state.bookingLoading = false;
        state.bookingError = action.payload;
      },
      clearBookingError: (state) => {
        state.bookingError = null;
      },
      clearBookingMessage: (state) => {
        state.bookingMessage = null;
      }
    }
})
export const {registerSuccess,registerRequest,registerFailure,updateUserFailure,updateUserRequest,updateUserSuccess,clearError,clearMessage,loginFailure,loginRequest,loginSuccess,loadUserSuccess,loadUserFailure,loadUserRequest,logoutFailure,logoutRequest,logoutSuccess,loadCabFailure,loadCabRequest,loadCabSuccess,contactRequest,contactFailure,contactSuccess,driverloginFailure,driverloginRequest,driverloginSuccess,bookCabRequest,bookCabFailure,bookCabSuccess,clearBookingError,clearBookingMessage}=authSlice.actions;