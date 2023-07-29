import { createSlice } from "@reduxjs/toolkit";
import { editUserThunk, getUserThunk } from "./userThunk";

const userSlice = createSlice({
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
      })
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.item = payload;
        state.error = null;
        state.isLoading = false;
      });
  },
});

const userFilter = createSlice({
  name: "filter",
  initialState: {
    name: "All",
  },
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});



export const filterReducer = userFilter.reducer;

export const { setFilter } = userFilter.actions;

export const userReducer = userSlice.reducer;
