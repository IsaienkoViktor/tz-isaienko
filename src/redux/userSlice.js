import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { editUserThunk, getUserThunk } from "./userThunk";


const rejectStatus = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
  }

const pendingStatus = (state) => {
  state.isLoading = true;
}  

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
      .addCase(editUserThunk.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addMatcher(isAnyOf(getUserThunk.rejected, editUserThunk.rejected), rejectStatus)
      .addMatcher(isAnyOf(getUserThunk.pending, editUserThunk.pending), pendingStatus)
  },
});

export const { setFilter } = userSlice.actions;

export const userReducer = userSlice.reducer;
