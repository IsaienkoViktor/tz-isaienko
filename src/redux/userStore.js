import { configureStore } from "@reduxjs/toolkit";
import { filterReducer, userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    filter: filterReducer,
  },
});
