import { createAsyncThunk } from "@reduxjs/toolkit";
import { editUser, fetchAllUsers } from "../services/api";

export const getUserThunk = createAsyncThunk(
  "users/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchAllUsers();
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const editUserThunk = createAsyncThunk(
  "users/put",
  async ({ id, user }, { rejectWithValue }) => {
    try {
      const response = await editUser(id, user);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
