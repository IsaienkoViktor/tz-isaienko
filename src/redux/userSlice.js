import { createSlice } from "@reduxjs/toolkit";
import { editUserThunk, getUserThunk } from "./userThunk";

const userSlice = createSlice({
  name: "users",
  initialState: {
    filter: "All",
    items: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
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

export const { setFilter } = userSlice.actions;

export const userReducer = userSlice.reducer;
