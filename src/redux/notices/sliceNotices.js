import { createSlice } from "@reduxjs/toolkit";

import { addNotices, getAllNotices } from "./operationsNotices";

const initialState = {
  notices: [],
};

const noticesPets = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNotices.fulfilled, (state, action) => {
        state.notices = action.payload;
      })
      .addCase(getAllNotices.fulfilled, (state, action) => {
        state.notices = action.payload;
      });
  },
});

export const noticesReducer = noticesPets.reducer;
