import { createSlice } from "@reduxjs/toolkit";

import { addNotices, deleteNotice, getAllNotices } from "./operationsNotices";

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
      })
      .addCase(deleteNotice.fulfilled, (state, action) => {
        const index = state.notices.findIndex(
          (notice) => notice.id === action.payload._id
        );
        state.notices.splice(index, 1);
      })
  },
});

export const noticesReducer = noticesPets.reducer;
