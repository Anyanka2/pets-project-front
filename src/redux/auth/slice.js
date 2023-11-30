import { createSlice } from "@reduxjs/toolkit";
import { logIn, logOut, refreshUser, register, verifyEmailUser } from "./operation";

const initialState = {
  token: null,
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
      .addCase(register.fulfilled, (state, action) => {
        state.auth = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
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
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authenticate.reducer;
