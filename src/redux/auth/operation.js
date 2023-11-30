import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


import { toast } from "react-toastify";

axios.defaults.baseURL = "https://pet-web-server.onrender.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "api/auth/registration",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("api/auth/registration", credentials);
      if (res) {
        toast("Registration Succses", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
         toast(`A verification email has been sent to ${credentials.email}`, {
           position: "top-right",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
         });
      }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message
      );
    }
  }
);
export const verifyEmailUser = createAsyncThunk(
  "api/auth/verify",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`api/auth/verify/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logIn = createAsyncThunk(
  "api/auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/api/auth/login", credentials);
      setAuthHeader(res.data.token);
    
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.message,
        toast('Email or Password is Incorrect ', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      );
    }
  }
);
export const logOut = createAsyncThunk(
  "api/auth/logout",
  async (_, thunkAPI) => {
    try {
      await axios.post("/api/auth/logout");

      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "api/users/current",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    try {
      const response = await axios.get("api/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateCurrentUser = createAsyncThunk(
  "api/users/update",
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    try {
      const response = await axios.put("api/users/current", credentials, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addMyPet = createAsyncThunk(
  "api/users/addPet",
  async (credentials, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      const response = await axios.post("api/users/pets", credentials, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMyPet = createAsyncThunk(
  "api/user/deletePet",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      const response = await axios.delete(`api/users/pets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const uploadImg = createAsyncThunk(
  "api/user/img",
  async (file, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    console.log(file);
    const data = new FormData();
    data.append("user_avatar", file);
    try {
      const response = await axios.patch("api/users/avatar", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
