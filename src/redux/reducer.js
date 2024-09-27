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
    }

    }
})
export const {registerSuccess,registerRequest,registerFailure,updateUserFailure,updateUserRequest,updateUserSuccess,clearError,clearMessage,loginFailure,loginRequest,loginSuccess,loadUserSuccess,loadUserFailure,loadUserRequest,logoutFailure,logoutRequest,logoutSuccess}=authSlice.actions;