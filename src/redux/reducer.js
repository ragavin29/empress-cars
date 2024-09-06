import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:false,
        user:null,
        loading:null,
        error:null,
        message:null,
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
        clearError: (state) => {
            state.error = null;
          },
          clearMessage: (state) => {
            state.message = null;
          },
    }
})
export const {registerSuccess,registerRequest,registerFailure,clearError,clearMessage}=authSlice.actions;