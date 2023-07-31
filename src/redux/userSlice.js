import { createSlice } from "@reduxjs/toolkit";
import { editUserThunk, getUserThunk } from "./userThunk";

const userSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    error: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(getUserThunk.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      });
  },
});

export const userReducer = userSlice.reducer;
