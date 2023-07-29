import { createAsyncThunk } from "@reduxjs/toolkit";
import { editUser, fetchAllUsers } from "../services/api";

export const getUserThunk = createAsyncThunk(
  "contacts/fetchAll",
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
  "user/patch",
  async ({ id, avatar, user, tweets, followers }, { rejectWithValue }) => {
    try {
      const userData = { id, avatar, user, tweets, followers };
      const response = await editUser(`/users/${id}`, userData);
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
