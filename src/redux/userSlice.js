import { createSlice } from "@reduxjs/toolkit";
import { getUserThunk } from "./userThunk";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    item: [],
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getUserThunk.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const userSliced = userSlice.reducer;
