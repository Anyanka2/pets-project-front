import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://pet-web-server.onrender.com/";

export const addNotices = createAsyncThunk(
  "api/notice/addPet",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      const response = await axios.post("api/notices/addNotice", data, {
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
export const addNoticesToFavorite = createAsyncThunk(
  "api/notice/addPet",
  async (noticeId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      const response = await axios.patch(`/api/users/favoriteNotices/${noticeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllNotices = createAsyncThunk(
  "api/notice/all",
  async (data, thunkAPI) => {
    try {
      const response = await axios.get(
        `api/notices?offset=${data.page}&limit=${data.limit}&ownerId=${data.ownerId}`
      );

      return response.data.data.resourses;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getOneNotice = createAsyncThunk(
  "api/notice/id",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`api/notices/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteNotice = createAsyncThunk(
  "api/notice/delete",
  async (noticeId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    try {
      const response = await axios.delete(`api/notices/${noticeId}`, {
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
