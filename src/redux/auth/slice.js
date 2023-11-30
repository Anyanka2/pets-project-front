import { createSlice } from "@reduxjs/toolkit";
import { deleteMyPet, getCurrentUser, logIn, logOut, register, updateCurrentUser, verifyEmailUser } from "./operation";

const initialState = {
  token: null,
  user: {},
  isLoggedIn: false,
  isRefreshing: false,
  verify: false
};

const authenticate = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = {};
        state.token = null;
      })
      .addCase(verifyEmailUser.fulfilled, (state, { payload }) => {
        state.verify = true;
      })
      .addCase(verifyEmailUser.rejected, (state) => {
        state.verify = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload[0];
       
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(deleteMyPet.fulfilled, (state, { payload }) => {
        const updatedPetsData = state.user.petsData.filter(
          (pet) => pet._id !== payload._id
        );
        state.user.petsData = updatedPetsData;
        state.user = {
          ...state.user,
          petsData: updatedPetsData,
        };
      });
  },
});

export const authReducer = authenticate.reducer;
