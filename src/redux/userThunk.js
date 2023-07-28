import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllUsers } from "../services/api";

export const getUserThunk = createAsyncThunk(
  "contacts/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const  response  = await fetchAllUsers();      
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
