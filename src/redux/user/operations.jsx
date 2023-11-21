import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://pet-web-server.onrender.com/';
export const listMyPets = createAsyncThunk(
  'api/user/pets',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('api/user/pets');
      
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMyPet = createAsyncThunk(
  'api/user/pets',
  async (pet, thunkAPI) => {
    try {
      const response = await axios.post('api/user/pets', pet);
       
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteMyPet = createAsyncThunk(
  'api/user/pets',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`api/user/pets/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const updateMyPet = createAsyncThunk(
  'api/user/pets',
  async (id,pet, thunkAPI) => {
    try {
      const response = await axios.patch(`api/user/pets/${id}`,pet);
      console.log(response.data)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
