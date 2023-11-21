import { createSlice } from '@reduxjs/toolkit';
// import { logOut } from 'redux/auth/operations';
import {
    listMyPets,
    addMyPet,
    deleteMyPet,
    updateMyPet,
} from './operations';

const petsSlice = createSlice({
  name: 'tasks',
  initialState: {
    pets: [],
    isLoading: false,
    error: null,
  },
  reducers: {}, 
  extraReducers: builder => {
    builder
      .addCase(listMyPets.pending, state => {
        state.isLoading = true;
      })
      .addCase(addMyPet.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteMyPet.pending, state => {
        state.isLoading = true;
      })
      .addCase(listMyPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addMyPet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteMyPet.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(listMyPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(addMyPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
      })
      .addCase(deleteMyPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
    //   .addCase(logOut.fulfilled, state => {
    //     state.contacts = [];
    //     state.error = null;
    //     state.isLoading = false;
    //   })
      .addCase(updateMyPet.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
      });
  },
});

export const petsReducer = petsSlice.reducer;
